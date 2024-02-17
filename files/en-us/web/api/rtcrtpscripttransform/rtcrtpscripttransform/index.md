---
title: "RTCRtpScriptTransform: RTCRtpScriptTransform() constructor"
short-title: RTCRtpScriptTransform()
slug: Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform
page-type: web-api-constructor
browser-compat: api.RTCRtpScriptTransform.RTCRtpScriptTransform
---

{{APIRef("WebRTC")}}

The **`RTCRtpScriptTransform()`** constructor creates a new {{domxref("RTCRtpScriptTransform")}} object.

Constructing the `RTCRtpScriptTransform` creates a counterpart {{domxref("RTCRtpScriptTransformer")}} in the specified worker, along with passed options (if any). Objects in the third parameter to the constructor are transferred.

The {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} event is then fired at the worker global object.
Worker code can use the `event.transformer` property to get the counterpart {{domxref("RTCRtpScriptTransformer")}}, and `event.transformer.options` is used to get the options.

Note that the options are primarily used to inform the worker whether the transformer is processing incoming or outgoing frames, so that it can apply an appropriate transform.

## Syntax

```js-nolint
new RTCRtpScriptTransform(worker)
new RTCRtpScriptTransform(worker, options)
new RTCRtpScriptTransform(worker, options, transfer)
```

### Parameters

- `worker`
  - : A {{domxref("Worker")}}, which will define code for one or more WebRTC transform streams.
- `options` {{optional_inline}}
  - : An arbitrary object that will be made available in the worker.
    This is most commonly used to inform the worker whether it injected into the WebRTC sender or receiver pipeline, and hence which transform should be applied.
    However it may also be used to send any other object, such as a {{domxref("MessagePort")}} for communicating dynamically with the transformer.
- `transfer` {{optional_inline}}
  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) that will be transferred to the worker.
    After transfer, these objects are unusable in the main thread.

### Exceptions

- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if an object in `transfer` cannot be transferred.

## Examples

The first example below shows construction of a {{domxref("RTCRtpScriptTransform")}} that is then assigned to a {{domxref("RTCRtpSender.transform")}}.
The constructor takes an optional object with the property `name` and `senderTransform`.
The worker can use this option to understand when it is transforming encoded frames from the encoder (rather than incoming frames from the packetizer).

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Any property name and value can be used in the options, as long as they can be serialized (and [transferred](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) if specified in the last constructor parameter).
The code below transfers the second port of a {{domxref("MessageChannel")}} to the worker, which we might do in order to dynamically update transform code with (say) a new encryption key.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypt", port: channel.port2 },
  [channel.port2],
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("RTCRtpSender.transform")}}
- {{domxref("RTCRtpReceiver.transform")}}
