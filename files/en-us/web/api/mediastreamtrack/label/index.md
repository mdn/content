---
title: "MediaStreamTrack: label property"
short-title: label
slug: Web/API/MediaStreamTrack/label
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.label
---

{{APIRef("Media Capture and Streams")}}

The **`label`** read-only property of the {{domxref("MediaStreamTrack")}} interface returns a string containing a {{glossary("user agent")}}-assigned label that identifies the track source, as in `"internal microphone"`.

The string may be left empty and is empty as long as no source has been connected.
When the track is disassociated from its source, the label is not changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
