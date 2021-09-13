---
title: RTCOfferOptions.iceRestart
slug: Web/API/RTCOfferOptions/iceRestart
tags:
  - Configuration
  - ICE
  - ICE Restart
  - Offer
  - Option
  - Property
  - RTCOfferOptions
  - Reference
  - SDP
  - Setting
  - WebRTC
  - WebRTC API
  - iceRestart
browser-compat: api.RTCOfferOptions.iceRestart
---
{{APIRef("WebRTC")}}

The **`iceRestart`** property of the
**{{domxref("RTCOfferOptions")}}** dictionary is a Boolean value which,
when `true`, tells the {{domxref("RTCPeerConnection")}} to start ICE
renegotiation.

> **Note:** Rather than manually creating and submitting an offer
> with `iceRestart` set to `true`, you should consider calling
> the {{domxref("RTCPeerConnection")}} method {{domxref("RTCPeerConnection.restartIce",
    "restartIce()")}} instead.

## Syntax

```js
var options = {
  iceRestart: trueOrFalse
};
```

### Value

A Boolean value indicating whether or not the `RTCPeerConnection` should
generate new values for the connection's ice-ufrag and ice-pwd values, which will
trigger ICE renegotiation on the next message sent to the remote peer.

## Usage notes

When the {{domxref("RTCPeerConnection")}} object's ICE connection state changes to
`failed`, you should try to trigger an [ICE restart](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ICE_restart).
You should ideally do this by calling
the {{domxref("RTCPeerConnection")}}'s {{domxref("RTCPeerConnection.restartIce",
  "restartIce()")}} method, if it's available.

Fundamentally, this renegotiation is triggered by generating and using new values for
the ICE username fragment ("ufrag")}}

## Example

This example shows a handler for the {{event("iceconnectionstatechange")}} event. It
watches for the ICE connection state to transition to `"failed"`, which
indicates that an ICE restart should be tried in order to attempt to bring the
connection back up.

```js
pc.oniceconnectionstatechange = function(evt) {
  if (pc.iceConnectionState === "failed") {
    if (pc.restartIce) {
      pc.restartIce();
    } else {
      pc.createOffer({ iceRestart: true })
      .then(pc.setLocalDescription)
      .then(sendOfferToServer);
    }
  }
}
```

If the state changes to `failed`, this handler starts by looking to see if
the {{domxref("RTCPeerConnection")}} includes
the {{domxref("RTCPeerConnection.restartIce", "restartIce()")}} method; if it does, we
call that to request an ICE restart. Otherwise, we call back to the older technique: we
manually create a new offer with `iceRestart` set to `true`, then
that offer is set as the new local description for the connection. After that, the offer
is sent to the server by calling a custom function `sendOfferToServer()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
