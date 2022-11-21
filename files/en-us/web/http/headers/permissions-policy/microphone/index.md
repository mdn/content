---
title: 'Permissions-Policy: microphone'
slug: Web/HTTP/Headers/Permissions-Policy/microphone
tags:
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - header
  - microphone
browser-compat: http.headers.Permissions-Policy.microphone
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`microphone` directive controls whether the current document is allowed to
use audio input devices. When this policy is enabled, the {{jsxref("Promise")}}
returned by {{domxref("MediaDevices.getUserMedia()")}} will reject with a
`NotAllowedError`.

## Syntax

```http
Permissions-Policy: microphone <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

Default allow list for `microphone` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
