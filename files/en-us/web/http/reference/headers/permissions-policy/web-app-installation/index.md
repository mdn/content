---
title: "Permissions-Policy: web-app-installation directive"
short-title: web-app-installation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-app-installation
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.web-app-installation
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `web-app-installation` directive controls whether or not the current document is allowed to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps) via the {{domxref("Navigator.install()")}} method.

Specifically, where a defined policy blocks usage, installation will fail.

## Syntax

```http
Permissions-Policy: web-app-installation=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `web-app-installation` is `self`. The top-level browsing context are allowed access to the `Navigator.install()` method by default.

Iframe-embedded content is not permitted to use `Navigator.install()`.

## Examples

### Blocking web app installation

To block PWA installation via the `Navigator.install()` method, set an empty allowlist in the `Permissions-Policy` header:

```http
Permissions-Policy: web-app-installation=();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Navigator.install()")}}
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
