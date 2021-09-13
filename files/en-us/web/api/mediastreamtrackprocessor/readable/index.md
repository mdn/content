---
title: MediaStreamTrackProcessor.readable
slug: Web/API/MediaStreamTrackProcessor/readable
tags:
  - API
  - Property
  - Reference
  - readable
  - MediaStreamTrackProcessor
browser-compat: api.MediaStreamTrackProcessor.readable
---
{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

The **`readable`**  property of the {{domxref("MediaStreamTrackProcessor")}} interface returns a {{domxref("ReadableStream")}}.

## Syntax

```js
let readable = MediaStreamTrackProcessor.readable;
```

### Value

A {{domxref("ReadableStream")}}.

## Examples

In the following example video frames from the {{domxref("ReadableStream")}} are transformed.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: 'video' });

/* */

trackProcessor.readable.pipeThrough(transformer).pipeTo(trackGenerator.writable);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


