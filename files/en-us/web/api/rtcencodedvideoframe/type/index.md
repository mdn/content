---
title: "RTCEncodedVideoFrame: type property"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
page-type: web-api-instance-property
browser-compat: api.RTCEncodedVideoFrame.type
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`type`** read-only property of the {{domxref("RTCEncodedVideoFrame")}} interface indicates whether this frame is a key frame, delta frame, or empty frame.

## Value

The type can have one of the following values:

- `key`
  - : This is a "key frame", which contains all the information needed to render an image.
    It can be decoded without reference to any other frames.
- `delta`
  - : This is a "delta frame", which contains changes to an image relative to some previous frame.
    The frame cannot be decoded without access to the frame(s) that it references.
- `empty`
  - : This frame contains no data.
    This value is unexpected, and may indicate that the transform is holding a reference to frames after they have been transformed and piped to {{domxref("RTCRtpScriptTransformer.writable")}} (after transferring back to the main-thread WebRTC pipeline the worker side frame object will have no data).

## Examples

The implementation of a `transform()` function in a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) can look at the `type` and modify the transform code based on whether it is dealing with a key frame or delta frame:

```js
const transformer = new TransformStream({
  transform: async (encodedFrame, controller) => {
    if (encodedFrame.type === "key") {
      // Apply key frame transformation
    } else if (encodedFrame.type === "delta") {
      // Apply delta frame transformation
    } else {
      // Empty
      // Check transform is not holding reference to frames after processing!
    }
    controller.enqueue(encodedFrame);
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
