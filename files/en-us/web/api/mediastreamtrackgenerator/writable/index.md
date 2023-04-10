---
title: "MediaStreamTrackGenerator: writable property"
short-title: writable
slug: Web/API/MediaStreamTrackGenerator/writable
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.MediaStreamTrackGenerator.writable
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

The **`writable`** property of the {{domxref("MediaStreamTrackGenerator")}} interface returns a {{domxref("WritableStream")}}. This allows the writing of media frames to the `MediaStreamTrackGenerator`. The frames will be audio or video. The type is dictated by the kind of `MediaStreamTrackGenerator` that was created.

## Value

A {{domxref("WritableStream")}}.

## Examples

In the following example video frames are transformed then written to the {{domxref("WritableStream")}} accessed with `MediaStreamTrackGenerator.writable`.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });

/* */

trackProcessor.readable
  .pipeThrough(transformer)
  .pipeTo(trackGenerator.writable);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
