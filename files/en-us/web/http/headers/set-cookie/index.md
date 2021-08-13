---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
tags:
  - Cookies
  - HTTP
  - Reference
  - Response
  - header
  - samesite
browser-compat: http.headers.Set-Cookie
---
{{HTTPSidebar}}

The **`Set-Cookie`** HTTP response header is used to send a cookie from the server to the user agent, so the user agent can send it back to the server later. To send multiple cookies, multiple **`Set-Cookie`** headers should be sent in the same response.

> **Warning:** Browsers block frontend JavaScript code from accessing the `Set Cookie` header, as required by the Fetch spec, which defines `Set-Cookie` as a [forbidden response-header name](https://fetch.spec.whatwg.org/#forbidden-response-header-name) that [must be filtered out](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) from any response exposed to frontend code.

For more information, see the guide on [Using HTTP cookies](/en-US/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://fetch.spec.whatwg.org/#forbidden-response-header-name"
          >Forbidden response-header name</a>
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Attributes

- `<cookie-name>=<cookie-value>`

  - : A cookie begins with a name-value pair.

    A `<cookie-name>` can be any US-ASCII characters,
    except control characters, spaces, or tabs.
    It also must not contain a separator character like the following: `( ) < > @ , ; : \ " / [ ] ? = { }`.

    A `<cookie-value>` can optionally be wrapped in double quotes
    and include any US-ASCII characters excluding control characters, {{glossary("Whitespace")}}, double quotes, comma, semicolon, and backslash.

    **Encoding**: Many implementations perform URL encoding on cookie values,
    however it is not required per the RFC specification.
    It does help satisfying the requirements
    about which characters are allowed for \<cookie-value> though.

    > **Note:** Some `><cookie-name>` have a specific semantic:
    >
    > **`__Secure-` prefix**:
    > Cookies names starting with `__Secure-`
    > (dash is part of the prefix)
    > must be set with the `secure` flag from a secure page (HTTPS).
    >
    > **`__Host-` prefix**: Cookies with names starting with `__Host-` must be set with the `secure` flag, must be from a secure page (HTTPS), must not have a domain specified (and therefore aren't sent to subdomains) and the path must be `/`.

- `Expires=<date>` {{optional_inline}}

  - : The maximum lifetime of the cookie as an HTTP-date timestamp.
    See {{HTTPHeader("Date")}} for the required formatting.

    If unspecified, the cookie becomes a **session cookie**.
    A session finishes when the client shuts down,
    and session cookies will be removed.

    > **Warning:** Many web browsers have a _session restore_ feature that will save all tabs and restore them next time the browser is used. Session cookies will also be restored, as if the browser was never closed.

    When an `Expires` date is set, the deadline is relative to the _client_ the cookie is being set on, not the server.

- `Max-Age=<number>` {{optional_inline}}
  - : Number of seconds until the cookie expires. A zero or negative number will expire the cookie immediately. If both `Expires` and `Max-Age` are set, `Max-Age` has precedence.
- `Domain=<domain-value>` {{optional_inline}}

  - : Host to which the cookie will be sent.

    If omitted, defaults to the host of the current document URL,
    not including subdomains.

    Contrary to earlier specifications,
    leading dots in domain names (`.example.com`) are ignored.

    Multiple host/domain values are _not_ allowed,
    but if a domain _is_ specified, t
    hen subdomains are always included.

- `Path=<path-value>` {{optional_inline}}

  - : A path that must exist in the requested URL,
    or the browser won't send the `Cookie` header.

    The forward slash (`/`) character is interpreted as a directory separator,
    and subdirectories will be matched as well:
    for `Path=/docs`, `/docs`, `/docs/Web/`, and `/docs/Web/HTTP` will all match.

- `Secure` {{optional_inline}}

  - : Cookie is only sent to the server when a request is made with the `https:` scheme (except on localhost), and therefore is more resistent to [man-in-the-middle](/en-US/docs/Glossary/MitM) attacks.

    > **Note:** Do not assume that `Secure` prevents all access to sensitive information in cookies (session keys, login details, etc.). Cookies with this attribute can still be read/modified with access to the client's hard disk, or from JavaScript if the `HttpOnly` cookie attribute is not set.
    >
    > Insecure sites (`http:`) can't set cookies with the `Secure` attribute (since Chrome 52 and Firefox 52). For Firefox, the `https:` requirements are ignored when the `Secure` attribute is set by localhost (since Firefox 75).

- `HttpOnly` {{optional_inline}}
  - : Forbids JavaScript from accessing the cookie, for example, through the {{domxref("Document.cookie")}} property. Note that a cookie that has been created with HttpOnly will still be sent with JavaScript-initiated requests, e.g. when calling {{domxref("XMLHttpRequest.send()")}} or {{domxref("WindowOrWorkerGlobalScope.fetch")}}. This mitigates attacks against cross-site scripting ({{Glossary("Cross-site_scripting", "XSS")}}).
- `SameSite=<samesite-value>` {{optional_inline}}

  - : Controls whether a cookie is sent with cross-origin requests,
    providing some protection against cross-site request forgery attacks ({{Glossary("CSRF")}}).

    > **Note:** Standards related to the [SameSite Cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) recently changed such that:
    >
    > 1. The cookie-sending behavior if `SameSite` is not specified is `SameSite=Lax`. Previously the default was that cookies were sent for all requests.
    > 2. Cookies with `SameSite=None` must now
    >     also specify the `Secure` attribute (i.e. they require a secure context).
    >
    > The options below covers the new behavior. See the [Browser compatibility](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#browser_compatibility) table for information about specific browser implementation (rows: "`SameSite`: Defaults to `Lax`" and "`SameSite`: Secure context required").

    Inline options are: `Strict`, `Lax`, and `None`.

    `Strict` means that the browser sends the cookie only for same-site requests,
    that is, requests originating from the same site that set the cookie.
    If the request originated from a different URL than the current one,
    no cookies with the `SameSite=Strict` attribute are sent.

    `Lax`means that the cookie is not sent on cross-site requests,
    such as calls to load images or frames,
    but is sent when a user is navigating to the origin site from an external site
    (e.g., if following a link).
    This is the default behavior
    if the `SameSite` attribute is not specified.

    Finally, `None` means that the browser sends the cookie with both cross-site and same-site requests.
    The `Secure` attribute must also be set when `SameSite=None`!

## Examples

### Session cookie

**Session cookies** are removed when the client shuts down. Cookies are session cookies if they don't specify the `Expires` or `Max-Age` attributes.

```
Set-Cookie: sessionId=38afes7a8
```

### Permanent cookie

Instead of expiring when the client is closed, **permanent cookies** expire at a specific date (`Expires`) or after a specific length of time (`Max-Age`).

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Invalid domains

A cookie for a domain that does not include the server that set it [should be rejected by the user agent](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

The following cookie will be rejected if set by a server hosted on `originalcompany.com`:

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

A cookie for a sub domain of the serving domain will be rejected.

The following cookie will be rejected if set by a server hosted on `example.com`:

```
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie prefixes

Cookies names prefixed with `__Secure-` or `__Host-` can be used only if they are set with the `secure` attribute from a secure (HTTPS) origin.

In addition, cookies with the `__Host-` prefix must have a path of `/` (meaning any path at the host) and must not have a `Domain` attribute.

> **Warning:** For clients that don't implement cookie prefixes, you cannot count on these additional assurances, and prefixed cookies will always be accepted.

```
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure attribute
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ attribute
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a Domain
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility notes

- Starting with Chrome 52 and Firefox 52, insecure sites (`http:`) can't set cookies with the `Secure` attribute anymore.

## See also

- [HTTP cookies](/en-US/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
