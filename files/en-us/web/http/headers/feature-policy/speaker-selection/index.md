---
title: 'Feature-Policy: speaker-selection'
slug: Web/HTTP/Headers/Feature-Policy/speaker-selection
tags:
  - Feature Policy
  - Feature-Policy
  - HTTP
  - header
  - microphone
  - Experimental
browser-compat: http.headers.Feature-Policy.speaker-selection
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `speaker-selection` directive controls whether the current document is allowed to enumerate and select audio output devices (speakers, headphones, etc.).

When this policy is enabled and the permission is denied:

- {{domxref("MediaDevices.enumerateDevices()")}} won't return devices of type _audio output_.
- {{domxref("MediaDevices.selectAudioOutput()")}} won't display the popup for selecting an audio output, and will reject the promise with a `NotAllowedError`.
- {{domxref("HTMLMediaElement.setSinkId()")}} will throw a `NotAllowedError` if called for an audio output.

## Syntax

```http
Feature-Policy: speaker-selection <allowlist>;
```

- `<allowlist>`
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default allowlist for `speaker-selection` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
