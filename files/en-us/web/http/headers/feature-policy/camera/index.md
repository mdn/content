---
title: 'Feature-Policy: camera'
slug: Web/HTTP/Headers/Feature-Policy/camera
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - camera
browser-compat: http.headers.Feature-Policy.camera
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Feature-Policy")}} header
`camera` directive controls whether the current document is allowed to use
video input devices. When this policy is enabled, the {{jsxref("Promise")}} returned
by {{domxref("MediaDevices.getUserMedia()")}} will reject with
a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Feature-Policy: camera <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `camera` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
