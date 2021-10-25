---
title: RTCPeerConnection.setRemoteDescription()
slug: Web/API/RTCPeerConnection/setRemoteDescription
tags:
  - API
  - ICE
  - Method
  - Negotiation
  - Offer
  - RTCPeerConnection
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - answer
  - setRemoteDescription
browser-compat: api.RTCPeerConnection.setRemoteDescription
---
{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}}
method **`setRemoteDescription()`** sets the specified
session description as the remote peer's current offer or answer. The description
specifies the properties of the remote end of the connection, including the media
format. The method takes a single parameter—the session description—and it
returns a {{jsxref("Promise")}} which is fulfilled once the description has been
changed, asynchronously.

This is typically called after receiving an offer or answer from another peer over the
signaling server. Keep in mind that if `setRemoteDescription()` is called
while a connection is already in place, it means renegotiation is underway (possibly
to adapt to changing network conditions).

Because descriptions will be exchanged until the two peers agree on a configuration,
the description submitted by calling `setRemoteDescription()` does not
immediately take effect. Instead, the current connection configuration remains in
place until negotiation is complete. Only then does the agreed-upon configuration take
effect.

## Syntax

```js
aPromise = rtcPeerConnection.setRemoteDescription(sessionDescription);
```

### Parameters

- `sessionDescription`
  - : An {{domxref("RTCSessionDescriptionInit")}} or
    {{domxref("RTCSessionDescription")}} which specifies the remote peer's current
    offer or answer. This value is an offer or answer received from the remote
    peer through your implementation of

The `sessionDescription` parameter is technically of type
`RTCSessionDescriptionInit`, but because
{{domxref("RTCSessionDescription")}} serializes to be indistinguishable from
`RTCSessionDescriptionInit`, you can also pass in an
`RTCSessionDescription`. This lets you simplify code such as the following:

```js
myPeerConnection.setRemoteDescription(new RTCSessionDescription(description))
.then(function () {
  return createMyStream();
})
```

to be:

```js
myPeerConnection.setRemoteDescription(description)
.then(function () {
  return createMyStream();
})
```

