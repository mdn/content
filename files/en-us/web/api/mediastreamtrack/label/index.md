---
title: MediaStreamTrack.label
slug: Web/API/MediaStreamTrack/label
tags:
  - Media Capture and Streams
  - MediaStreamTrack
  - NeedsExample
  - Property
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.label
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStreamTrack.label`**
read-only property returns a {{domxref("DOMString")}} containing a {{glossary("user
    agent")}}-assigned label that identifies the track source, as in
`"internal microphone"`.

The string may be left empty and is empty
as long as no source has been connected. When the track is deassociated from its source,
the label is not changed.

## Syntax

```js
const label = track.label
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
