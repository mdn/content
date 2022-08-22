---
title: SameSite cookies
slug: Web/HTTP/Headers/Set-Cookie/SameSite
tags:
  - Cookies
  - HTTP
  - Reference
  - samesite
browser-compat: http.headers.Set-Cookie.SameSite
---
{{securecontext_header}}{{HTTPSidebar}}

The **`SameSite`** attribute of the {{HTTPHeader("Set-Cookie")}} HTTP response header allows you to declare if your cookie should be restricted to a [first-party](/en-US/docs/Web/HTTP/Cookies#third-party_cookies) or same-site context.

> **Note:** Standards related to the Cookie `SameSite` attribute recently changed such that:
>
> - The cookie-sending behavior if `SameSite` is not specified is `SameSite=Lax`. Previously the default was that cookies were sent for all requests.
> - Cookies with `SameSite=None` must now also specify the `Secure` attribute (they require a secure context/HTTPS).
> - Cookies from the same domain are no longer considered to be from the same site if sent using a different scheme (`http:` or `https:`).
>
> This article documents the new standard. See [Browser Compatibility](#browser_compatibility) below for information about specific versions where the behavior changed.

## Values

The `SameSite` attribute accepts three values:

### `Lax`

Cookies are not sent on normal cross-site subrequests (for example to load images or frames into a third party site), but are sent when a user is _navigating to_ the origin site (i.e., when following a link).

This is the default cookie value if `SameSite` has not been explicitly specified in recent browser versions (see the "SameSite: Defaults to Lax" feature in the Browser Compatibility).

> **Note:** `Lax` replaced `None` as the default value in order to ensure that users have reasonably robust defense against some classes of cross-site request forgery ({{Glossary("CSRF")}}) attacks.

### `Strict`

Cookies will only be sent in a first-party context and not be sent along with requests initiated by third party websites.

### `None`

Cookies will be sent in all contexts, i.e. in responses to both first-party and cross-site requests. If `SameSite=None` is set, the cookie [`Secure`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure) attribute must also be set (or the cookie will be blocked).

## Fixing common warnings

### `SameSite=None` requires `Secure`

Warnings like the ones below might appear in your console:

```
Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
```

The warning appears because any cookie that requests `SameSite=None` but is not marked `Secure` will be rejected.

```http example-bad
Set-Cookie: flavor=choco; SameSite=None
```

To fix this, you will have to add the `Secure` attribute to your `SameSite=None` cookies.

```http example-good
Set-Cookie: flavor=choco; SameSite=None; Secure
```

A [`Secure`](#secure) cookie is only sent to the server with an encrypted request over the HTTPS protocol. Note that insecure sites (`http:`) can't set cookies with the `Secure` directive.

> **Note:** On older browser versions you might get a warning that the cookie will be blocked in future. For example:
>
> Cookie `myCookie` will be soon rejected
> because it has the `SameSite` attribute set to `None`
> or an invalid value, without the `secure` attribute.

### Cookies without `SameSite` default to `SameSite=Lax`

Recent versions of modern browsers provide a more secure default for `SameSite` to your cookies and so the following message might appear in your console:

```
Cookie "myCookie" has "SameSite" policy set to "Lax" because it is missing a "SameSite" attribute, and "SameSite=Lax" is the default value for this attribute.
```

The warning appears because the `SameSite` policy for a cookie was not explicitly specified:

```http example-bad
Set-Cookie: flavor=choco
```

You should explicitly communicate the intended `SameSite` policy for your cookie (rather than relying on browsers to apply `SameSite=Lax` automatically). This will also improve the experience across browsers as not all of them default to `Lax` yet.

```http example-good
Set-Cookie: flavor=choco; SameSite=Lax
```

## Example

```
RewriteEngine on
RewriteBase "/"
RewriteCond "%{HTTP_HOST}"       "^example\.org$" [NC]
RewriteRule "^(.*)"              "https://www.example.org/index.html" [R=301,L,QSA]
RewriteRule "^(.*)\.ht$"         "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;01;https://www.example.org;30/;SameSite=None;Secure]
RewriteRule "^(.*)\.htm$"        "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;02;https://www.example.org;30/;SameSite=None;Secure]
RewriteRule "^(.*)\.html$"       "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;03;https://www.example.org;30/;SameSite=None;Secure]
[...]
RewriteRule "^admin/(.*)\.html$" "admin/index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;09;https://www.example.org:30/;SameSite=Strict;Secure]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP cookies](/en-US/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [Samesite cookies explained](https://web.dev/samesite-cookies-explained/) (web.dev blog)