Using
[`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await)
syntax, you can further simplify this to:

```js
await myPeerConnection.setRemoteDescription(description);
createMyStream();
```

Since it's unnecessary, the {{domxref("RTCSessionDescription.RTCSessionDescription",
	"RTCSessionDescription()")}} constructor is deprecated.

### Return value

A {{jsxref("Promise")}} which is fulfilled once the value of the connection's
{{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} is
successfully changed or rejected if the change cannot be applied (for example, if the
specified description is incompatible with one or both of the peers on the
connection). The promise fulfillment handler receives no input parameters.

> **Note:** The process of changing descriptions actually involves
> intermediary steps handled by the WebRTC layer to ensure that an active connection
> can be changed without losing the connection if the change does not succeed. See
> {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Pending and
		current descriptions")}} for more details on this process.

### Exceptions

The following exceptions are reported to the rejection handler for the promise returned
by `setRemoteDescription()`:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Returned if the content of the description is invalid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the {{domxref("RTCPeerConnection")}} is closed, or it's in a state that is not
    compatible with the specified description's
    {{domxref("RTCSessionDescription.type", "type")}}. For example, this exception is thrown if the
    `type` is `rollback` and the signaling state is one of
    `stable`, `have-local-pranswer`, or
    `have-remote-pranswer` because you cannot
    roll back a connection that's either fully established or is in the final stage of
    becoming connected.
- `OperationError` {{domxref("DOMException")}}
  - : Returned if an error does not match the ones specified here. This includes identity validation errors.
- `RTCError` {{domxref("DOMException")}}
  - : Returned with the {{domxref("RTCError.errorDetail",
		"errorDetail")}} set to `sdp-syntax-error` if the
    {{Glossary("SDP")}} specified by {{domxref("RTCSessionDescription.sdp")}} is not valid. The
    error object's {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} property
    indicates the line number within the SDP on which the syntax error was detected.
- `TypeError` {{domxref("DOMException")}}
  - : Returned if the specified `RTCSessionDescriptionInit` or
    `RTCSessionDescription` object is missing the
    {{domxref("RTCSessionDescription.type", "type")}} property, or no description
    parameter was provided at all.

## Usage notes

When you call `setRemoteDescription()`, the ICE agent checks to make sure
the {{domxref("RTCPeerConnection")}} is in either the `stable` or
`have-remote-offer` {{domxref("RTCPeerConnection.signalingState",
	"signalingState")}}. These states indicate that either an existing connection is being
renegotiated or that an offer previously specified by an earlier call to
`setRemoteDescription()` is to be replaced with the new offer. In either of
those two cases, we're at the beginning of the negotiation process, and the offer is
set as the remote description.

On the other hand, if we're in the middle of an ongoing negotiation and an offer is
passed into `setRemoteDescription()`, the ICE agent automatically begins an
ICE rollback in order to return the connection to a stable signaling state, then, once
the rollback is completed, sets the remote description to the specified offer. This
begins a new negotiation session, with the newly-established offer as the starting
point.

Upon starting the new negotiation with the newly-established offer, the local peer is
now the callee, even if it was previously the caller. This happens instead of throwing
an exception, thereby reducing the number of potential errors which might occur, and
simplifies the processing you need to do when you receive an offer, by eliminating the
need to handle the offer/answer process differently depending on whether the local
peer is the caller or callee.

> **Note:** Earlier implementations of WebRTC would throw an exception
> if an offer was set outside a `stable` or
> `have-remote-offer` state.

## Deprecated syntax

In older code and documentation, you may see a callback-based version of this function
used. This has been deprecated and its use is _strongly_ discouraged. You
should update any existing code to use the {{jsxref("Promise")}}-based version of
`setRemoteDescription()` instead. The parameters for the older form of
`setRemoteDescription()` are described below, to aid in updating existing
code.

```js
pc.setRemoteDescription(sessionDescription, successCallback, errorCallback);
```

### Parameters

- `successCallback` {{deprecated_inline}}
  - : A JavaScript {{jsxref("Function")}} which accepts no input parameters to be called
    once the description has been successfully set. At that time, the offer can be
    sent to a remote peer via the signaling server.
- `errorCallback` {{deprecated_inline}}
  - : A function matching the signautre `RTCPeerConnectionErrorCallback`
    which gets called if the description can't be set. It is passed a single
    {{domxref("DOMException")}} object explaining why the request failed.

This deprecated form of the method returns instantaneously without waiting for the
actual setting to be done: in case of success, the `successCallback` will
be called; in case of failure, the `errorCallback` will be called.

### Exceptions

When using the deprecated callback-based version of
`setRemoteDescription()`, the following exceptions may occur:

- `InvalidStateError` {{deprecated_inline}}
  - : The connection's {{domxref("RTCPeerConnection.signalingState", "signalingState")}}
    is `"closed"`, indicating that the connection is not currently open, so
    negotiation cannot take place.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : The {{domxref("RTCSessionDescription")}} specified by the
    `sessionDescription` parameter is invalid.

## Example

Here we see a function which handles an offer received from the remote peer. This code
is derived from the example and tutorial in the article [Signaling and
video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling); take a look at that for more details and a more in-depth
explanation of what's going on.

```js
function handleOffer(msg) {
  createMyPeerConnection();

  myPeerConnection.setRemoteDescription(msg.description).then(function () {
    return navigator.mediaDevices.getUserMedia(mediaConstraints);
  })
  .then(function(stream) {
    document.getElementById("local_video").srcObject = stream;
    return myPeerConnection.addStream(stream);
  })
  .then(function() {
    return myPeerConnection.createAnswer();
  })
  .then(function(answer) {
    return myPeerConnection.setLocalDescription(answer);
  })
  .then(function() {
    // Send the answer to the remote peer using the signaling server
  })
  .catch(handleGetUserMediaError);
}
```

After creating our {{domxref("RTCPeerConnection")}} and saving it as
`myPeerConnection`, we pass the description included in the received offer
message, `msg`, directly into `setRemoteDescription()` to tell
the user agent's WebRTC layer what configuration the caller has proposed using. When
our promise fulfillment handler is called, indicating that this has been done, we
create a stream, add it to the connection, then create an SDP answer and call
{{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} to set
that as the configuration at our end of the call before forwarding that answer to the
caller.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCPeerConnection.remoteDescription")}},
  {{domxref("RTCPeerConnection.pendingRemoteDescription")}},
  {{domxref("RTCPeerConnection.currentRemoteDescription")}}
