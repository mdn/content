---
title: RTCRtpScriptTransform
slug: Web/API/RTCRtpScriptTransform
page-type: web-api-interface
browser-compat: api.RTCRtpScriptTransform
---

{{APIRef("WebRTC")}}

The **`RTCRtpScriptTransform`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to insert a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) (a {{domxref("TransformStream")}} running in a worker thread) into the WebRTC sender and receiver pipelines.

## Constructor

- {{DOMxRef("RTCRtpScriptTransform.RTCRtpScriptTransform", "RTCRtpScriptTransform()")}}
  - : Creates a new instance of the `RTCRtpScriptTransform` object.

## Instance properties

None.

## Instance methods

None.

## Description

**`RTCRtpScriptTransform`** instances are constructed with a {{domxref("Worker")}}, in which the transform stream code will run, along with an (optional) `options` object and array of [transferrable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) that will be passed to the worker.
They are then added into incoming and outgoing RTC pipelines by assigning them to {{domxref("RTCRtpReceiver.transform")}} and {{domxref("RTCRtpSender.transform")}}, respectively.

On construction of this object, and whenever an encoded frame arrives, the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event is fired on the worker global object.
The event's `transformer` property is a {{DOMxRef("RTCRtpScriptTransformer")}}, the worker-side counterpart to the main-thread `RTCRtpScriptTransform`.
This has `readable` ({{domxref("ReadableStream")}}) and `writable` ({{domxref("WritableStream")}}) properties that have been shared from the main thread `RTCRtpScriptTransform` — where they are not public.
If the corresponding `RTCRtpScriptTransform` is used with an `RTCRtpReceiver`, then the `readable` queues incoming encoded audio or video frames from the packetizer.
If it is used with `RTCRtpSender` then `readable` contains frames coming from a codec.

The worker thread {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event handler defines a [pipe chain](/en-US/docs/Web/API/Streams_API/Concepts#pipe_chains).
This pipes encoded frames from `event.transformer.readable`, through a {{DOMxRef("TransformStream")}} which defines the transformation function, through to `event.transformer.writable`.
The `event.transformer` also has the `options` object passed from the `RTCRtpScriptTransform` constructor (if defined) that can be used to determine the source of the event, and hence the specific {{DOMxRef("TransformStream")}} to add to the chain.

## Examples

Note that these examples show how `RTCRtpScriptTransform` is defined and used.
Worker thread transform code is covered as part of the more complete example in [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

### Adding a transform for outgoing frames

This example shows how you might stream video from a user's webcam over WebRTC, adding a WebRTC encoded transform to modify the outgoing streams.
The code assumes that there is an {{domxref("RTCPeerConnection")}} called `peerConnection` that is already connected to a remote peer.

First we gets a {{domxref("MediaStreamTrack")}}, using {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}} to get a video {{domxref("MediaStream")}} from a media device, and then the {{domxref("MediaStream.getTracks()")}} method to get the first {{domxref("MediaStreamTrack")}} in the stream.

The track is added to the peer connection using {{domxref("RTCPeerConnection/addTrack()", "addTrack()")}} and sent.
The `addTrack()` method returns the {{domxref("RTCRtpSender")}} that is being used to send the track.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

An `RTCRtpScriptTransform` is then constructed taking a worker script, which defines the transform, and an optional object that can be used to pass arbitrary messages to the worker (in this case we've used a `name` property with value "senderTransform" to tell the worker that this transform will be added to the outbound stream).
We then add the transform to the sender by assigning it to the {{domxref("RTCRtpSender.transform")}} property.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Note that you can add the transform at any time.
However by adding it immediately after calling `addTrack()` the transform will get the first encoded frame that is sent.

### Adding a transform for incoming frames

This example shows how you add a WebRTC encoded transform to modify an incoming stream.
The code assumes that there is an {{domxref("RTCPeerConnection")}} called `peerConnection` that is already connected to a remote peer.

First we add an `RTCPeerConnection` [`track` event](/en-US/docs/Web/API/RTCPeerConnection/track_event) handler to catch the event when a new track is streamed.
Within the handler we construct an `RTCRtpScriptTransform` and add it to `event.receiver.transform` (`event.receiver` is a {{domxref("RTCRtpReceiver")}}).
As in the previous example, the constructor takes an object with `name` property: but here we use `receiverTransform` as the value to tell the worker that frames are incoming from the packetizer.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Note again that you can add the transform stream at any time.
However by adding it in the `track` event handler ensures that the transform stream will get the first encoded frame for the track.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
- {{domxref("RTCRtpScriptTransformer")}}
