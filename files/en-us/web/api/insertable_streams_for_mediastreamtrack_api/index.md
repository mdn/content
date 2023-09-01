---
title: Insertable Streams for MediaStreamTrack API
slug: Web/API/Insertable_Streams_for_MediaStreamTrack_API
page-type: web-api-overview
---

{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

The **Insertable Streams for MediaStreamTrack API** provides a method of adding new components to a {{domxref("MediaStreamTrack")}}.

## Concepts and Usage

When processing video or audio, you sometimes want to insert additional elements or otherwise process the stream. For example, an application might include two tracks that need to be combined, such as a weather map and video of a presenter explaining the map. Or, you may want to do processing on a track to blur backgrounds, remove background noise, or introduce other elements (such as adding funny hats to people, and so on). This API provides a method to do this by giving direct access to the stream, thus allowing it to be manipulated.

## Interfaces

- {{domxref("MediaStreamTrackGenerator")}}
  - : Creates a {{domxref("WritableStream")}} that acts as a {{domxref("MediaStreamTrack")}} source.
- {{domxref("MediaStreamTrackProcessor")}}
  - : Consumes a {{domxref("MediaStreamTrack")}} object's source and generates a stream of media frames.

## Examples

The following example is from the article [Insertable streams for MediaStreamTrack](https://web.dev/mediastreamtrack-insertable-media-processing/), and demonstrates a barcode scanner application that highlights a barcode in a video stream. This transforms the stream accessed via {{domxref("MediaStreamTrackProcessor.readable")}}.

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
