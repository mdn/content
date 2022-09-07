---
title: 'Feature-Policy: microphone'
slug: Web/HTTP/Headers/Feature-Policy/microphone
tags:
  - Feature Policy
  - Feature-Policy
  - HTTP
  - header
  - microphone
browser-compat: http.headers.Feature-Policy.microphone
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Feature-Policy")}} header
`microphone` directive controls whether the current document is allowed to
use audio input devices. When this policy is enabled, the {{jsxref("Promise")}}
returned by {{domxref("MediaDevices.getUserMedia()")}} will reject with a
`NotAllowedError`.

## Syntax

```http
Feature-Policy: microphone <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `microphone` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
