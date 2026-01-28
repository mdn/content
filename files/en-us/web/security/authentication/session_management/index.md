---
title: Session management
slug: Web/Security/Authentication/Session_management
page-type: guide
sidebar: security
---

Once a website has authenticated a user, it typically needs to remember that user's identity across the subsequent requests that the user makes to the site. That's the function of a session management system.

Session management is not exclusive to authentication: for example, a site might let any user choose a light or dark theme, and then their choice would represent state that should persist across subsequent requests to the site. However, it's especially relevant to authentication, because an authenticated user's identity on the site represents state that is especially valuable to an attacker, so a site author has to be especially careful when implementing a session management solution for authenticated users.

In this guide we'll first describe the most common architecture for session management, in which the user's session state is kept in the server:

- When the user is authenticated, the server records their state and generates a _session ID_, which it associates with this state. The server returns a copy of the session ID to the client. The client stores the session ID.

- When the client makes a request to the server, the client includes the ID. The server uses this to look up the user's session state, to decide what the client is allowed to do.

![Diagram showing session management using server-maintained session state](session-mgt-centralized.svg)

## Attacks

In targeting session management, an attacker's goal is to be able to impersonate a legitimate user, without having to compromise the website's authentication system itself. In this section we'll describe the two main ways in which an attacker can do this: [_session hijacking_](#session_hijacking) and [_session fixation_](#session_fixation).

### Session hijacking

Session hijacking is a general term for an attack in which an attacker can take over a legitimate user's session. There are a few common approaches here, but they all involve accessing the session ID value for an authenticated user.

#### Intercepting the session ID

The attacker could steal a session ID while it is being sent between client and server, in a [manipulator in the middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM) attack.

The defense against this is to serve the site over [TLS](/en-US/docs/Web/Security/Defenses/Transport_Layer_Security).

#### Predicting the session ID

If an attacker can predict, guess, or brute-force the value of the session ID that's assigned to a legitimate user, then they can use that ID to impersonate them, without having to steal the user's copy.

