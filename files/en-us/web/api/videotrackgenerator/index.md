---
title: VideoTrackGenerator
slug: Web/API/VideoTrackGenerator
page-type: web-api-interface
status:
  - experimental
browser-compat: api.VideoTrackGenerator
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

The **`VideoTrackGenerator`** interface of the [Insertable Streams for MediaStreamTrack API](/en-US/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) has a {{domxref("WritableStream")}} property that acts as a {{domxref("MediaStreamTrack")}} source, by consuming a stream of {{domxref("VideoFrame")}}s as input.

## Constructor

- {{domxref("VideoTrackGenerator.VideoTrackGenerator", "VideoTrackGenerator()")}} {{Experimental_Inline}}
  - : Creates a new `VideoTrackGenerator` object which accepts {{domxref("VideoFrame")}} objects.

## Instance properties

- {{domxref("VideoTrackGenerator.muted")}} {{Experimental_Inline}}
  - : A Boolean property to temporarily halt or resume the generation of video frames in the output track.
- {{domxref("VideoTrackGenerator.track")}} {{Experimental_Inline}}
  - : The output {{domxref("MediaStreamTrack")}}.
- {{domxref("VideoTrackGenerator.writable")}} {{Experimental_Inline}}
  - : The input {{domxref("WritableStream")}}.

## Examples

The following example is from the article [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). It [transfers](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) a camera {{domxref("MediaStreamTrack")}} to a worker for processing. The worker creates a pipeline that applies a sepia tone filter to the video frames and mirrors them. The pipeline culminates in a `VideoTrackGenerator` whose {{domxref("MediaStreamTrack")}} is transferred back and played. The media now flows in real time through the transform off the {{Glossary("main thread")}}.

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

- {{domxref("MediaStreamTrackProcessor")}}
