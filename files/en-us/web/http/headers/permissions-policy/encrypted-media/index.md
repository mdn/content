---
title: "Permissions-Policy: encrypted-media"
slug: Web/HTTP/Headers/Permissions-Policy/encrypted-media
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.encrypted-media
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `encrypted-media` directive controls whether the current document is allowed to use the [Encrypted Media Extensions](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) API (EME).

Specifically, where a defined policy blocks use of this feature, the {{jsxref("Promise")}} returned by {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} will reject with a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `encrypted-media` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
