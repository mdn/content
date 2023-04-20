---
title: "Permissions-Policy: local-fonts"
slug: Web/HTTP/Headers/Permissions-Policy/local-fonts
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.local-fonts
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `local-fonts` directive controls whether the current document is allowed to gather data on the user's locally-installed fonts via the {{DOMxRef("Window.queryLocalFonts()")}} method.

Specifically, where a defined policy blocks use of this feature, {{jsxref("Promise")}}s returned by {{DOMxRef("Window.queryLocalFonts()")}} will reject with a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `local-fonts` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
