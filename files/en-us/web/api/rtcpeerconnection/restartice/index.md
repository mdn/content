---
title: "RTCPeerConnection: restartIce() method"
short-title: restartIce()
slug: Web/API/RTCPeerConnection/restartIce
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.restartIce
---

{{APIRef("WebRTC")}}

The **`restartIce()`** method of the {{domxref("RTCPeerConnection")}} interface allows a web application to request that {{Glossary("ICE")}} candidate gathering be redone on both ends of the connection.
This simplifies the process by allowing the same method to be used by either the caller or the receiver to trigger an ICE restart.

After `restartIce()` returns, the offer returned by the next call to {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} is automatically configured to trigger ICE restart on both the local peer (once the local peer has been set) and on the remote peer, once the offer is sent across your signaling mechanism and the remote peer has set its description as well.

`restartIce()` causes the
{{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event to be fired on the `RTCPeerConnection` to inform the application that it should perform negotiation using its signaling channel.

If negotiation fails to complete—either due to rollback or because incoming offers are in the process of being negotiated—the {{domxref("RTCPeerConnection")}} will remember that you requested ICE restart.
The next time the connection's {{domxref("RTCPeerConnection.signalingState", "signalingState")}} changes to `stable`, the connection will fire the {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event.
This process continues until an ICE restart has been successfully completed.

## Syntax

```js-nolint
restartIce()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Usage notes

After calling `restartIce()`, the next offer created using {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} will initiate ICE restart once sent to the remote peer over your signaling mechanism.
Restarting ICE essentially resets ICE so that it creates all new candidates using new credentials.
Existing media transmissions continue uninterrupted during this process.

For details about how ICE restart works, see [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) and {{RFC(5245, "ICE specification", "9.1.1.1")}}.

## Examples

This example creates a handler for the {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} event that handles a transition to the `failed` state by restarting ICE in order to try again.

```js
pc.addEventListener("iceconnectionstatechange", (event) => {
  if (pc.iceConnectionState === "failed") {
    /* possibly reconfigure the connection in some way here */
    /* then request ICE restart */
    pc.restartIce();
  }
});
```

With this code in place, a transition to the `failed` state during ICE negotiation will cause a {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event to be fired, in response to which your code should renegotiate as usual.
However, because you have called `restartIce()`, your call to {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} which occurs in the handler for `negotiationneeded` will trigger an ICE restart rather than just a regular renegotiation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
