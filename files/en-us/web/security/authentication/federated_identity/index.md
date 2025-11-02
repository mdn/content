---
title: Federated identity
slug: Web/Security/Authentication/Federated_identity
page-type: guide
sidebar: security
---

In a **federated identity** system, a website delegates authentication to a third party.

- The third party, which is commonly called an {{glossary("identity provider", "Identity Provider (IdP)")}}, manages a user's credentials and can authenticate users.
- The website, which is commonly called a {{glossary("relying party",  "Relying Party (RP)")}}, trusts the IdP to make assertions about a user's identity.

When the user wants to sign into the website, the website redirects them to the IdP. The user authenticates to the IdP, and the IdP returns a token to the website indicating that the user authenticated successfully. The website checks that the token is valid, and if it is, signs the user in.

![Overview of federated identity sign-in.](federated-identity-overview.svg)

> [!NOTE]
> Federated identity is not really an authentication _method_: it's more like an _architecture_ within which various different authentication methods could be used. That is, an IdP could choose to authenticate users with one or more methods, such as traditional passwords, one-time passwords, biometrics, or passkeys.

This model has some benefits for both users and websites:

- Websites don't have to implement their own authentication, or securely handle user {{glossary("credential", "credentials")}}.
- A single IdP can authenticate users for many different websites. This means that the user doesn't have to use a different credential for each site: if credentials are passwords, this reduces the risk of password reuse or the user choosing weak, easy-to-remember passwords.
- If a user already has an account with an IdP that your website trusts to authenticate users, then it's much easier for users to sign up to your site, because they don't need to get new credentials specifically for your site.

In this guide we'll explore how a website can work with an IdP to add federated sign-in for their users. We'll cover:

- The main flows defined in the [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/) protocol, which is the dominant standard for federated identity, and good practices to follow when implementing them.
- Third-party services that can simplify the process of implementing federated identity.
- How browser restrictions on third-party cookies create problems for federated identity implementations.
- The [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API), which makes the browser's role much more active, to simplify the role of the RP and avoid relying on third-party cookies.

## OpenID Connect

