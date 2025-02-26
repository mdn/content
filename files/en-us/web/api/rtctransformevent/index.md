---
title: RTCTransformEvent
slug: Web/API/RTCTransformEvent
page-type: web-api-interface
browser-compat: api.RTCTransformEvent
---

{{APIRef("WebRTC")}}

The **`RTCTransformEvent`** of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represent an event that is fired in a dedicated worker when an encoded frame has been queued for processing by a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

The interface has a {{domxref("RTCTransformEvent.transformer","transformer")}} property that exposes a readable stream and a writable stream.
A worker should read encoded frames from `transformer.readable`, modify them as needed, and write them to `transformer.writable` in the same order and without any duplication.

At time of writing there is just one event based on `RTCTransformEvent`: {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}.

{{InheritanceDiagram}}

## Instance properties

_Since `RTCTransformEvent` is based on {{domxref("Event")}}, its properties are also available._

- {{domxref("RTCTransformEvent.transformer")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("RTCRtpScriptTransformer")}} associated with the event.

## Transform event types

There is only one type of transform event.

### `rtctransform`

The {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event is fired at the worker global scope on construction of an associated {{domxref("RTCRtpScriptTransform")}}, and whenever a new encoded video or audio frame is enqueued for processing.

You can add a `rtctransform` event listener to be notified when the new frame is available using either {{domxref("EventTarget.addEventListener", "DedicatedWorkerGlobalScope.addEventListener()")}} or the `onrtctransform` event handler property.

## Example

This example creates an event listener for the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event.

The example assumes we have a {{domxref("TransformStream")}} with an `options` object passed from a {{domxref("RTCRtpScriptTransform")}} constructor in the main-thread.
The code at the end shows how the stream is piped through the transform stream from the `readable` to the `writable`.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform") {
    transform = createSenderTransform(); // A TransformStream (not shown)
  } else if (event.transformer.options.name == "receiverTransform") {
    transform = createReceiverTransform(); // A TransformStream (not shown)
  }
  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Note that this code is part of a more complete example provided in [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
