---
title: Clickjacking prevention
slug: Web/Security/Practical_implementation_guides/Clickjacking
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

The [Content Security Policy](/en-US/docs/Web/HTTP/CSP) [`frame-ancestors`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) directive and the [`X-Frame-Options`](/en-US/docs/Web/HTTP/Headers/X-Frame-Options) header provide control over how your site may be embedded within an {{htmlelement("iframe")}} on another site. These features help prevent clickjacking.

## Problem

In a clickjacking attack, an attacker tricks a user into interacting with a trusted site in a way that they didn't intend.

Typically, the attacker creates a decoy site which embeds the user's trusted site inside an {{htmlelement("iframe")}} element. The attacker's site hides the `<iframe>`, and aligns some decoy elements so they appear in the same place as elements in the trusted site that perform sensitive actions. When the user tries to interact with the decoy elements, they are inadvertently interacting with the trusted site instead, and may be tricked into performing actions with the trusted site which they did not intend.

See [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking) for more details.

## Solution

The main solution to clickjacking is to prevent the trusted site from being embedded in an `<iframe>`. There are two headers which can be used for this:

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

> [!NOTE]
> The `X-Frame-Options: ALLOWFROM https://example.org` syntax is deprecated, and most browsers ignore it. You are recommend to set `DENY` in such cases instead, and/or rely on the CSP equivalent.

> [!NOTE]
> Setting cookies with the [`SameSite`](/en-US/docs/Web/Security/Practical_implementation_guides/Cookies#samesite) directive is also useful in clickjacking cases that rely on the user being authenticated.

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

- [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking)
- [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html) on `owasp.org`
- [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) on `auth0.com` (2020)
