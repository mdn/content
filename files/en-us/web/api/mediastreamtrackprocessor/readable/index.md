---
title: "MediaStreamTrackProcessor: readable property"
short-title: readable
slug: Web/API/MediaStreamTrackProcessor/readable
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrackProcessor.readable
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

The **`readable`** property of the {{domxref("MediaStreamTrackProcessor")}} interface returns a {{domxref("ReadableStream")}}.

## Value

A {{domxref("ReadableStream")}}.

## Examples

In the following example video frames from the {{domxref("ReadableStream")}} are transformed.

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
