---
title: MediaDeviceInfo.label
slug: Web/API/MediaDeviceInfo/label
page-type: web-api-instance-property
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

The **`label`** ReadOnlyInline
property of the {{domxref("MediaDeviceInfo")}} interface returns a
string describing this device (for example
"External USB Webcam").

Only available during active `MediaStream`
use, or when persistent permissions have been granted.

## Value

A string which describes the media device. For security reasons, the
`label` is always an empty string (`""`) if the user has not
obtained permission to use at least one media device, either by starting a stream from
the microphone or camera, or by persistent permissions being granted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
