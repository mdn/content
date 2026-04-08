---
title: "RTCEncodedVideoFrame: type property"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
page-type: web-api-instance-property
browser-compat: api.RTCEncodedVideoFrame.type
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`type`** read-only property of the {{domxref("RTCEncodedVideoFrame")}} interface indicates whether this frame is a key frame or delta frame. It has the type
of EncodedVideoChunkType.

## Value

The type can have one of the following values:

- `key`
  - : This is a "key frame", which contains all the information needed to render an image.
    It can be decoded without reference to any other frames.
- `delta`
  - : This is a "delta frame", which contains changes to an image relative to some previous frame.
    The frame cannot be decoded without access to the frame(s) that it references.

## Examples

The implementation of a `transform()` function in a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) can look at the `type` and modify the transform code based on whether it is dealing with a key frame or delta frame:

```js
const transformer = new TransformStream({
  async transform(encodedFrame, controller) {
    if (encodedFrame.type === "key") {
      // Apply key frame transformation
    } else {
      // Delta
      // Apply delta frame transformation
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
