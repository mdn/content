---
title: "RTCRtpScriptTransformer: sendKeyFrameRequest() method"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
page-type: web-api-instance-method
browser-compat: api.RTCRtpScriptTransformer.sendKeyFrameRequest
---

{{APIRef("WebRTC")}}

The **`sendKeyFrameRequest()`** method of the {{domxref("RTCRtpScriptTransformer")}} interface may be called by a [WebRTC Encoded Transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) that is processing incoming encoded video frames, in order to request a key frame from the sender.

The method may only be called when receiving _video_ (not audio) frames and if, for whatever reason, a recipient will not be able to decode the video without a new key frame.
Note that the user agent can decide that the request for a key frame is not necessary, in which case the returned promise will fulfill even though the request was not actually sent.

> [!NOTE]
> It might be called, for example, if a new user joins a WebRTC conference, in order to reduce the time before they receive a key frame and can hence start displaying video.
> For more information see [Triggering a key frame](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in Using WebRTC Encoded Transforms.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined` once the request is sent, or the user agent decides that it does not need to.

### Exceptions

- `InvalidStateError`
  - : The de-packetizer is not processing video packets, or is `undefined`.

## Examples

The example below shows how the main thread of a WebRTC application that is receiving encoded video might pass a decryption key to a receiver transform, and request the sender emit a key frame.

Note that the main thread doesn't have direct access to the {{domxref("RTCRtpScriptTransformer")}} object, so it needs to pass the key to the worker.
Here we do that with a `MessageChannel`, transferring the second port to the transformer code running in the worker.
The code assumes there is already a peer connection, and `videoReceiver` is an {{domxref("RTCRtpReceiver")}}.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoReceiver.transform = new RTCRtpScriptTransform(
  worker,
  { name: "receiverTransform", port: channel.port2 },
  [channel.port2],
);

// Post new key to the receiver
channel.port1.start();
channel.port1.postMessage({
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

The {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} event handler in the worker gets the port as `event.transformer.options.port`.
The code snippet below shows how that is used to listen for `message` events on the channel.
If an event is received the handler gets the `key`, and then calls `sendKeyFrameRequest()` on the transformer.

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key is used by the transformer to decrypt frames (not shown)

  // Request sender to emit a key frame.
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.sendKeyFrameRequest();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{DOMxRef("RTCRtpScriptTransformer")}}
