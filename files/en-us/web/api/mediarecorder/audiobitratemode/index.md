---
title: "MediaRecorder: audioBitrateMode property"
short-title: audioBitrateMode
slug: Web/API/MediaRecorder/audioBitrateMode
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.MediaRecorder.audioBitrateMode
---

{{APIRef("MediaStream Recording")}}{{SeeCompatTable}}

The **`audioBitrateMode`** read-only property of the {{domxref("MediaRecorder")}} interface returns the bitrate mode used to encode audio tracks.

## Value

One of the following:

- `constant`
  - : The {{domxref("MediaRecorder")}} encodes at this constant bitrate.
- `variable`
  - : The {{domxref("MediaRecorder")}} encodes using this variable bitrate, allowing more space to be used for complex signals and less space for less complex signals.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
