---
title: Insertable Streams for MediaStreamTrack API
slug: Web/API/Insertable_Streams_for_MediaStreamTrack_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.VideoTrackGenerator
spec-urls: https://w3c.github.io/mediacapture-transform/
---

{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

The **Insertable Streams for MediaStreamTrack API** provides a way to process the video frames of a {{domxref("MediaStreamTrack")}} as they are consumed.

## Concepts and Usage

When processing real-time video, you sometimes want to insert visual elements or otherwise process the stream of video frames. For example, an application might include two tracks that need to be combined, such as a weather map and video of a presenter explaining the map. Or, you may want to do processing on a track to blur backgrounds, or introduce other elements (such as adding funny hats to people, and so on). The APIs described here provide direct access to the video stream, allowing you to manipulate it in real time.

To ensure optimal performance, the APIs are only available in [dedicated workers](/en-US/docs/Web/API/DedicatedWorkerGlobalScope) (unless otherwise stated).

## Interfaces

- {{domxref("MediaStreamTrackProcessor")}} {{Experimental_Inline}}
  - : Consumes a {{domxref("MediaStreamTrack")}} object's source and produces a stream of video frames.
- {{domxref("VideoTrackGenerator")}} {{Experimental_Inline}}
  - : Creates a {{domxref("WritableStream")}} that acts as a {{domxref("MediaStreamTrack")}} video source.
- {{domxref("MediaStreamTrackGenerator")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Creates a {{domxref("WritableStream")}} that acts as a {{domxref("MediaStreamTrack")}} source for either video or audio. Only available on the {{Glossary("main thread")}}.

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
