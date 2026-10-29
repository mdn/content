---
title: "HTMLVideoElement: requestVideoFrameCallback() method"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
page-type: web-api-instance-method
browser-compat: api.HTMLVideoElement.requestVideoFrameCallback
---

{{APIRef("HTML DOM")}}

The **`requestVideoFrameCallback()`** method of the {{domxref("HTMLVideoElement")}} interface registers a callback function that runs when a new video frame is sent to the compositor. This enables developers to perform efficient operations on each video frame.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameters

- `callback`
  - : The callback function that runs when a new video frame is sent to the compositor. This contains two parameters:
    - `now`
      - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the callback was called.
    - `metadata`
      - : An object containing the following properties:
        - `expectedDisplayTime`
          - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the browser expects the frame to be visible.
        - `height`
          - : A number, in media pixels, representing the height of the video frame (the visible decoded pixels, without aspect ratio adjustments).
        - `mediaTime`
          - : A number, in seconds, representing the media presentation timestamp of the presented frame. This is equal to the frame's timestamp on the {{domxref("HTMLMediaElement.currentTime")}} timeline.
        - `presentationTime`
          - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the browser submitted the frame for composition.
        - `presentedFrames`
          - : A number representing the number of frames submitted for composition so far alongside the current callback.
            This can be used to detect whether frames were missed between callback instances.
        - `processingDuration`
          - : A number, in seconds, representing the duration between the submission of the encoded packet with the same presentation timestamp as this frame to the decoder (i.e., the `mediaTime`) and the decoded frame being ready for presentation.
        - `width`
          - : A number, in media pixels, representing the width of the video frame (the visible decoded pixels, without aspect ratio adjustments).

        Additional metadata properties may be available within `requestVideoFrameCallback()` callbacks used in {{domxref("WebRTC_API", "WebRTC", "", "nocode")}} applications:
        - `captureTime`
          - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the frame was captured. This applies to video frames coming from a local or remote source. For a remote source, the capture time is estimated using clock synchronization and RTCP sender reports to convert RTP timestamps to capture time.
        - `receiveTime`
          - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the encoded frame was received by the platform. This applies to video frames coming from a remote source. Specifically, this corresponds to the time when the last packet belonging to this frame was received over the network.
        - `rtpTimestamp`
          - : A number representing the RTP timestamp associated with this video frame.

> [!NOTE]
> `width` and `height` may differ from {{domxref("HTMLVideoElement.videoWidth")}} and {{domxref("HTMLVideoElement.videoHeight")}} in certain cases (for example, an anamorphic video may have rectangular pixels).

### Return value

A number representing a unique callback ID.

This can be passed to {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}} to cancel the callback registration.

## Description

Typical use cases for `requestVideoFrameCallback()` include video processing and painting to a canvas, video analysis, and synchronization with external audio sources. Per-frame processing used to be done in a less efficient or accurate fashion by running operations on the current video display whenever the {{domxref("HTMLMediaElement.timeupdate_event", "timeupdate")}} event fired. This technique did not provide access to the actual video frames.

`requestVideoFrameCallback()` is used in the same way as {{domxref("Window.requestAnimationFrame()")}}. You use it to run a callback function that performs some operation when the next video frame is sent to the compositor. The callback finishes by calling `requestVideoFrameCallback()` again to run the callback when the next video frame is composited, and so on. However, `requestVideoFrameCallback()` is tailored for video operations in several ways:

- `requestVideoFrameCallback()` provides reliable access to each individual video frame.
- `requestAnimationFrame()` tries to match the display refresh rate, which is typically 60Hz. `requestVideoFrameCallback()`, on the other hand, tries to match the video frame rate. More specifically, the callback will run at the lower of the video frame rate and the browser paint refresh rate. For example, a video with a frame rate of 25fps playing in a browser that paints at 60Hz would fire callbacks at a rate of 25Hz. A video with a frame rate of 120fps running in the same 60Hz browser would fire callbacks at 60Hz.
- `requestVideoFrameCallback()` makes useful video metadata available in the callback function.

One thing to bear in mind is that `requestVideoFrameCallback()` does not offer any strict guarantees that the output from your callback will remain in sync with the video frame rate. It may end up being fired one vertical synchronization (v-sync) later than when the new video frame was presented. (V-sync is a graphics technology that synchronizes the frame rate of a video with the refresh rate of a monitor.)

The API runs on the main thread, while video compositing likely happens on a separate compositing thread. You've got to factor in the time taken for these operations to complete, as well as the time it takes for the video itself and the result of your `requestVideoFrameCallback()` operation to display on the screen.

You can compare the `now` callback parameter and the `expectedDisplayTime` metadata property to determine whether your callback is a v-sync late. If `expectedDisplayTime` is within about five to ten microseconds of `now`, the frame is already rendered. If the `expectedDisplayTime` is approximately sixteen milliseconds in the future (assuming your browser/screen is refreshing at 60Hz), then the callback is a v-sync out.

