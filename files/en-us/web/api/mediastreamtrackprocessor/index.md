---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
page-type: web-api-interface
status:
  - experimental
browser-compat: api.MediaStreamTrackProcessor
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

> [!WARNING]
> Browsers differ on which global context they expose this interface in (e.g., only window in some browsers and only dedicated worker in others), making them incompatible. Keep this in mind when comparing support.

The **`MediaStreamTrackProcessor`** interface of the [Insertable Streams for MediaStreamTrack API](/en-US/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) consumes a video {{domxref("MediaStreamTrack")}} object's source and generates a stream of {{domxref("VideoFrame")}} objects.

## Constructor

- {{domxref("MediaStreamTrackProcessor.MediaStreamTrackProcessor", "MediaStreamTrackProcessor()")}} {{Experimental_Inline}}
  - : Creates a new `MediaStreamTrackProcessor` object.

## Instance properties

- {{domxref("MediaStreamTrackProcessor.readable")}} {{Experimental_Inline}}
  - : Returns a {{domxref("ReadableStream")}}.

## Examples

The following example is from the article [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). It [transfers](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) a camera {{domxref("MediaStreamTrack")}} to a worker for processing. The worker creates a pipeline that applies a sepia tone filter to the video frames and mirrors them. The pipeline culminates in a {{domxref("VideoTrackGenerator")}} whose {{domxref("MediaStreamTrack")}} is transferred back and played. The media now flows in real time through the transform off the {{Glossary("main thread")}}.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getVideoTracks();
const worker = new Worker("worker.js");
worker.postMessage({ track }, [track]);
const { data } = await new Promise((r) => (worker.onmessage = r));
video.srcObject = new MediaStream([data.track]);
```

worker.js:

```js
onmessage = async ({ data: { track } }) => {
  const vtg = new VideoTrackGenerator();
  self.postMessage({ track: vtg.track }, [vtg.track]);
  const { readable } = new MediaStreamTrackProcessor({ track });
  await readable
    .pipeThrough(new TransformStream({ transform }))
    .pipeTo(vtg.writable);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("VideoTrackGenerator")}}
- [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) on developer.chrome.com
  > [!NOTE]
  > This article was written before the API was restricted to workers and video. Beware its use of the non-standard version of `MediaStreamTrackProcessor` which blocks on the {{Glossary("main thread")}}.
