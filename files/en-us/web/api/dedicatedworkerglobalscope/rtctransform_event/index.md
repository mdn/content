---
title: "DedicatedWorkerGlobalScope: rtctransform event"
short-title: rtctransform
slug: Web/API/DedicatedWorkerGlobalScope/rtctransform_event
page-type: web-api-event
browser-compat: api.DedicatedWorkerGlobalScope.rtctransform_event
---

{{APIRef("WebRTC")}}

The `rtctransform` event is fired at a worker's {{domxref('DedicatedWorkerGlobalScope')}} object when its associated {{domxref("RTCRtpScriptTransform")}} is constructed, or when a new encoded video or audio frame has been queued for processing.

This event is not cancellable and does not bubble.

{{AvailableInWorkers}}

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

A WebRTC Encoded transform is represented in the main thread by a {{domxref("RTCRtpScriptTransform")}}.
The [`RTCRtpScriptTransform` constructor](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) takes as arguments a {{domxref("Worker")}} that modifies frames using a {{domxref("TransformStream")}}, an "options" object that is typically used to communicate what transform is required, and an array of items to transfer to the worker.
The {{domxref("RTCRtpScriptTransform")}} can be added to the WebRTC outgoing and incoming pipelines by adding to {{domxref("RTCRtpSender")}} and {{domxref("RTCRtpReceiver")}}, respectively.
This is shown below for the {{domxref("RTCRtpSender")}} case (for receiver examples see {{domxref("RTCRtpScriptTransform")}}).

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);

// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

The `rtctransform` event is fired at its associated worker when the {{domxref("RTCRtpScriptTransform")}} is constructed.
The event is also fired each time an encoded frame is added for processing.

The following code snippet shows a handler for the `rtctransform` event in the worker (added to the global scope using `addEventListener()`).
The `event.transformer` is a {{domxref("RTCRtpScriptTransformer")}}, the worker side counterpart to the {{domxref("RTCRtpScriptTransform")}}.

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

The code first determines what transform to apply using `name` value passed in the options (this allows {{domxref("RTCRtpScriptTransform")}} instances added to the incoming and outgoing WebRTC pipelines to share a single worker).
Encoded frames are then piped from the readable, through the selected transform {{domxref("TransformStream")}}, to a writeable.
The actual tranforming code is not shown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
