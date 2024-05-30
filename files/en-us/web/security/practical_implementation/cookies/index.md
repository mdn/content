---
title: Secure cookies
slug: Web/Security/Practical_implementation/Cookies
page-type: guide
---

Access to cookies should limited as much as possible.

## Problem

Cookies often contain session identifiers or other sensitive information. Unwanted access to cookies can therefore cause a whole of problems, including [Privacy](/en-US/docs/Web/Privacy) issues, Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) attacks, and more.

## Solution

To minimize the scope for cookie vulnerabilities on your site, limit access to cookies as much as possible.

This can be done via sensible usage of the following directives of the [`Set-Cookie`](/en-US/docs/Web/HTTP/Headers/Set-Cookie) header:

- `Name`
  - : Cookie names should be prepended with either `__Secure-` or `__Host-` to prevent cookies from being overwritten by insecure sources.
    - Use `__Host-` for all cookies needed only on a specific domain (no subdomains) where `Path` is set to `/`.
    - Use `__Secure-` for all other cookies sent from secure origins (HTTPS).
- `Secure`
  - : All cookies must be set with the `Secure` flag, indicating that they should only be sent over HTTPS.
- `HttpOnly`
  - : Cookies that don't require access from JavaScript should be set with the `HttpOnly` flag.
- `Expires` and `Max-Age`
  - : Cookies should expire as soon as they are no longer needed. Session identifiers in particular should expire as quickly as possible. `Expires` is preferred unless you need to support IE < 8, in which case use `Max-Age`.
      - `Expires`: Sets an absolute expiration date for a given cookie.
      - `Max-Age`: Sets a relative expiration date for a given cookie. 
      > **Note:** `Expires` has been available for longer than `Max-Age`, however `Max-Age` is less error-prone, and takes precedence when both are set. The rationale behind this is that when you set an `Expires` date and time, they're relative to the client the cookie is being set on. If the server is set to a different time, this could cause errors. 
- `Domain`
  - : Cookies should only have a `Domain` set if they need to be accessible on other domains; this should be set to the most restrictive domain possible.
- `Path`
  - : Cookies should be set to the most restrictive `Path` possible; for most applications this will be set to the root directory.
- `SameSite`
  - : Forbid sending the cookie via cross-origin requests (for example from {{htmlelement("img")}} element), as a strong [anti-CSRF](/en-US/docs/Web/Security/Practical_implementation/CSRF_prevention) measure.
      - `SameSite=Strict`: Only send the cookie when your site is directly navigated to.
      - `SameSite=Lax`: Additionally send the cookie when navigating to your site from another site.

## Examples

Session identifier cookie, only accessible on the current host, which gets purged when the user closes their browser:

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

Session identifier for all `example.org` sites that expires after 30 days, specified using the `__Secure-` prefix. This cookie is not sent cross-origin, but is sent when navigating to any site from another site:

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

Sets a long-lived cookie for the current host, accessible by JavaScript, when the user accepts the terms of service. This cookie is sent when navigating to your site from another site, for example by clicking a link:

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

Session identifier used for a secure (HTTPS) site. It isn't sent from cross-origin requests, nor is it sent when navigating to your site from another site. When used in conjunction with other anti-CSRF measures, this is a very strong way to defend your site against CSRF attacks:

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## See also

- [Using HTTP cookies](/en-US/docs/Web/HTTP/Cookies)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265)

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
