---
title: "Permissions-Policy: camera"
slug: Web/HTTP/Headers/Permissions-Policy/camera
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.camera
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`camera` directive controls whether the current document is allowed to use
video input devices.

Specifically, where a defined policy blocks use of this feature, {{domxref("MediaDevices.getUserMedia()")}} calls will return a {{jsxref("Promise")}} that rejects with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `camera` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
