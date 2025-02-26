---
title: "HTMLVideoElement: cancelVideoFrameCallback() method"
short-title: cancelVideoFrameCallback()
slug: Web/API/HTMLVideoElement/cancelVideoFrameCallback
page-type: web-api-instance-method
browser-compat: api.HTMLVideoElement.cancelVideoFrameCallback
---

{{APIRef("HTML DOM")}}

The **`cancelVideoFrameCallback()`** method of the {{domxref("HTMLVideoElement")}} interface cancels a previously-registered video frame callback.

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

### Canceling a video frame callback

This example shows how to use `cancelVideoFrameCallback()` to cancel a previously-registered video frame callback.

```js
const updateCanvas = (now, metadata) => {
  // Do something with the frame

  // ...

  // Re-register the callback to run on the next frame
  // It's important to update the videoCallbackId on each iteration
  // so you can cancel the callback successfully
  videoCallbackId = video.requestVideoFrameCallback(updateCanvas);
};

// Initial registration of the callback to run on the first frame
let videoCallbackId = video.requestVideoFrameCallback(updateCanvas);

// ...

// Cancel video frame callback using the latest videoCallbackId
video.cancelVideoFrameCallback(videoCallbackId);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("video")}} element
- {{DOMxRef("HTMLVideoElement.requestVideoFrameCallback()")}}
- [Perform efficient per-video-frame operations on video with `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc) on developer.chrome.com (2023)
