---
title: 'Permissions-Policy: speaker-selection'
slug: Web/HTTP/Headers/Permissions-Policy/speaker-selection
tags:
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - header
  - microphone
  - Experimental
browser-compat: http.headers.Permissions-Policy.speaker-selection
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `speaker-selection` directive controls whether the current document is allowed to enumerate and select audio output devices (speakers, headphones, etc.).

When this policy is enabled and the permission is denied:

- {{domxref("MediaDevices.enumerateDevices()")}} won't return devices of type _audio output_.
- {{domxref("MediaDevices.selectAudioOutput()")}} won't display the popup for selecting an audio output, and will reject the promise with a `NotAllowedError`.
- {{domxref("HTMLMediaElement.setSinkId()")}} will throw a `NotAllowedError` if called for an audio output.

## Syntax

```http
Permissions-Policy: speaker-selection <allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

The default allowlist for `speaker-selection` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
