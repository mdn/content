---
title: "RTCRtpReceiver: transform property"
short-title: transform
slug: Web/API/RTCRtpReceiver/transform
page-type: web-api-instance-property
browser-compat: api.RTCRtpReceiver.transform
---

{{APIRef("WebRTC")}}

The **`transform`** property of the {{domxref("RTCRtpReceiver")}} object is used to insert a transform stream ({{domxref("TransformStream")}}) running in a worker thread into the receiver pipeline.
This allows stream transforms to be applied to encoded video and audio frames as they arrive from the packetizer (before they are played/rendered).

The transform that is to be added is defined using an {{domxref("RTCRtpScriptTransform")}} and its associated {{domxref("Worker")}}.
If the transform is set in the peer connection [`track` event](/en-US/docs/Web/API/RTCPeerConnection/track_event) handler, the transform stream will receive the first full incoming frame for the track.

### Value

A {{domxref("RTCRtpScriptTransform")}}<!-- or {{domxref("SFrameTransform")}} -->, or `null` if the receiver has no associated transform stream.

## Example

Note that this is part of a larger example in the guide topic [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

## Adding a transform for incoming frames

This example shows how you add a WebRTC encoded transform to modify an incoming stream.
The code assumes that there is an {{domxref("RTCPeerConnection")}} called `peerConnection` that is already connected to a remote peer.

To add a transform stream into the pipeline for incoming frames we need to construct an {{domxref("RTCRtpScriptTransform")}} and assign it to the receiver's `transform` property.
We can do this in the [`track` event](/en-US/docs/Web/API/RTCPeerConnection/track_event) handler as shown.
This event is fired on the peer connection whenever the remote end sends a track.
The `event.receiver` property is an {{domxref("RTCRtpReceiver")}}.

```js
const worker = new Worker("worker.js");
peerConnection.ontrack = (event) => {
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

Because the transform is constructed immediately after creation of the {{domxref("RTCRtpReceiver")}}, it will receive the first incoming frame.
The object passed as the second parameter in the {{domxref("RTCRtpScriptTransform")}} constructor is sent to the worker thread, and can be used by worker code to provide a different transform for the incoming frames than is used for outgoing frames.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("RTCRtpSender.transform")}}
