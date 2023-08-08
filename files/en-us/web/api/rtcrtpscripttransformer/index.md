---
title: RTCRtpScriptTransformer
slug: Web/API/RTCRtpScriptTransformer
page-type: web-api-interface
browser-compat: api.RTCRtpScriptTransformer
---

{{APIRef("WebRTC")}}

The **`RTCRtpScriptTransformer`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is the worker-side counterpart of a {{DOMxRef("RTCRtpScriptTransform")}}.
It provides a `readable` and `writable` stream within a worker that can be used to create a stream API [pipe chain](/en-US/docs/Web/API/Streams_API/Concepts#pipe_chains) for transforming encoded media frames from the WebRTC sender or receiver pipelines.

Objects of the type are only available in dedicated workers (not the main window) through the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event, and are created when you construct a {{DOMxRef("RTCRtpScriptTransform")}}.

> **Note:** This feature is available in [_Dedicated_ Web Workers](/en-US/docs/Web/API/Web_Workers_API#worker_types).

## Instance properties

- {{domxref("RTCRtpScriptTransformer.readable")}} {{ReadOnlyInline}}
  - : A {{domxref("ReadableStream")}} on which encoded frames from the WebRTC sender or receiver pipelines may be enqueued.
- {{domxref("RTCRtpScriptTransformer.writable")}} {{ReadOnlyInline}}
  - : A {{domxref("WritableStream")}} that encoded frames may be piped to.
- {{domxref("RTCRtpScriptTransformer.options")}} {{ReadOnlyInline}}
  - : Options passed from the [`RTCRtpScriptTransform` constructor](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform), which are used to configure transform code based on whether incoming or outgoing frames are being processed.

## Instance methods

- {{domxref("RTCRtpScriptTransformer.generateKeyFrame()")}}
  - : Requests a video encoder generate a key frame. May be called by a transformer in the sender pipeline when processing outgoing frames.
- {{domxref("RTCRtpScriptTransformer.sendKeyFrameRequest()")}}
  - : Requests the sender send a key frame. May be called by a transformer in the receiver pipeline when processing incoming encoded video frames.

## Description

A `RTCRtpScriptTransformer` instance is created as part of construction of the associated {{DOMxRef("RTCRtpScriptTransform")}}.
It is made available to a worker through the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event `transformer` property.
This event is fired on construction of the associated {{DOMxRef("RTCRtpScriptTransform")}} and when an encoded frame is enqueued for processing from a codec (outgoing) or from the packetizer (incoming).

The transformer exposes a `readable` and `writable` stream into the worker, along with an "options" object provided to the {{DOMxRef("RTCRtpScriptTransform")}} on construction.
When the associated `RTCRtpScriptTransform` is assigned to a {{DOMxRef("RTCRtpSender")}} or {{DOMxRef("RTCRtpReceiver")}}, encoded media frames from the WebRTC sender or receiver pipelines are enqueued on the `readable` stream.
A WebRTC Encoded Transform can pipe frames from the `readable` through one or more {{DOMxRef("TransformStream")}} instances to a `writable`, transforming them as needed.
The "options" allow an appropriate transform function to be used, based on whether the encoded media frames are incoming or outgoing.

The interface also provides methods for a sender to generate get a video encoder to generate a new keyframe, or for a receiver to request a new key frame from the sender's encoder (video encoders commonly send a key frame containing the full information needed to construct an image, and subsequently send delta frames containing just the information that has changed since the previous frame).

These methods are required in cases where a recipient would be unable to decode incoming frame until they receive a new key frame.
For example, a new recipient joining a conference call will not be able see video until they have received a new key frame, since delta frames can only be decoded if you have the last key frame and all subsequent delta frames.
Similarly, if frames are encrypted for a recipient, they will only be able to decode frames once they have received their first encrypted key frame.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
