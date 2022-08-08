---
title: RTCPeerConnection.createOffer()
slug: Web/API/RTCPeerConnection/createOffer
page-type: web-api-instance-method
tags:
  - API
  - Media
  - Method
  - RTCPeerConnection
  - Reference
  - SDP
  - WebRTC
  - createOffer
browser-compat: api.RTCPeerConnection.createOffer
---
{{APIRef("WebRTC")}}

The **`createOffer()`** method
of the {{domxref("RTCPeerConnection")}} interface
initiates the creation of an {{Glossary("SDP")}} offer
for the purpose of starting a new WebRTC connection to a remote peer.
The SDP offer includes information
about any {{domxref("MediaStreamTrack")}} objects
already attached to the WebRTC session, codec, and options supported by the browser,
and any candidates already gathered by the {{Glossary("ICE")}} agent,
for the purpose of being sent over the signaling channel
to a potential peer
to request a connection
or to update the configuration of an existing connection.

The return value is a {{jsxref("Promise")}} which, when the offer has been created, is
resolved with a {{domxref("RTCSessionDescription")}} object containing the newly-created
offer.

## Syntax

```js
createOffer()
createOffer(options)

createOffer(successCallback, failureCallback)
createOffer(successCallback, failureCallback, options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object providing the following options requested for the offer:

    - `iceRestart` {{optional_inline}}
      - : To restart ICE on an active connection, set this to `true`. This will
        cause the returned offer to have different credentials than those already in place. If
        you then apply the returned offer, ICE will restart. Specify `false` to
        keep the same credentials and therefore not restart ICE. **The default is
        `false`**.
    - `offerToReceiveAudio` {{optional_inline}} {{deprecated_inline}}
      - : Provides additional control over the directionality of audio. For example, it can be used to ensure that audio can be received, regardless if audio is sent or not.
    - `offerToReceiveVideo` {{optional_inline}} {{deprecated_inline}}
      - : Provides additional control over the directionality of video. For example, it can be used to ensure that video can be received, regardless if video is sent or not.

### Deprecated parameters

In older code and documentation, you may see a callback-based version of this function.
This has been deprecated and its use is **strongly** discouraged. You
should update any existing code to use the {{jsxref("Promise")}}-based version of
`createOffer()` instead. The parameters for this form of
`createOffer()` are described below, to aid in updating existing code.

- `successCallback` {{deprecated_inline}}
  - : A [callback function](/en-US/docs/Glossary/Callback_function) which will be passed a single
    {{domxref("RTCSessionDescription")}} object describing the newly-created offer.
- `errorCallback` {{deprecated_inline}}
  - : A [callback function](/en-US/docs/Glossary/Callback_function) which will be passed a single
    {{domxref("DOMException")}} object explaining why the request to create an offer
    failed.
- `options` {{optional_inline}}
  - : An optional object providing options requested for the offer.

### Return value

A {{jsxref("Promise")}} whose fulfillment handler will receive an object conforming to
the [RTCSessionDescriptionInit](/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription#rtcsessiondescriptioninit) dictionary which contains the SDP
describing the generated offer. That received offer should be delivered through the
signaling server to a remote peer.

### Exceptions

These exceptions are returned by rejecting the returned promise. Your rejection handler
should examine the received exception to determine which occurred.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the `RTCPeerConnection` is closed.
- `NotReadableError` {{domxref("DOMException")}}
  - : Returned if no certificate or set of certificates was provided for securing the connection, and
    `createOffer()` was unable to create a new one. Since all WebRTC
    connections are required to be secured, that results in an error.
- `OperationError` {{domxref("DOMException")}}
  - : Returned if examining the state of the system to determine resource availability in order to
    generate the offer failed for some reason.

## Examples

Here we see a handler for the {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event which creates the
offer and sends it to the remote system over a signaling channel.

> **Note:** Keep in mind that this is part of the signaling process, the
> transport layer for which is an implementation detail that's entirely up to you. In
> this case, a [WebSocket](/en-US/docs/Web/API/WebSockets_API) connection is
> used to send a {{Glossary("JSON")}} message with a `type` field with the
> value "video-offer" to the other peer. The contents of the object being passed to the
> `sendToServer()` function, along with everything else in the promise
> fulfillment handler, depend entirely on your design.

```js
myPeerConnection.createOffer()
  .then((offer) => myPeerConnection.setLocalDescription(offer))
  .then(() => {
    sendToServer({
      name: myUsername,
      target: targetUsername,
      type: "video-offer",
      sdp: myPeerConnection.localDescription
    });
  })
  .catch((reason) => {
    // An error occurred, so handle the failure to connect
  });
```

In this code, the offer is created, and once successful, the local end of the
{{domxref("RTCPeerConnection")}} is configured to match by passing the offer (which is
represented using an object conforming to [RTCSessionDescriptionInit](/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription#rtcsessiondescriptioninit)) into
{{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}. Once
that's done, the offer is sent to the remote system over the signaling channel; in this
case, by using a custom function called `sendToServer()`. The implementation
of the signaling server is independent from the WebRTC specification, so it doesn't
matter how the offer is sent as long as both the caller and potential receiver are using
the same one.

Use {{jsxref("Promise.catch()")}} to trap and handle errors.

See [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) for the complete example from which this snippet is derived; this
will help you to understand how the signaling code here works.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
