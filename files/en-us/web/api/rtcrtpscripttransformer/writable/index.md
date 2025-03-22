---
title: "RTCRtpScriptTransformer: writable property"
short-title: writable
slug: Web/API/RTCRtpScriptTransformer/writable
page-type: web-api-instance-property
browser-compat: api.RTCRtpScriptTransformer.writable
---

{{APIRef("WebRTC")}}

The **`writable`** read-only property of the {{domxref("RTCRtpScriptTransformer")}} interface returns a {{domxref("WritableStream")}} instance that can be used as a sink for encoded media frames enqueued on the corresponding {{domxref("RTCRtpScriptTransformer.readable")}}.

When the corresponding {{domxref("RTCRtpScriptTransform")}} is inserted into the WebRTC sender and receiver pipelines, encoded media frames ({{domxref("RTCEncodedVideoFrame")}} or {{domxref("RTCEncodedAudioFrame")}}) may be enqueued on the {{domxref("RTCRtpScriptTransformer.readable")}}.
A WebRTC encoded transform can read the frames from `readable`, modify them as needed, and then send them back into the WebRTC pipeline by sending them to this `writable`.
A common way to perform this operation is to pipe the frames through a {{domxref("TransformStream")}}.

## Value

A {{domxref("WritableStream")}}.

## Examples

The following example shows how {{domxref("RTCRtpScriptTransformer.readable")}} is piped through a {{domxref("TransformStream")}} to `RTCRtpScriptTransformer.writable`.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

The code implements a handler for the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event, which is fired at the global worker object on construction of the corresponding {{domxref("RTCRtpScriptTransform")}}, and when new frames are enqueued for processing.
`event.transformer` is the {{domxref("RTCRtpScriptTransformer")}} that has the `writable` and `readable` properties.

An different {{domxref("TransformStream")}} is created to process outgoing and incoming frames, using `createSenderTransform()` or `createReceiverTransform()`, respectively (implementations not shown).
The event handler chooses the correct transform stream to use based on options passed through from the [`RTCRtpScriptTransform` constructor](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) and assigns it to `transform`.

The code calls {{domxref("ReadableStream.pipeThrough()")}} on the `readable` to pipe encoded frames through the selected `TransformStream`, and then {{domxref("ReadableStream.pipeTo()")}} to pipe them to the `RTCRtpScriptTransformer.writable`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
