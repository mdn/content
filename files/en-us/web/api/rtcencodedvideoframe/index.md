---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
page-type: web-api-interface
browser-compat: api.RTCEncodedVideoFrame
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`RTCEncodedVideoFrame`** of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represents an encoded video frame in the WebRTC receiver or sender pipeline, which may be modified using a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

## Instance properties

- {{domxref("RTCEncodedVideoFrame.type")}} {{ReadOnlyInline}}
  - : Returns whether the current frame is a key frame, delta frame, or empty frame.
- {{domxref("RTCEncodedVideoFrame.timestamp")}} {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Returns the timestamp at which sampling of the frame started.
- {{domxref("RTCEncodedVideoFrame.data")}}
  - : Return a buffer containing the encoded frame data.

## Instance methods

- {{DOMxRef("RTCEncodedVideoFrame.getMetadata()")}}
  - : Returns the metadata associated with the frame.

## Description

Raw video data is generated as a sequence of frames, where each frame is a 2 dimensional array of pixel values.
Video encoders transform this raw input into a compressed representation of the original for transmission and storage.
A common approach is to send "key frames" that contain enough information to reproduce a whole image at a relatively low rate, and between key frames to send many much smaller "delta frames" that just encode the changes since the previous frame.

There are many different codecs, such as H.264, VP8, and VP9, each that have a different encoding processes and configuration, which offer different trade-offs between compression efficiency and video quality.

The **`RTCEncodedVideoFrame`** represents a single frame encoded with a particular video encoder.
The {{domxref("RTCEncodedVideoFrame.type","type")}} property indicates whether the frame is a "key" or "delta" frame, and you can use the {{DOMxRef("RTCEncodedVideoFrame.getMetadata()","getMetadata()")}} method to get other details about the encoding method.
The {{domxref("RTCEncodedVideoFrame.data", "data")}} property provides access to the encoded image data for the frame, which can then be modified ("transformed") when frames are sent or received.

## Examples

This code snippet shows a handler for the `rtctransform` event in a {{domxref("Worker")}} that implements a {{domxref("TransformStream")}}, and pipes encoded frames through it from the `event.transformer.readable` to `event.transformer.writable` (`event.transformer` is a {{domxref("RTCRtpScriptTransformer")}}, the worker-side counterpart of {{domxref("RTCRtpScriptTransform")}}).

If the transformer is inserted into a video stream, the `transform()` method is called with a `RTCEncodedVideoFrame` whenever a new frame is enqueued on `event.transformer.readable`.
The `transform()` method shows how this might be read, modified by inverting the bits, and then enqueued on the controller (this ultimately pipes it through to the `event.transformer.writable`, and then back into the WebRTC pipeline).

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negate all bits in the incoming frame
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Note that more complete examples are provided in [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
- {{DOMxRef("RTCRtpScriptTransformer")}}
- {{DOMxRef("RTCEncodedAudioFrame")}}
