---
title: MediaStreamTrackGenerator
slug: Web/API/MediaStreamTrackGenerator
page-type: web-api-interface
status:
  - experimental
  - non-standard
browser-compat: api.MediaStreamTrackGenerator
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

The **`MediaStreamTrackGenerator`** interface of the {{domxref('Insertable Streams for MediaStreamTrack API')}} creates a {{domxref("WritableStream")}} that acts as a {{domxref("MediaStreamTrack")}} source.
The object consumes a stream of media frames as input, which can be audio or video frames.

## Constructor

- {{domxref("MediaStreamTrackGenerator.MediaStreamTrackGenerator", "MediaStreamTrackGenerator()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Creates a new `MediaStreamTrackGenerator` object which accepts either {{domxref("VideoFrame")}} or {{domxref("AudioData")}} objects.

## Instance properties

_This interface also inherits properties from {{domxref("MediaStreamTrack")}}._

- {{domxref("MediaStreamTrackGenerator.writable")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : A {{domxref("WritableStream")}}.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from {{domxref("MediaStreamTrack")}}._

## Examples

The following example is from the article [Insertable streams for MediaStreamTrack](https://web.dev/mediastreamtrack-insertable-media-processing/), and demonstrates a barcode scanner application, which process barcodes and highlights them before writing the transformed frames to the writable stream of {{domxref("MediaStreamTrackGenerator.writable")}}.

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
