---
title: MediaStreamTrackGenerator
slug: Web/API/MediaStreamTrackGenerator
tags:
  - API
  - Interface
  - Reference
  - MediaStreamTrackGenerator
browser-compat: api.MediaStreamTrackGenerator
---
{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

The **`MediaStreamTrackGenerator`** interface of the {{domxref('Insertable Streams for MediaStreamTrack API')}} creates a {{domxref("WritableStream")}} that acts as a {{domxref("MediaStreamTrack")}} source.
The object consumes a stream of media frames as input, which can be audio or video frames.

## Constructor

- {{domxref("MediaStreamTrackGenerator.MediaStreamTrackGenerator()")}}
  - : Creates a new `MediaStreamTrackGenerator` object which accepts either {{domxref("VideoFrame")}} or {{domxref("AudioFrame")}} objects.

## Properties

_This interface also inherits properties from {{domxref("MediaStreamTrack")}}._

- {{domxref("MediaStreamTrackGenerator.writable")}}
  - : A {{domxref("WritableStream")}}.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from {{domxref("MediaStreamTrack")}}._

## Examples

The following example is from the article [Insertable streams for MediaStreamTrack](https://web.dev/mediastreamtrack-insertable-media-processing/), and demonstrates a barcode scanner application, which process barcodes and  highlights them before writing the transformed frames to the writablestream of {{domxref("MediaStreamTrackGenerator.writable")}}.

```js
const stream = await getUserMedia({ video: true });
const videoTrack = stream.getVideoTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: 'video' });

const transformer = new TransformStream({
  async transform(videoFrame, controller) {
    const barcodes = await detectBarcodes(videoFrame);
    const newFrame = highlightBarcodes(videoFrame, barcodes);
    videoFrame.close();
    controller.enqueue(newFrame);
  },
});

trackProcessor.readable.pipeThrough(transformer).pipeTo(trackGenerator.writable);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
