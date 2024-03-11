---
title: "DedicatedWorkerGlobalScope: rtctransform event"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
page-type: web-api-event
browser-compat: api.DedicatedWorkerGlobalScope.rtctransform_event
---

{{APIRef("WebRTC")}} {{AvailableInWorkers}}

The **`rtctransform`** event is fired at a worker's {{domxref('DedicatedWorkerGlobalScope')}} object when an encoded video or audio frame has been queued for processing by a {{domxref("WebRTC API/Using Encoded Transforms", "WebRTC Encoded Transform", "", "nocode")}}.

The event's {{domxref("RTCTransformEvent.transformer","transformer")}} property returns a {{domxref("RTCRtpScriptTransformer")}} that exposes the {{domxref("ReadableStream")}} on which the frame is queued, and a {{domxref("WritableStream")}} where the frame can be written to inject it back into the WebRTC pipeline.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("rtctransform", (event) => {});

onrtctransform = (event) => {};
```

## Event type

A {{domxref("RTCTransformEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCTransformEvent")}}

## Event properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("RTCTransformEvent.transformer")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("RTCRtpScriptTransformer")}} associated with the event.

## Example

The following code snippet shows a handler for the `rtctransform` event in the worker, added to the global scope using `addEventListener()`.
The `event.transformer` is a {{domxref("RTCRtpScriptTransformer")}}, the worker side counterpart to {{domxref("RTCRtpScriptTransform")}}.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  //Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

The `rtctransform` event is fired when an encoded frame is enqueued on the {{domxref("RTCRtpScriptTransformer")}} and just once when the transformer's corresponding {{domxref("RTCRtpScriptTransformer")}} is constructed.
The code first determines what transform to apply using `name` value passed in the options (this allows {{domxref("RTCRtpScriptTransform")}} instances added to the incoming and outgoing WebRTC pipelines to share a single worker).
Encoded frames are then piped from the readable, through the selected transform {{domxref("TransformStream")}}, to a writeable.
The actual tranforming code is not shown.

Note that this code is part of a more complete example provided in {{domxref("WebRTC API/Using Encoded Transforms", "Using WebRTC Encoded Transforms", "", "nocode")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebRTC API/Using Encoded Transforms", "Using WebRTC Encoded Transforms", "", "nocode")}}
