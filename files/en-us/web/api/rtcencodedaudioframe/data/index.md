---
title: "RTCEncodedAudioFrame: data property"
short-title: data
slug: Web/API/RTCEncodedAudioFrame/data
page-type: web-api-instance-property
browser-compat: api.RTCEncodedAudioFrame.data
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`data`** property of the {{domxref("RTCEncodedAudioFrame")}} interface returns a buffer containing the data for an encoded frame.

## Value

An {{jsxref("ArrayBuffer")}}.

## Examples

This example [WebRTC encoded transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) shows how you might get the frame data in a {{domxref("TransformStream")}} `transform()` function modify the bits.

The `transform()` function constructs a {{jsxref("DataView")}} on the buffer in the frame `data` property, and also creates a view on a new {{jsxref("ArrayBuffer")}}.
It then writes the negated bytes in the original data to the new buffer, assigns the buffer to the encoded frame `data` property, and enqueues the modified frame on the stream.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
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

Note that the surrounding code shown here is described in [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
