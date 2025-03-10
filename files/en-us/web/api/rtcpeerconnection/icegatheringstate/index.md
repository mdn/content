---
title: "RTCPeerConnection: iceGatheringState property"
short-title: iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.iceGatheringState
---

{{APIRef("WebRTC")}}

The **`iceGatheringState`** read-only property of the {{domxref("RTCPeerConnection")}} interface returns a string that describes the overall ICE gathering state for this connection.
This lets you detect, for example, when collection of ICE candidates has finished.

You can detect when the value of this property changes by watching for an event of type {{domxref("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}.

Note that **`iceGatheringState`** represents the overall gathering state of the connection, including every {{domxref("RTCIceTransport")}} used by every {{domxref("RTCRtpSender")}} and every {{domxref("RTCRtpReceiver")}} on the entire connection.
This contrasts with {{domxref("RTCIceTransport.gatheringState")}}, which represents the gathering state for a single transport.

## Value

The possible values are:

- `new`
  - : The peer connection was just created and hasn't done any networking yet.
- `gathering`
  - : The ICE agent is in the process of gathering candidates for the connection.
- `complete`
  - : The ICE agent has finished gathering candidates.
    If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to `gathering` to gather those candidates.

## Example

```js
const pc = new RTCPeerConnection();
const state = pc.iceGatheringState;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
