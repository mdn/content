---
title: Clickjacking prevention
slug: Web/Security/Practical_implementation/Clickjacking
page-type: guide
---

The [Content Security Policy](/en-US/docs/Web/HTTP/CSP) [`frame-ancestors`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) directive and the [`X-Frame-Options`](/en-US/docs/Web/HTTP/Headers/X-Frame-Options) header provide control over how your site may be embedded within an {{htmlelement("iframe")}}, helping to prevent clickjacking.

## Problem

[Clickjacking](/en-US/docs/Glossary/Clickjacking) is an attack whereby malicious sites trick users into clicking links on their site by making it look like a trusted site the user is familiar with. This is usually done by embedding part or all of the trusted site into the malicious site via an `<iframe>`, and then positioning a button, link or other UI feature on top of that content to make the user think they are interacting with their trusted site, whereas in actual fact they are interacting with the malicious site.

## Solution

Use the HTTP headers as required:

- `Content-Security-Policy: frame-ancestors` is preferred as it provides more granular control over site embedding. It is however not supported in IE11 and earlier, pre-Chromium versions of Edge, Safari 9.1 (desktop), and Safari 9.2 (iOS).
- `X-Frame-Options` is less granular, but it is supported in the older browser set listed above.

The recommendation is to use both unless you know you don't need support for the older browser set.

You should deny all embedding attempts unless you really need to embed the site. Provide the minimum embedding allowance necessary. Sites that require the ability to be embedded in an `<iframe>` must employ JavaScript defenses and a robust {{HTTPHeader("Content-Security-Policy")}} to prevent clickjacking from malicious origins.

Equivalent options for each are as follows:

| CSP value                             | `X-Frame-Options` value         | Description                                         |
| ------------------------------------- | ------------------------------- | --------------------------------------------------- |
| `frame-ancestors 'none'`              | `DENY`                          | Deny all embedding attempts.                        |
| `frame-ancestors 'self'`              | `SAMEORIGIN`                    | Only allow same-origin embedding attempts.          |
| `frame-ancestors https://example.org` | `ALLOWFROM https://example.org` | Allow embedding attempts from the specified domain. |

> **Note:** The `X-Frame-Options: ALLOWFROM https://example.org` syntax is deprecated, and most browsers ignore it. You are recommend to set `DENY` in such cases instead, and/or rely on the CSP equivalent.

## Examples

Block site from being embedded with X-Frame-Options and CSP:

```http
Content-Security-Policy: frame-ancestors 'none'
X-Frame-Options: DENY
```

Only allow the site to be embedded same-origin pages:

```http
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
```

Only allow example.org to embed the site:

```http
Content-Security-Policy: frame-ancestors https://example.org
# Block embedding in browsers that don't support CSP2
X-Frame-Options: DENY
```

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}
