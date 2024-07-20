---
title: Clickjacking prevention
slug: Web/Security/Practical_implementation_guides/Clickjacking
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

The [Content Security Policy](/en-US/docs/Web/HTTP/CSP) [`frame-ancestors`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) directive and the [`X-Frame-Options`](/en-US/docs/Web/HTTP/Headers/X-Frame-Options) header provide control over how your site may be embedded within an {{htmlelement("iframe")}} on another site. These features help prevent clickjacking.

## Problem

[Clickjacking](/en-US/docs/Glossary/Clickjacking) is an attack whereby malicious sites trick users into clicking links or UI elements by making them appear like a trusted site the user is familiar with. This is usually done by embedding part or all of the trusted site into the malicious site via an `<iframe>`. A button, link, or other UI feature is then positioned on top of that content to make the user think they are interacting with their trusted site, when in fact they are interacting with the malicious site.

## Solution

Use the HTTP headers as required:

- `Content-Security-Policy: frame-ancestors` is preferred as it provides more granular control over site embedding. It is however not supported in IE11 and earlier, pre-Chromium versions of Edge, Safari 9.1 (desktop), and Safari 9.2 (iOS).
- `X-Frame-Options` is less granular, but it is supported in the older browser set listed above.

The recommendation is to use both unless you know you don't need support for the older browser set.

You should deny all attempts to embed your site unless you really need to. When embedding is required, provide the minimum embedding allowance necessary. Sites that require the ability to be embedded in an `<iframe>` must use JavaScript defenses and a robust {{HTTPHeader("Content-Security-Policy")}} to prevent clickjacking from malicious origins. {{domxref("Window.confirm()")}} can be used as part of your JavaScript defenses to inform the user of the action they are about to perform: See [`window.confirm()` Protection](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#windowconfirm-protection).

The equivalent options for each setting are as follows:

| CSP value                             | `X-Frame-Options` value         | Description                                         |
| ------------------------------------- | ------------------------------- | --------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Deny all embedding attempts.                        |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Allow only same-origin embedding attempts.          |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Allow embedding attempts from the specified domain. |

> **Note:** The `X-Frame-Options: ALLOWFROM https://example.org` syntax is deprecated, and most browsers ignore it. You are recommend to set `DENY` in such cases instead, and/or rely on the CSP equivalent.

> **Note:** Setting cookies with the [`SameSite`](/en-US/docs/Web/Security/Practical_implementation_guides/Cookies#samesite) directive is also useful in clickjacking cases that rely on the user being authenticated.

## Examples

Block the site from being embedded by using `X-Frame-Options` and CSP:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Allow the site to be embedded only on same-origin pages:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Only allow `example.org` to embed the site:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Block embedding in browsers that don't support CSP2
X-Frame-Options: DENY
```

## See also

- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) on `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) on `auth0.com` (2020)
