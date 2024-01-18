---
title: "HTMLVideoElement: cancelVideoFrameCallback() method"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
page-type: web-api-instance-method
browser-compat: api.HTMLVideoElement.cancelVideoFrameCallback
---

{{APIRef("HTML DOM")}}

The **`cancelVideoFrameCallback()`** method of the {{domxref("HTMLVideoElement")}} interface cancels a previously-registered video frame request callback.

## Syntax

```js-nolint
cancelVideoFrameCallback(id)
```

### Parameters

- `id`
  - : A number representing the ID of the video frame callback you want to cancel. This will be the value returned by the corresponding {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback")}} call.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Cancel a video frame callback

This example shows how to use `cancelVideoFrameCallback()` to cancel a previously registered video frame callback.

```js
let paintCount = 0;
let startTime = 0.0;

const updateCanvas = (now, metadata) => {
  // Do something with the frame.

  // ...

  // Re-register the callback to be notified about the next frame.
  video.requestVideoFrameCallback(updateCanvas);
};

// Initially register the callback to be notified about the first frame.
const videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// Cancel video frame callback
video.requestVideoFrameCallback(videoCallbackId);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
- [Perform efficient per-video-frame operations on video with `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc) on developer.chrome.com (2023)
