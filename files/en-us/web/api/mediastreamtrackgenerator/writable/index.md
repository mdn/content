---
title: MediaStreamTrackGenerator.writable
slug: Web/API/MediaStreamTrackGenerator/writable
tags:
  - API
  - Property
  - Reference
  - writable
  - MediaStreamTrackGenerator
browser-compat: api.MediaStreamTrackGenerator.writable
---
{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

The **`writable`**  property of the {{domxref("MediaStreamTrackGenerator")}} interface returns a {{domxref("WritableStream")}}. This allows the writing of media frames to the `MediaStreamTrackGenerator`. The frames will be audio or video. The type is dictated by the kind of `MediaStreamTrackGenerator` that was created.

## Syntax

```js
let writable = MediaStreamTrackGenerator.writable;
```

### Value

A {{domxref("WritableStream")}}.

## Examples

In the following example video frames are transformed then written to the {{domxref("WritableStream")}} accessed with `MediaStreamTrackGenerator.writable`.

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


