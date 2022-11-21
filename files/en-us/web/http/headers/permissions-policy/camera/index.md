---
title: 'Permissions-Policy: camera'
slug: Web/HTTP/Headers/Permissions-Policy/camera
tags:
  - Directive
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - Reference
  - camera
browser-compat: http.headers.Permissions-Policy.camera
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`camera` directive controls whether the current document is allowed to use
video input devices. When this policy is enabled, the {{jsxref("Promise")}} returned
by {{domxref("MediaDevices.getUserMedia()")}} will reject with
a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: camera <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `camera` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
