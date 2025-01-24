---
title: Secure cookie configuration
slug: Web/Security/Practical_implementation_guides/Cookies
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

Limit access to cookies as much as possible.

## Problem

Cookies often contain session identifiers or other sensitive information. Unauthorized access to cookies, therefore, can cause a host of problems, including [privacy](/en-US/docs/Web/Privacy) issues, ({{Glossary("Cross-site_scripting", "Cross-site scripting (XSS)")}}) attacks, Cross-site request forgery ([CSRF](/en-US/docs/Glossary/CSRF)) attacks, and more.

## Solution

To minimize the scope for cookie vulnerabilities on your site, limit access to cookies as much as possible. This can be done via sensible usage of the following directives of the [`Set-Cookie`](/en-US/docs/Web/HTTP/Headers/Set-Cookie) header:

- `Name`
  - : Cookie names should be prepended with either `__Secure-` or `__Host-` to prevent cookies from being overwritten by insecure sources.
    - Use `__Host-` for all cookies needed only on a specific domain (no subdomains) where `Path` is set to `/`.
    - Use `__Secure-` for all other cookies sent from secure origins ([HTTPS](/en-US/docs/Glossary/HTTPS)).
- `Secure`
  - : All cookies must be set with the `Secure` directive, indicating that they should only be sent over HTTPS. [HTTP Strict Transport Security](/en-US/docs/Web/Security/Practical_implementation_guides/TLS#http_strict_transport_security_implementation) (HSTS) can also be used to prevent transmission over HTTP, but ideally `Secure` should be set on cookies as well.
- `HttpOnly`
  - : Cookies that don't require access from JavaScript should have the `HttpOnly` directive set to block access, such as from {{domxref("Document.cookie")}}. It is particularly important that session identifiers don't have JavaScript access, to help prevent attacks such as CSRF.
- `Expires` and `Max-Age`
  - : Cookies should expire as soon as they are no longer needed. Session identifiers in particular should expire as quickly as possible.
    - `Expires`: Sets an absolute expiration date for a given cookie.
    - `Max-Age`: Sets a relative expiration date for a given cookie.
      > **Note:** `Expires` has been available for longer than `Max-Age`; however, `Max-Age` is less error-prone, and takes precedence when both are set. The rationale behind this is that when you set an `Expires` date and time, they're relative to the client on which the cookie is being set. If the server is set to a different time, this could cause errors.
- `Domain`
  - : Cookies should only have a `Domain` set if they need to be accessible on other domains; this should be set to the most restrictive domain possible.
- `Path`
  - : Cookies should be set to the most restrictive `Path` possible.
- `SameSite`

  - : Forbid sending cookies via cross-origin requests (for example from {{htmlelement("img")}} elements) using `SameSite`. You should use one of the following two values:

    - `SameSite=Strict`: Only send the cookie in same-site contexts (navigations and other requests). Cookies are omitted in cross-site requests (e.g. embedding images or other resources from other sites) and cross-site navigation (e.g. when following a link from a different web page). This is a very strict setting, but it does provide strong [CSRF](/en-US/docs/Web/Security/Practical_implementation_guides/CSRF_prevention) protection, so use this value if possible.
    - `SameSite=Lax`: Send the cookie in same-site requests and when navigating _to_ your website. This should be used if `Strict` is too restrictive.

    Both of the above values are useful in protecting against [clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking) attacks in cases that rely on the user being authenticated.

    > [!NOTE]
    > In theory, `SameSite=Strict` should be more useful than it is in practice. It often breaks navigations — for example, users clicking a link to a website on which they are already logged in (i.e. a valid session cookie is set) appear not to be logged in, because the browser has deliberately omitted the session cookie. The best middle ground is to use `SameSite=Strict` only on tokens where CSRF is a concern or use `SameSite=Strict` everywhere, but reload the page and do a cookie check in JavaScript if there's an indication that the user is logged in but required cookies are not being sent.

## Examples

Set a session identifier cookie that is only accessible on the current host and expires when the user closes their browser:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Use the `__Secure-` prefix to set a session identifier for all `example.org` sites, set to expire after 30 days. This cookie is not sent cross-origin, but is sent when navigating to any site from another site:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Set a long-lived cookie for the current host, accessible by JavaScript, when the user accepts the terms of service. This cookie is sent when navigating to your site from another site, such as by clicking a link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Use a session identifier for a secure (HTTPS) site. It isn't sent from cross-origin requests, nor when navigating to your site from another site. When used in conjunction with other anti-CSRF measures, this provides a very strong defense for your site against CSRF attacks:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## See also

- [Using HTTP cookies](/en-US/docs/Web/HTTP/Cookies)
- [Third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies)
- [`Document.cookie`: Security](/en-US/docs/Web/API/Document/cookie#security)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
