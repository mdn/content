---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
page-type: web-api-interface
browser-compat: api.RTCEncodedAudioFrame
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`RTCEncodedAudioFrame`** of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represents an encoded audio frame in the WebRTC receiver or sender pipeline, which may be modified using a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

The interface provides methods and properties to get metadata about the frame, allowing its format and order in the sequence of frames to be determined.
The `data` property gives access to the encoded frame data as a buffer, which might be encrypted, or otherwise modified by a transform.

## Instance properties

- {{domxref("RTCEncodedAudioFrame.timestamp")}} {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Returns the timestamp at which sampling of the frame started.
- {{domxref("RTCEncodedAudioFrame.data")}}
  - : Return a buffer containing the encoded frame data.

## Instance methods

- {{DOMxRef("RTCEncodedAudioFrame.getMetadata()")}}
  - : Returns the metadata associated with the frame.

## Examples

This code snippet shows a handler for the `rtctransform` event in a {{domxref("Worker")}} that implements a {{domxref("TransformStream")}}, and pipes encoded frames through it from the `event.transformer.readable` to `event.transformer.writable` (`event.transformer` is a {{domxref("RTCRtpScriptTransformer")}}, the worker-side counterpart of {{domxref("RTCRtpScriptTransform")}}).

If the transformer is inserted into an audio stream, the `transform()` method is called with a `RTCEncodedAudioFrame` whenever a new frame is enqueued on `event.transformer.readable`.
The `transform()` method shows how this might be read, modified using a fictional encryption function, and then enqueued on the controller (this ultimately pipes it through to the `event.transformer.writable`, and then back into the WebRTC pipeline).

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      //Encrypt frame bytes using the encryptFunction() method (not shown)
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        const encryptedByte = encryptFunction(~view.getInt8(i));
        newView.setInt8(i, encryptedByte);
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
- {{DOMxRef("RTCEncodedVideoFrame")}}
