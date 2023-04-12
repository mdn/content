---
title: "Permissions-Policy: idle-detection"
slug: Web/HTTP/Headers/Permissions-Policy/idle-detection
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.idle-detection
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `idle-detection` directive controls whether the current document is allowed to use the {{domxref("Idle Detection API", "Idle Detection API", "", "nocode")}} to detect when users are interacting with their devices, for example to report "available"/"away" status in chat applications.

Specifically, where a defined policy blocks use of this feature, {{domxref("IdleDetector.start()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `NotAllowedError`.

## Syntax

```http
Permissions-Policy: idle-detection=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `idle-detection` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
