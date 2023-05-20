---
title: "RTCPeerConnection: iceGatheringState property"
short-title: iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.iceGatheringState
---

{{APIRef("WebRTC")}}

The read-only property **`RTCPeerConnection.iceGatheringState`** returns a string
that describes the connection's ICE gathering state.
This lets you detect, for example, when collection of ICE candidates has finished.

You can detect when the value of this property changes by watching for an event of type
{{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}.

## Value

The possible values are:

- `new`
  - : The peer connection was just created and hasn't done any networking yet.
- `gathering`
  - : The ICE agent is in the process of gathering candidates for the connection.
- `complete`
  - : The ICE agent has finished gathering candidates.
    If something happens that requires collecting new candidates,
    such as a new interface being added or the addition of a new ICE server,
    the state will revert to `gathering` to gather those candidates.

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
