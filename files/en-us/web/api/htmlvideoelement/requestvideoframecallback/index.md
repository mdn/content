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

> **Note:** `width` and `height` may differ from {{domxref("HTMLVideoElement.videoWidth")}} and {{domxref("HTMLVideoElement.videoHeight")}} in certain cases (for example, an anamorphic video may have rectangular pixels).

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

This example shows how to use `requestVideoFrameCallback()` to draw the frames of a video onto a {{htmlelement("canvas")}} element at exactly the same frame rate as the video. It also logs the frame metadata to the DOM for debugging purposes.

```js
if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
  const video = document.createElement("video");
  const fpsInfo = document.createElement("div");
  const metadataInfo = document.createElement("div");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org
  // Poster from peach.blender.org
  video.src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  video.poster =
    "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217";
  video.width = 640;
  video.controls = true;

  document.body.append(video, fpsInfo, metadataInfo, canvas);

  let paintCount = 0;
  let startTime = 0.0;

  const updateCanvas = (now, metadata) => {
    if (startTime === 0.0) {
      startTime = now;
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const elapsed = (now - startTime) / 1000.0;
    const fps = (++paintCount / elapsed).toFixed(3);
    fpsInfo.innerText = `video fps: ${fps}`;
    metadataInfo.innerText = JSON.stringify(metadata, null, 2);

    // Re-register the callback to run on the next frame
    video.requestVideoFrameCallback(updateCanvas);
  };

  // Initial registration of the callback to run on the first frame
  video.requestVideoFrameCallback(updateCanvas);
} else {
  alert("Your browser does not support requestVideoFrameCallback().");
}
```

See [requestVideoFrameCallback Demo](https://requestvideoframecallback.glitch.me/) for a working implementation of the above code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
- [Perform efficient per-video-frame operations on video with `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc) on developer.chrome.com (2023)
