---
title: "Permissions-Policy: speaker-selection"
slug: Web/HTTP/Headers/Permissions-Policy/speaker-selection
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.speaker-selection
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `speaker-selection` directive controls whether the current document is allowed to enumerate and select audio output devices (speakers, headphones, and so on).

Specifically, where a defined policy blocks use of this feature:

- {{domxref("MediaDevices.enumerateDevices()")}} won't return devices of type _audio output_.
- {{domxref("MediaDevices.selectAudioOutput()")}} won't display the popup for selecting an audio output, and the returned {{jsxref("Promise")}} will reject with a {{domxref("DOMException")}} of type `NotAllowedError`.
- {{domxref("HTMLMediaElement.setSinkId()")}} and {{domxref("AudioContext.setSinkId()")}} will throw a `NotAllowedError` if called for an audio output.

## Syntax

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `speaker-selection` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
