---
title: RTCPeerConnection.iceConnectionState
slug: Web/API/RTCPeerConnection/iceConnectionState
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Connection
  - ICE
  - Media
  - Property
  - RTCPeerConnection
  - Read-only
  - Reference
  - Video
  - WebRTC
  - WebRTC API
  - iceConnectionState
  - state
browser-compat: api.RTCPeerConnection.iceConnectionState
---

{{APIRef("WebRTC")}}

The read-only property **`RTCPeerConnection.iceConnectionState`** returns
a string which state of the {{Glossary("ICE")}} agent associated with the {{domxref("RTCPeerConnection")}}:
`new`, `checking`, `connected`, `completed`,
`failed`, `disconnected`, and `closed`.

It describes the current state of the ICE agent
and its connection to the ICE server;
that is, the {{Glossary("STUN")}} or {{Glossary("TURN")}} server.

You can detect when this value has changed by watching for the
{{DOMxRef("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} event.

## Value

The current state of the ICE agent and its connection. The value is one of the following strings:

- `new`
  - : The ICE agent is gathering addresses
    or is waiting to be given remote candidates
    through calls to {{domxref("RTCPeerConnection.addIceCandidate()")}} (or both).
- `checking`
  - : The ICE agent has been given one or more remote candidates
    and is checking pairs of local and remote candidates against one another
    to try to find a compatible match,
    but has not yet found a pair which will allow the peer connection to be made.
    It is possible that gathering of candidates is also still underway.
- `connected`
  - : A usable pairing of local and remote candidates has been found for all components of the connection,
    and the connection has been established.
    It is possible that gathering is still underway,
    and it is also possible that the ICE agent is still checking candidates
    against one another
    looking for a better connection to use.
- `completed`
  - : The ICE agent has finished gathering candidates,
    has checked all pairs against one another,
    and has found a connection for all components.
- `failed`
  - : The ICE candidate has checked all candidates pairs against one another
    and has failed to find compatible matches for all components of the connection.
    It is, however, possible that the ICE agent did find compatible connections for some components.
- `disconnected`
  - : Checks to ensure
    that components are still connected failed
    for at least one component of the {{domxref("RTCPeerConnection")}}.
    This is a less stringent test than `failed`
    and may trigger intermittently
    and resolve just as spontaneously on less reliable networks,
    or during temporary disconnections.
    When the problem resolves,
    the connection may return to the `connected` state.
- `closed`
  - : The ICE agent for this {{domxref("RTCPeerConnection")}} has shut down
    and is no longer handling requests.

## Examples

```js
const pc = new RTCPeerConnection();
const state = pc.iceConnectionState;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
- {{domxref("RTCPeerConnection")}}