The defense against this is to [ensure that session ID values are long enough and random enough to be unpredictable](#session_id_recommendations).

#### Attacking the client

An attacker can hijack a session if it can execute its code in the user's browser, in the context of the target website, for example in a [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attack.

If the session ID is available to JavaScript (for example, because it is stored in [local storage](/en-US/docs/Web/API/Web_Storage_API)), then the attacker can steal the ID and use it to impersonate the user.

The defense against this is to implement the usual [defenses against XSS](/en-US/docs/Web/Security/Attacks/XSS#defenses_against_xss).

### Session fixation

Ina session fixation attack, the attacker chooses a session ID value, and then convinces the website to use this value as the session ID for the target user. The attacker can then impersonate the user, because they know the ID. In this attack, the attacker doesn't have to steal the ID, because they knew it all along.

For example, suppose the target website expects to see the session ID included as a URL parameter in requests that the client makes. Suppose also that initially, the target user has an account on the target website but is not signed in.

The attacker invents a session ID value and sends the user an email containing a link, with a plausible reason for the user to click the link. The link is to the target website, and includes the attacker-generated session ID as a URL parameter:

```plain
https://target-website.example.org/login?session=ATTACKER-GENERATED-ID
```

If the user clicks the link, the session ID is sent to the website. If the user then signs in, and the website reuses this session ID for the signed-in user, then the attacker can impersonate the user, because they already know the value.

If the website uses cookies, instead of URL parameters, to send the session ID, then this attack is harder: the attacker needs to be able to execute an XSS attack on the target website. This is one reason cookies are a much better method for storing and communicating session IDs than URL parameters.

The key defense against session fixation, though, is that the server must always generate a new session ID, and invalidate any existing value, every time the user signs in.

## Session ID values

The session ID should:

- Contain enough entropy to protect against [guessing or prediction attacks](predicting_the_session_id). The [OWASP guide to session management](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#session-id-properties) recommends at least 64 bits of entropy.

- Be meaningless except as a key for the server: that is, it should not contain any information about the user or their account.

If possible, websites should use a reputable web framework or library to generate session IDs.

## Session ID storage

Clients need to be able to store session identifiers securely, so an attacker can't access the value and hijack the session.

The two main options for storing session identifiers are [local storage](/en-US/docs/Web/API/Web_Storage_API) and [cookies](/en-US/docs/Web/HTTP/Guides/Cookies).

Cookies are the recommended choice, because a website can prevent the cookie from being accessible to JavaScript by setting the [`HttpOnly`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) attribute. With this attribute set, even in a successful XSS attack, the malicious code can't access the session ID itself (for example, to send it to the attacker). This offers a clear benefit over other client-side storage methods.

Note though that it isn't a complete protection: the malicious code can still make HTTP requests to the target server from the user's browser that would include the session ID, so would be granted the user's privileges on the site.

## Session ID transmission

If a session ID is stored in local storage, then the client must explicitly read the ID and include it in the requests that it makes.

If the session ID is in a cookie, then it will be automatically sent when the client makes requests. Again, there are attributes that control which requests include the cookie.

### Secure transmission

If the [`Secure`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) attribute is set, then the cookie will not be sent over unencrypted connections. This is a defense against a [Manipulator in the Middle (MITM)](/en-US/docs/Web/Security/Attacks/MITM) attack stealing a session identifier while it is in transit.

### Controlling cookie destinations

The [`Domain`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#domain) and [`Path`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#path) attributes control the URLs to which the cookie will be sent, and should be set to the most restrictive values possible, given the needs of your site.

By default, the cookie will only be sent to the same host that set it. For example, a cookie set from `https://login.example.org` will not be included in requests to `https://products.example.org` or even `https://example.org`. If you need to relax this, you can do so using the `Domain` attribute, but you can't allow the cookie to be included in requests to a completely different {{glossary("Site")}}. For example, if the cookie is set from `https://example.org`, you can't arrange for it to be sent to `https://example.com`.

### CSRF considerations

If a website uses cookies to transmit session identifiers, it must implement protection against [cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attacks. The risk here is that the browser may include cookies in a request from the attacker's site to the target website, and if these cookies include a valid session ID, then the server will treat the request as if it came from a legitimate user, and carry out the attacker's request.

Our CSRF guide describes [recommended defenses](/en-US/docs/Web/Security/Attacks/CSRF#defenses_against_csrf) here: note that setting the [`SameSite`](#samesite) cookie attribute is only part of a complete defense.

## Session lifetime

Determining how long a session should last before the user has to reauthenticate is a trade-off between security and usability. The longer a session lasts, the more time an attacker has to hijack it, or to use a stolen session ID. On the other hand, having to reauthenticate is a source of friction for the user.

Websites can use the [`Expires`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#expiresdate) and [`Max-Age`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber) cookie attributes to control when a cookie should expire. If either of these attributes is set, then the cookie is a _persistent_ cookie, meaning that its value is recorded so it can persist over browser restarts.

If both attributes are omitted, then the browser forgets the cookie when the user closes it. The [OWASP cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#expire-and-max-age-attributes) recommends that websites should omit these attributes. However, many websites do use persistent cookies for session management.

### Timeouts

The OWASP cheatsheet describes three different session timeouts, all of which could be implemented as part of a session management strategy:

- _Idle timeout_: this times out after a period of inactivity, defined as a period in which the client has sent no HTTP requests to the server. After it times out, the user must reauthenticate.
- _Absolute timeout_: this times out after a specific time period, whether or not there was activity. After it times out, the user must reauthenticate.
- _Renewal timeout_: this is a shorter timeout than the absolute timeout, and does not depend on inactivity. However, when it times out, the server:
  - Automatically generates a new session ID
  - Invalidates the old session ID
  - Sends the new session ID to the client.

  This enables a website to limit the period for which a session ID is usable by an attacker, without making the user reauthenticate too often.

All these timeouts should be calculated on the server, and actually expiring the session must take place on the server. For the sake of usability, the client should also clear its session state, but from the point of view of security it is the server state that matters.

Specific timeout periods depend on the sensitivity of the session and its usage profile: the OWASP cheatsheet includes recommendations.

### Invalidation events

In some situations, a website might want to invalidate a user's sessions and require reauthentication:

1. When the client attempts some high-risk operation, such as attempting to change, or actually changing, the user's credentials on the site, or triggering the account recovery process (for example, password reset).

2. When the server has some grounds for thinking that the session ID might have been stolen. This could include, for example, a sign-in from a new IP address or device.

## Decentralized session management

The model we've described so far might be called "centralized session management": the session state is maintained in a database on the server, and the client is given an identifier for the state, which it gives to the server when it makes a request.

An alternative model might be called "decentralized session management". In this model, the session state is maintained as a {{glossary("digital signature", "digitally signed")}} object in the client. These signed objects are typically represented as [JSON Web Tokens (JWTs)](https://www.jwt.io/).

When the server authenticates the user, the server:

- Creates a token representing the user's session state, which determines what sort of access this user should have.
- Digitally signs this token
- Returns the signed token to the client.

When the client makes a request, it presents the signed token to the server, which verifies the signature and uses the session state to decide how to handle the request.

Because the state is maintained in the client, this model is popular for distributed applications in which the client might make requests to a number of different servers. The client passes its token to any server, and as long as that server is able to verify signatures made by the token issuer, then the server can determine how to handle the request: there's no need for the server handling the request to interact directly with the token issuer.

In the diagram below, we show the client interacting with two servers:

- The _token server_, which authenticates the user and issues tokens
- The _resource server_, which can validate tokens and carry out requests for properly authorized clients. In a real application, of course, there might be more than one resource server, each handling a different aspect of the application.

![Diagram showing session management using client-maintained session state](session-mgt-decentralized.svg)

Note that decentralized session management tends to be more complicated than the centralized model, and introduces some vulnerabilities that we'll discuss in the next few sections. If you don't need it, because of your app's architecture, it's generally better to use the centralized model.

### Token storage

Considerations for token storage are mostly the same as for [session ID storage](#session_id_storage): if an attacker can steal the token, they can hijack the user's session. So websites often choose to store tokens in `HttpOnly` cookies, to benefit from the protection that this offers against client-side XSS.

There are a few additional considerations that a decentralized, token-based model might need to account for:

- Tokens are much bigger than session IDs, and cookies have a maximum size of 4KB.

- If a distributed application needs to use services from different {{glossary("Registrable domain", "registrable domains")}}, then it can't use cookies to store tokens, because the browser won't send a cookie to a site different from the site that set the cookie. For example, if `https://example.com` sets a cookie, it won't get sent to `https://example.org`.

### Token verification

Many attacks on decentralized session management focus on token verification: that is, the process in which the resource server verifies a token and the claims that it contains before deciding how to handle the request.

For example, the purpose of signing a token is to prevent an attacker from changing an existing token or creating their own token that gives them the target's privileges. However, the JWT format allows for tokens that don't contain a signature, and [some JWT verification libraries have in the past accepted such tokens](https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/). This means an attacker can:

1. Create a fake token, giving them access to the target's account
2. Indicate that this token doesn't contain a signature
3. Present the token to a resource server

If the resource server's JWT library does not enforce the presence of the signature, they may allow this token and give the attacker access.

To defend against an attack like this, the resource server needs to ensure that the JWT library it uses always checks the token signature.

### Invalidating sessions

In our discussion of [invalidation events](#invalidation_events), we've seen that in some situations a website wants to invalidate a user's session and force them to reauthenticate, because of some event that might constitute evidence that the session ID has been stolen by an attacker. For example, if a user tries to change their password, the site should invalidate all their current sessions.

With a centralized model, where the user's session state is maintained on the server, the server can invalidate a session by deleting the session state that it stores.

However, with the decentralized model, the client maintains the session token, and it is self-contained: a resource server should be able to decide how to handle a request based only on the contents of the token. This makes it difficult to revoke a token once it has been issued.

The most common solution to this is to:

1. Give the tokens that the client uses to access resource servers (which are sometimes called _access tokens_), a short validity period, so that even if they are stolen, they can't be used for very long.

2. Add a new type of token called a _refresh token_, which the client is given when the user authenticates. This token has a much longer lifetime than the access token.

3. Allow the token server to issue new access tokens when presented with a valid refresh token.

![Diagram showing session management using client-maintained session state, with refresh tokens](session-mgt-decentralized-refresh-token.svg)

The refresh endpoint gives the application a centralized place to determine whether or not the user's session should be invalidated. If it does choose to invalidate the session, is does so by refusing to issue new access tokens.

## Frameworks and libraries

Rather than implement all the details of session management yourself, we recommend that you use a well-regarded framework or library, and use the facilities it provides for session management.

## Session management checklist

We can summarise the recommendations above as follows:

- Choose a centralized model for session management, if your app's architecture allows it.
- Prefer to store your session ID in a cookie. If you do:
  - Set the `Secure` and `HttpOnly` attributes.
  - Implement CSRF defenses, including setting the `SameSite` attribute to `Lax` or preferably `Strict`, but also using other techniques such as fetch metadata or CSRF tokens.
- Define a policy for session expiry, potentially with an idle timeout, an absolute timeout, and a renewal timeout.
- Invalidate the user's session on events that might indicate session hijacking.
- If you implement a decentralized session management system using tokens:
  - Ensure that your endpoints correctly validate tokens.
  - Consider adding a refresh token and giving access tokens a short lifetime.
- Use a well-regarded session management framework or library, rather than implementing session management yourself.

## See also

- [Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) (OWASP)
