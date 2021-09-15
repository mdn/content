---
title: MediaDeviceInfo.label
slug: Web/API/MediaDeviceInfo/label
tags:
  - API
  - Media
  - Media Capture
  - Media Capture and Streams
  - Media Capture and Streams API
  - MediaDevicesInfo
  - Property
  - Reference
  - label
browser-compat: api.MediaDeviceInfo.label
---
{{APIRef("Media Capture")}}

The **`label`** readonlyinline
property of the {{domxref("MediaDeviceInfo")}} interface returns a
{{domxref("DOMString")}}, that is a label describing this device (for example
"External USB Webcam").

Only available during active `MediaStream`
use, or when persistent permissions have been granted.

## Syntax

```js
var label = MediaDeviceInfo.label;
```

### Value

A {{domxref("DOMString")}} which describes the media device. For security reasons, the
`label` is always an empty string (`""`) if the user has not
obtained permission to use at least one media device, either by starting a stream from
the microphone or camera, or by persistent permissions being granted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
