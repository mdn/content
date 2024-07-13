---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
page-type: web-api-interface
browser-compat: api.MediaStreamTrackProcessor
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

The **`MediaStreamTrackProcessor`** interface of the {{domxref('Insertable Streams for MediaStreamTrack API')}} consumes a {{domxref("MediaStreamTrack")}} object's source and generates a stream of media frames.

## Constructor

- {{domxref("MediaStreamTrackProcessor.MediaStreamTrackProcessor", "MediaStreamTrackProcessor()")}}
  - : Creates a new `MediaStreamTrackProcessor` object.

## Instance properties

- {{domxref("MediaStreamTrackProcessor.readable")}}
  - : Returns a {{domxref("ReadableStream")}}.

## Examples

The following example is from the article [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing), and demonstrates a barcode scanner application, which transforms the stream accessed via {{domxref("MediaStreamTrackProcessor.readable")}} by highlighting the barcode.

```js
const stream = await getUserMedia({ video: true });
const videoTrack = stream.getVideoTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });

const transformer = new TransformStream({
  async transform(videoFrame, controller) {
    const barcodes = await detectBarcodes(videoFrame);
    const newFrame = highlightBarcodes(videoFrame, barcodes);
    videoFrame.close();
    controller.enqueue(newFrame);
  },
});

trackProcessor.readable
  .pipeThrough(transformer)
  .pipeTo(trackGenerator.writable);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
