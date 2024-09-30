---
title: "RTCPeerConnection: setLocalDescription() method"
short-title: setLocalDescription()
slug: Web/API/RTCPeerConnection/setLocalDescription
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.setLocalDescription
---

{{APIRef("WebRTC")}}

The **`setLocalDescription()`** method of the {{domxref("RTCPeerConnection")}} interface changes the local description associated with the connection.
This description specifies the properties of the local end of the connection, including the media format.
The method takes a single parameter—the session description—and it returns a {{jsxref("Promise")}} which is fulfilled once the description has been changed, asynchronously.

If `setLocalDescription()` is called while a connection is already in place, it means renegotiation is underway (possibly to adapt to changing network conditions).
Because descriptions will be exchanged until the two peers agree on a configuration, the description submitted by calling `setLocalDescription()` does not immediately take effect.
Instead, the current connection configuration remains in place until negotiation is complete. Only then does the agreed-upon configuration take effect.

## Syntax

```js-nolint
setLocalDescription()
setLocalDescription(sessionDescription)

setLocalDescription(sessionDescription, successCallback, errorCallback) // deprecated
```

### Parameters

- `sessionDescription` {{optional_inline}}

  - : An object which specifies the configuration to be applied to the local end of the connection. It should contain the following properties:

    - `type` {{optional_inline}}
      - : A string indicating the type of the session description. If you don't explicitly provide a session description, the WebRTC runtime will try to handle it correctly. If the signaling state is one of `stable`, `have-local-offer`, or `have-remote-pranswer`, the WebRTC runtime automatically creates a new offer and sets that as the new local description. Otherwise, `setLocalDescription()` creates an answer, which becomes the new local description.
    - `sdp` {{optional_inline}}
      - : A string containing the SDP describing the session. If sdp is not provided, it defaults to an empty string. If `type` is `"rollback"`, `sdp` must be null or an empty string.

    If the description is omitted, the WebRTC runtime tries to automatically do the right thing.

    You can also pass an actual {{domxref("RTCSessionDescription")}} instance, but there's no difference. For this reason, the `RTCSessionDescription` constructor is deprecated.

In older code and documentation, you may see a callback-based version of this function used.
This has been deprecated and its use is **strongly** discouraged, as it will be removed in the future.
You should update any existing code to use the {{jsxref("Promise")}}-based version of `setLocalDescription()` instead.
The parameters for the older form of `setLocalDescription()` are described below, to aid in updating existing code.

- `successCallback` {{deprecated_inline}}
  - : A JavaScript {{jsxref("Function")}} which accepts no input parameters to be called once the description has been successfully set.
    At that time, the offer can be sent to a remote peer via the signaling server.
- `errorCallback` {{deprecated_inline}}
  - : A function matching the signature `RTCPeerConnectionErrorCallback` which gets called if the description can't be set.
    It is passed a single {{domxref("DOMException")}} object explaining why the request failed.

This deprecated form of the method returns instantaneously without waiting for the actual setting to be done: in case of success, the `successCallback` will be called; in case of failure, the `errorCallback` will be called.

### Return value

A {{jsxref("Promise")}} which is fulfilled once the value of {{domxref("RTCPeerConnection.localDescription")}} is successfully changed or rejected if the change cannot be applied (for example, if the specified description is incompatible with one or both of the peers on the connection).
The promise's fulfillment handler receives no input parameters.

> [!NOTE]
> The process of changing descriptions actually involves intermediary steps handled by the WebRTC layer to ensure that an active connection can be changed without losing the connection if the change does not succeed.
> See [Pending and current descriptions](/en-US/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) in the WebRTC Connectivity page for more details on this process.

### Deprecated exceptions

When using the deprecated callback-based version of `setLocalDescription()`, the following exceptions may occur:

- `InvalidStateError` {{domxref("DOMException")}} {{deprecated_inline}}
  - : Thrown if the connection's {{domxref("RTCPeerConnection.signalingState", "signalingState")}} is `"closed"`, indicating that the connection is not currently open, so negotiation cannot take place.
- `InvalidSessionDescriptionError` {{domxref("DOMException")}} {{deprecated_inline}}
  - : Thrown if the `sessionDescription` parameter is invalid.

## Examples

### Implicit descriptions

One of the advantages of the parameter-free form of `setLocalDescription()` is that it lets you simplify your negotiation code substantially.
This is all your {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event handler needs to look like, for the most part.
Just add the signaling server code, which here is represented by the call to `signalRemotePeer()`.

```js
pc.addEventListener("negotiationneeded", async (event) => {
  await pc.setLocalDescription();
  signalRemotePeer({ description: pc.localDescription });
});
```

Other than error handling, that's about it!

### Providing your own offer or answer

The example below shows the implementation of a handler for the {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} event that explicitly creates an offer, rather than letting `setLocalDescription()` do it.

```js
async function handleNegotiationNeededEvent() {
  try {
    const offer = await pc.createOffer();
    pc.setLocalDescription(offer);
    signalRemotePeer({ description: pc.localDescription });
  } catch (err) {
    window.reportError(err);
  }
}
```

This begins by creating an offer by calling {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}}; when that succeeds, we call `setLocalDescription()`.
We can then send the newly-created offer along to the other peer using the signaling server, which here is done by calling a function
called `signalRemotePeer()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCSessionDescription")}}
