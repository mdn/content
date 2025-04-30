---
title: "RTCRtpScriptTransformer: options property"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
page-type: web-api-instance-property
browser-compat: api.RTCRtpScriptTransformer.options
---

{{APIRef("WebRTC")}}

The **`options`** read-only property of the {{domxref("RTCRtpScriptTransformer")}} interface returns the object that was (optionally) passed as the second argument [during construction](/en-US/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) of the corresponding {{domxref("RTCRtpScriptTransform")}}.

## Value

An object.

## Description

The simplest use of options is for the main thread to indicate whether the corresponding {{domxref("RTCRtpScriptTransform")}} is to be added to the WebRTC sender or receiver pipeline. This is important if the same worker is used for processing both incoming and outgoing encoded frames, as it allows code to determine what transform should be applied to the frames.

Options can also be used to send/transfer the second port of a [message channel](/en-US/docs/Web/API/Channel_Messaging_API) to the worker-side transform.
This channel can then be used to send dynamic information to a transform stream, such as when encryption keys are changed or added.
Note that you might also send messages to the transform using {{domxref("Worker.postMessage()")}}, but you would then have to appropriately redirect the messages if the worker is used in different contexts (while a message port option provides a direct channel for a specific transform).

## Examples

### How to indicate the current WebRTC pipeline

{{domxref("RTCRtpScriptTransform")}} is constructed with a particular {{domxref("Worker")}} and options, and then inserted into either the WebRTC outgoing or incoming pipeline by assigning it to {{domxref("RTCRtpSender.transform")}} or {{domxref("RTCRtpReceiver.transform")}}, respectively.
If the same worker is used in the transforms for the incoming and outgoing pipeline, then you need to supply options in the constructor to indicate whether encoded frames to be transformed are incoming or outgoing.

The example below shows how this might be done for a `RTCRtpScriptTransform` added to the sender pipeline after adding a track to the peer connection ({{domxref("RTCPeerConnection")}}), and then adding another transform to the receiver pipeline when a track is received.

```js
// videoSender is an RTCRtpSender.
const videoSender = peerConnection.addTrack(track, mediaStream);
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

```js
peerConnection.ontrack = (event) => {
  // event.receiver is an RTCRtpReceiver
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

In each case above we supply an object with a different value for the option object's `name` property, which indicates the pipeline that the transform was added to.
Note that the names and values of properties in `options` is arbitrary: what matters is that the main thread and worker thread both know what properties and values are used.

The following code how the passed options are used in the worker.
First we implement a handler for the {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event, which is fired at the global worker object on construction of the corresponding {{domxref("RTCRtpScriptTransform")}}, and when new frames are enqueued for processing.
`event.transformer` is a {{domxref("RTCRtpScriptTransformer")}} that has a `readable`, `writable`, and `options` property.

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

The code creates a different {{domxref("TransformStream")}} to process outgoing and incoming frames, using `createSenderTransform()` or `createReceiverTransform()`, based on the passed options (it then pipes frames from the `readable`, through the selected `TransformStream`, to the `writable`).

### Passing a message port to a transform

This example shows how to create a [message channel](/en-US/docs/Web/API/Channel_Messaging_API) and transfer one of its ports to the WebRTC encoded transform running in the worker. This main thread can then send and transfer objects and messages to the transformer running in the worker after construction, and vice versa.

The code below first creates a {{domxref("MessageChannel")}} and then constructs a `RTCRtpScriptTransform` passing the {{domxref("MessageChannel.port2","port2")}} value as an property in the options argument.
The port is also included in the array passed as the third constructor argument, so that it is transferred into the worker context.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

The worker can then get the port from the `rtctransform` event fired at the global worker object.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // … other transformer code
});
```

Code in each end of the channel can send and transfer objects to the other end using {{domxref("MessagePort.postMessage()")}}, and listen for incoming messages using its {{domxref("MessagePort/message_event", "message")}} event.

For example, assuming we had an encryption key in a {{jsxref("Uint8Array")}} typed array named `encryptionKey`, we could transfer it from the main thread to the worker as shown:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

The worker would listen for the `message` event to get the key:

```js
messagePort.addEventListener("message", (event) => {
  const encryptionKeyBuffer = event.data;
  // … Use the encryptionKeyBuffer for encryption or any other purpose
});
```

See [message channel](/en-US/docs/Web/API/Channel_Messaging_API) for more information and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