The standard most commonly used for federated identity on the web is [OpenID Connect (OIDC)](https://openid.net/developers/how-connect-works/), which is an authentication protocol built on top of the [OAuth 2.0 authorization framework](https://datatracker.ietf.org/doc/html/rfc6749).

### Authentication flow

In this section we'll start by walking through the main authentication flow defined in OIDC. There are many options within the OIDC authentication flow: in this walkthrough we'll present the recommended options, and we will talk later about alternatives.

This flow is defined in the [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html) specification.

As a prerequisite, the RP needs to be known to the IdP: the IdP needs to have an ID for the RP, which is called a client ID, and the RP must be able to authenticate itself to the IdP, for example using a shared secret called a client secret or using some other mechanism such as TLS client authentication.

> [!NOTE]
> The OpenID specifications use the term "OpenID Provider" (OP) to refer to what we call an IdP in this guide.

![The OIDC authentication flow](oidc-auth-flow.svg)

The first thing to note here is that the flow consists of two parts.

- **Authentication request**: the RP asks the IdP to authenticate the user by making a request to the IdP's _authorization endpoint_. The IdP authenticates the user and returns an _authorization code_ to the RP. The code expires after a short period of time (recommended to be no more than 10 minutes).
- **Token request**: the RP sends the authorization code to a separate endpoint in the IdP, called the _token endpoint_, and this endpoint responds with an object containing two tokens:
  - An _access token_, which enables the user to access specific resources in the website (like an API key)
  - An _ID token_, which identifies the user, and enables the RP to sign the user in.

In the authentication request:

1. The user asks to sign into the RP.

2. The RP redirects the browser to the IdP's authorization endpoint, asking it to authenticate the user. The RP can provide various parameters along with the request, including:
   - `client_id`: Identifies this RP to the IdP.
   - `response_type`: Always `"code"` if we are using the two-part flow described here, which is the recommended option.
   - `redirect_uri`: The URL in the RP, that the IdP should redirect to once it has attempted to authenticate the user. This is the URL to which the IdP will deliver the authorization code.
   - `code_challenge`: A cryptographic {{glossary("hash")}} of a secret specific to this authorization request, which will be used by the token endpoint to ensure that the token request is really the counterpart of this authorization request.
   - `scope`: A list of strings that specify which sets of user data the RP wishes to access.

3. The IdP authenticates the user. The protocol does not specify a particular method for this: the IdP could use a password, a one-time password, a biometric, or any other appropriate method.

4. If authentication is successful, the IdP generates the authorization code. It also stores the `code_challenge` value, and associates it with the authorization code. The IdP then redirects the browser to the RP's redirect URL, passing the authorization code as a parameter.

In the token request:

1. The RP makes a {{httpmethod("POST")}} request to the token endpoint. This request includes the following parameters:
   - `client_id`: Identifies this RP to the IdP.
   - `client_secret`: The secret used to authenticate the RP to the token endpoint. The RP could use some alternative mechanism for client authentication, such as TLS client authentication.
   - `grant_type`: This should be `"authorization_code"`.
   - `code`: The authorization code.
   - `code_verifier`: This is the original secret that was used to produce the `code_challenge` parameter in the authentication request.

2. The IdP validates the request:
   - It authenticates the RP using client authentication.
   - It hashes the `code_verifier` parameter, and then checks that the result matches `code_challenge`.

3. If the request is valid, the IdP responds with two tokens:
   - An access token, which grants the user access to some resource in the RP.
   - An ID token, which identifies the user. This is a cryptographically signed [JSON Web Token](https://www.jwt.io/).

4. The RP validates the tokens: among other checks, it verifies the IdP's signature on the ID token. If validation succeeds, the RP signs the user in.

### Security features

In this section we will summarize the main security features of the OIDC authentication flow we've just described.

#### Authorization code flow

The two-step flow we have described is called the "authorization code flow". In an alternative flow, called the "implicit flow", only the first step exists, and the response to the authentication request already contains the access and ID tokens. This is unsafe, because the tokens are exposed to the RP's front end, which is regarded as much less secure than the back end. For example, in a successful [XSS](/en-US/docs/Web/Security/Attacks/XSS) attack, or if the user installs a malicious browser extension, then the attacker might be able to steal the user's tokens.

For this reason, websites should always use the authorization code flow. Even if an attacker can steal the authorization code, they still need to convince the token endpoint to give them the tokens in exchange for the code.

#### Client authentication

In the flow we have described, the RP authenticates itself to the token endpoint when it makes the token request. This means that if an attacker does manage to steal the authorization code, it still has to successfully impersonate the RP to get the tokens from the IdP.

The OAuth specification distinguishes between [_confidential_ and _public_ clients](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1). Confidential clients are essentially clients that can keep a secret, and public clients are those that can't.

The specification considers that clients running on the user's browser are public clients, for the same reason we've already encountered: it's too easy for an attacker to access secrets in a browser via attacks such as XSS. Clients running on a web _server_ are confidential clients.

In OIDC, only confidential clients may use client authentication, because only confidential clients can be trusted to maintain the security of the client's credentials.

#### Proof Key for Code Exchange (PKCE)

The `code_challenge` and `code_verifier` values that the RP provides in the authentication request and token request, respectively, are part of a mechanism called _Proof Key for Code Exchange_ (PKCE), specified in {{rfc("7636")}}.

In the authentication request:

- The RP generates a value that is hard to guess and is specific to this authentication request. This value is called the _code verifier_.
- The RP creates a {{glossary("hash", "cryptographic hash")}} of the code verifier, and uses it as the `code_challenge` parameter in the authentication request.
- The IdP stores the code challenge, and associates it with the access code that it returns to the RP.

In the token request:

- The RP passes the code verifier in the _code_verifier_ parameter.
- The IdP hashes the code verifier, and compares the result with the stored code challenge: if they do not match, then the token request is denied.

This defends against two attacks: CSRF against the RP's redirect URL, and authorization code injection.

The CSRF attack works as follows:

1. The attacker makes an authentication request to the IdP for themselves, and gets back an authorization code for their own tokens.

2. The attacker tricks the user's browser into making an HTTP request to the RP's redirect URL, including the attacker's authorization code. To the RP, this looks like a response from the IdP to an authentication request originating from the user.

3. The RP makes a token request to the IdP, including the attacker's authorization code.

4. The IdP responds with the attacker's tokens.

5. The RP signs the user into the attacker's account: now any information or instructions they provide are under the attacker's control.

Essentially, the attack succeeds because the RP doesn't know that the authentication response is not a response to a request made on behalf of the user. PKCE prevents this attack because the IdP would have a stored code challenge for the attacker's access code, and this would not match the code verifier that the RP passes into the token request.

An alternative protection against this attack is the `state` parameter defined in OAuth 2.0. In this defense, the RP provides an unpredictable value as a parameter in the authentication request, and the IdP includes the same value in the response: the RP checks that they match. Because the attacker can't predict the value of `state`, they can't pass a matching value to the RP's redirect URL.

In the authorization code injection attack:

1. The attacker is able to steal the user's authorization code.

2. The attacker starts its own OIDC authentication flow, but intercepts the IdP's authentication response, replacing the authorization code with the code it stole from the user. This is straightforward, because the authentication response is for the attacker, so it passes through the attacker's device.

3. The RP then continues its authentication flow for the attacker by making the token request to the IdP, including the user's authorization code that the attacker has injected.

4. The IdP responds with the user's tokens.

5. The RP signs the attacker into the user's account.

Note that this is really the inverse of the CSRF attack. Note also that the `state` parameter doesn't help here, because the authentication request and response really do belong to the same flow - the attacker's.

PKCE protects against this attack, because the IdP's token endpoint will check the `code_verifier` in the token request against the code challenge that it received in the authentication request.

- Because the IdP's stored code challenge is associated with the authorization code, it will be the challenge for the user.
- Because the `code_verifier` in the token request is part of the attacker's flow, it will be the verifier for the attacker.

So the codes won't match, and the token request fails.

An alternative to PKCE, specified in OIDC, is the [`nonce`](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#name-nonce) value. The RP includes this as another parameter in the authentication request: the IdP stores it, and the token endpoint returns it to the RP along with the tokens. The RP then checks that the returned value is the same as the original value.

### Architectures for OIDC clients

The [OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-25) specification describes how web application architecture can affect the security threats faced by OIDC clients (that is, relying parties), and makes some recommendations for web application architecture.

In particular, it finds that:

- The most secure pattern is one in which the website uses a web server to handle all OAuth/OIDC interactions and interactions with APIs that are protected by access tokens. In this pattern, the RP can be a confidential client, because it can keep client secrets in the server. It can also keep all tokens in the server, including access tokens.

- The next most secure pattern is one in which the website uses a web server to handle all OAuth/OIDC interactions, but then returns the access token to the front end, and the front end then makes API requests directly. In this scenario the website can be a confidential client but malicious code running in the browser (for example, through an XSS attack) can potentially steal access tokens. However, the front end doesn't have to store access tokens long-term: it can retrieve them from the backend when it needs them.

- The least secure pattern is one in which OAuth/OIDC interactions and interactions with APIs both take place in the front end. This, for example, would be the natural architecture for a {{glossary("SPA", "Single-page app")}}, where the entire application executes in the browser. In this architecture the RP can't be a confidential client, because it can't reliably keep a client secret. This means that it can't authenticate itself to the IdP. It also has to persistently store tokens, which increases the risk of malicious code stealing them.

The specification also includes detailed recommendations for security practices to follow in each of these three scenarios.

### OIDC sign-out

Sign-out scenarios are more complex in a federated identity system than in a non-federated system, because:

- The user might sign out of the RP either on the RP's site or on the IdP's site.
- The user might choose to sign out of the RP only, or to sign out globally: that is, to sign out of all RPs that they are signed into with this IdP. This is a common requirement when we use federated identity to build a {{glossary("single sign-on", "single sign-on (SSO)")}} system, in which an employee might use a single set of corporate credentials to sign into email, a bug tracker, and a discussion forum.

Supporting these scenarios means implementing some communication mechanism between the RP and the IdP. For example:

- If the user signs out at the IdP, then the RP should be notified, and sign the user out in the RP.
- If the user signs out at the RP, then the IdP should be notified, and be able to sign the user out of all RPs that they are currently signed into.

The OpenID specifications define two general approaches to implementing this coordination, which they call "front channel logout" and "back channel logout".

In [front channel logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html), the browser is used to mediate the communication, by embedding an {{htmlelement("iframe")}} in a page from the sender, whose content is loaded from the recipient. For example, if the user signs out at the IdP, the IdP may embed an `<iframe>` whose `src` attribute points to the RP's logout URL: when the `<iframe>` is rendered, the browser makes a {{httpmethod("GET")}} request to that URL, which the RP interprets as an instruction to sign the user out.

In [back channel logout](https://openid.net/specs/openid-connect-backchannel-1_0.html), the RP and the IdP communicate directly with each other, bypassing the browser.

## Identity providers

## Third-party cookies

When implementing a federated identity system, we have to coordinate the interactions between the RP, the IdP, and the user. Some implementations of this coordination depend on browser support for [third-party cookies](/en-US/docs/Web/Privacy/Guides/Third-party_cookies).

For example, in front-channel logout (one of the approaches to implementing [sign-out in OpenID Connect](#oidc_sign-out)) we use cross-site {{htmlelement("iframe")}} elements, in which the RP's document contains an `<iframe>` whose content is loaded from the OP, or vice versa. This depends on the embedded `<iframe>` being able to send its cookies to its origin.

Similarly, while the main [OpenID Connect authentication flow](#authentication_flow) uses full-page redirects to coordinate between the participants, this is a distracting experience for users and is difficult for {{glossary("SPA", "single-page apps")}} to support. A better user experience can be achieved by embedding the IdP as an `<iframe>` in the RP's page, and this again depends on third-party cookies.

However, because third-party cookies are widely used for [tracking users](/en-US/docs/Web/Privacy/Guides/Third-party_cookies#what_is_the_problem_with_third-party_cookies), browsers have taken steps to deprecate and remove support for them, and they are now not supported by default in some browsers.

As such, we don't recommend implementing federated identity features in a way that depends on third-party cookies.

## The FedCM API