## Examples

### Drawing video frames on a canvas

This example shows how to use `requestVideoFrameCallback()` to draw the frames of a video onto a {{htmlelement("canvas")}} element at exactly the same frame rate as the video. It also logs the frame metadata to the screen for debugging purposes.

The technique given in the section Description that helps determine whether your callback is a v-sync late can be used for fine analysis of your application but, en masse, this trick is prone to produce a garbled output when used to compute a frame-per-second parameter on the fly. In the example below we hide the video controls for the first time playback and record increments of 'now' and 'metadata.mediaTime', on each frame played. The parameter fps can be calculated manually from these increments, i.e. fps = ((metadata.presentedFrames - 1) / metadata.mediaTime). Video controls are made enabled after the 'ended' event is triggered and processed.

In later playback runs you can pause playback and seek in the timeline to observe the metadata evolution. You can also select the video source from three options on the page. After re-connect, the timing data list is recorded in the first-time playback with this source.

```js
        const button = document.querySelector("button");
        const video = document.querySelector("video");
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        const fpsInfo = document.querySelector("#fps-info");
        const metadataInfo = document.querySelector("#metadata-info");

        let firstRun = true;
        let requestVideoFrameCallbackId = null;

        button.addEventListener("click", () =>
            video.paused ? video.play() : video.pause(),
        );

        video.addEventListener("play", () => {
            if (!("requestVideoFrameCallback" in HTMLVideoElement.prototype)) {
                console.error(
                    "Your browser does not support the `Video.requestVideoFrameCallback()` API.",
                );
            };
            video.requestVideoFrameCallback(updateCanvas);
        });

        video.addEventListener("ended", () => {
            video.cancelVideoFrameCallback(requestVideoFrameCallbackId);
            video.controls = true;
            firstRun = false;
        });

        let prevNow = 0;
        let prevMediaTime = 0;
        const updateCanvas = (now, metadata) => {

            canvas.width = metadata.width;
            canvas.height = metadata.height;

            ctx.drawImage(video, 0, 0, metadata.width, metadata.height);

            if (firstRun && (metadata.presentedFrames > 2)) {
                //const fps = ((metadata.presentedFrames - 1) / metadata.mediaTime).toFixed(3);
                fpsInfo.innerText += "{ " + ((now - prevNow)/1000).toFixed(5) + ", " + (metadata.presentedFrames - 1) + ", " + (metadata.mediaTime - prevMediaTime).toFixed(5) + "}";
            }
            prevNow = now;
            prevMediaTime = metadata.mediaTime;
            metadataInfo.innerText = JSON.stringify(metadata, null, 2);

            if (video.paused || video.ended) {
                return;
            }

            requestVideoFrameCallbackId = video.requestVideoFrameCallback(updateCanvas);
        };

        video.src = "https://mdn.github.io/shared-assets/videos/flower.mp4";

        requestVideoFrameCallbackId = video.requestVideoFrameCallback(updateCanvas);

        function reconnect(ref){
            video.src = ref;
            video.controls = false;
            firstRun = true;
            fpsInfo.innerText = "";
        }
```

```css
video,
canvas {
  max-width: 49%;
}
div {
  max-height: 30em;
  overflow-y: auto;
}
```

```html
    Select video source: <select title="videoSource" onchange="reconnect(this.value)">
        <option value="https://mdn.github.io/shared-assets/videos/flower.mp4">Flower</option>
        <option value="https://mdn.github.io/shared-assets/videos/learn/bug_video_640.mp4">Bug</option>
        <option value="https://mdn.github.io/shared-assets/videos/sintel-short.mp4">Sintel</option>
    </select>
    <p>
        Start <button type="button">⏯</button> playing the video. Pause the video to
        read the metadata. Drawing video frames on the canvas is synced with the
        actual video framerate.
    </p>
    <video playsinline></video>
    <canvas></canvas>
    <pre id="metadata-info"></pre>
    <p>
        During the first time playback, increments of 'now' and 'metadata.mediaTime'
        of requestVideoFrame callback in each frame played are recorded and typed
        in the div below with &Delta;now, frame# and &Delta;mediaTime values
        {&lt;&Delta;now&gt; &lt;frame#&gt;, &lt;&Delta;mediaTime&gt;}. 
        Parameter fps can be calculated manually from this data: fps = 1/&Delta;mediaTime.
        Video controls are hidden in the first run and become displayed after the
        'ended' event is triggered and processed. When video source is selected, 
        the fps data list is calculated anew in the first playback with this source.
    </p>
    <div id="fps-info"></div>
```

{{embedlivesample("drawing_video_frames_on_a_canvas", , "540")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
- [Perform efficient per-video-frame operations on video with `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc) on developer.chrome.com (2023)
