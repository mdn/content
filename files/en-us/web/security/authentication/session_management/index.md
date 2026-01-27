---
title: Session management
slug: Web/Security/Authentication/Session_management
page-type: guide
sidebar: security
---

Once a website has authenticated a user, it typically needs to remember that user's identity across the subsequent requests that the user makes to the site. That's the function of a session management system.

Session management is not exclusive to authentication: for example, a site might let any user choose a light or dark theme, and then their choice would represent state that should persist across subsequent requests to the site. However, it's especially relevant to authentication, because an authenticated user's identity on the site represents state that is especially valuable to an attacker, so a site author has to be especially careful when implementing a session management solution for authenticated users.

In this guide we'll first describe the most common architecture for session management, in which the user's session state is kept in the server:

- When the user is authenticated, the server records their state and generates a _session ID_, which it associates with this state. The server returns a copy of the session ID to the client.

- The client stores the session ID. When the client makes a request to the server, the client includes the ID. The server uses this to look up the user's session state, to decide what the client is allowed to do.

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

## Session ID recommendations

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

If a website uses cookies to transmit session identifiers, it must implement protection against [cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attacks. The risk here is that the browser may include cookies in a request from the attacker's site to the target website, and if these cookies include a valid session ID, then the server will treat the request as if it came from a legitimate user, and carry out the attacker's requeast.

Our CSRF guide describes [recommended defenses](/en-US/docs/Web/Security/Attacks/CSRF#defenses_against_csrf) here: note that setting the [`SameSite`](#samesite) cookie attribute is only part of a complete defense.

## Session lifetime

Determining how long a session should last before the user has to reauthenticate is a trade-off between security and usability. The longer a session lasts, the more time an attacker has to hijack it, or to use a stolen session ID. On the other hand, having to reauthenticate is a source of friction for the user.

Websites can use the [`Expires`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#expiresdate) and [`Max-Age`](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#max-agenumber) cookie attributes to control when a cookie should expire. If either of these attributes is set, then the cookie is a _persistent_ cookie, meaning that its value is recorded so it can persist over browser restarts.

If both attributes are omitted, then the browser forgets the cookie when the user closes it. It's often recommended that websites should omit these attributes: for example, this is the recommendation given in the [OWASP cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#expire-and-max-age-attributes). However, many websites do use persistent cookies for session management.

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

The model we've described so far might be called "centralized session management": the session state is maintained on the server, and the client is given an identifier for the state, which it gives to the server when it makes a request.

An alternative model might be called "decentralized session management". In this model, the session state is maintained as a {{glossary("digital signature", "digitally signed")}} object in the client. These signed objects are typically represented as [JSON Web Tokens (JWTs)](https://www.jwt.io/).

When the server authenticates the user, the server:

- Creates an object representing the user's session state
- Digitally signs this object
- Returns the signed object to the client.

When the client makes a request, it presents the signed object to the server, which verifies the signature and uses the session state to decide how to handle the request.

Because the state is maintained in the client, this model is popular for distributed applications in which the client might make requests to a number of different servers. The client passes its state to any server, and as long as that server is able to verify signatures made by the authentication system, then the server can determine how to handle the request: there's no need for the server handling the request to interact directly with the authentication system.

### Token storage

Considerations for token storage are mostly the same as for [session ID storage](#session_id_storage): if an attacker can steal the token, they can hijack the user's session. So websites often choose to store tokens in `HttpOnly` cookies, to benefit from the protection that this offers against client-side XSS.

There are a few additional considerations that a decentralized, token-based model might need to account for:

- Tokens are much bigger than session IDs, and cookies have a maximum size of 4KB.
- If a distributed application needs to use services from different {{glossary("Registrable domain", "registrable domains")}}, then it can't use cookies, because the browser won't send a cookie to a site different from the site that set the cookie. For example, if `https://example.com` sets a cookie, it won't get sent to `https://example.org`.

### Invalidating tokens

In our discussion of [invalidation events](#invalidation_events), we've seen that in some situations a website wants to invalidate a user's session and force them to reauthenticate. With a centralized model, where the user's session state is maintained on the server, the server can invalidate a session by deleting the session state that it stores.

However, it's a basic principle of the decentralized model that a service within the application should be able to decide how to handle a request based only on the contents of the token.

The most common solution to this is to:

- Give the tokens that the client uses to access APIs, which are sometimes called _access tokens_, a short validity period, so that even if they are stolen, they can't be used for very long.
- Add a new type of token called a _refresh token_, which the client is given when the user authenticates. This token has a much longer lifetime than the access token.
- Add a new _refresh endpoint_, that will issue new access tokens when presented with a valid refresh token.

The refresh endpoint gives the application a centralized place to determine whether or not the user's session should be invalidated. If it does choose to invalidate the session, is does so by refusing to issue new access tokens.

## Framework support
