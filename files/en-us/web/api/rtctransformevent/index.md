---
title: RTCTransformEvent
slug: Web/API/RTCTransformEvent
page-type: web-api-interface
browser-compat: api.RTCTransformEvent
---

{{APIRef("WebRTC")}}

The **`RTCTransformEvent`** of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) represent an event on a WebRTC Transform, which is used to modify the format of a frame in the incoming or outgoing WebRTC pipeline.

The event has a property that exposes a main thread pipeline and arbitrary options to the worker thread as a Stream API.
The property exposes a readable stream and a writable stream: a worker can modify code by piping between these streams through a custom {{domxref("TransformStream")}}.

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

This simple example creates an event listener for the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event.
The `options` are passed from constructor of the main-thread transform object: commonly we use them to select what transform is to be applied.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform") {
    transform = createSenderTransform(); // A TransformStream (not shown)
  }

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

The code at the end shows how the stream is piped through a {{domxref("TransformStream")}} (implementation not shown).
Note that if the associated {{domxref("RTCRtpScriptTransform")}} has not yet been added to the WebRTC sender or receiver pipeline, no frames would be enqueued, so this would do nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
