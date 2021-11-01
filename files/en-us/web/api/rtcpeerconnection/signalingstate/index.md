---
title: RTCPeerConnection.signalingState
slug: Web/API/RTCPeerConnection/signalingState
tags:
  - API
  - ICE
  - Media
  - Negotiation
  - Property
  - RTCPeerConnection
  - Read-only
  - Reference
  - Signaling
  - WebRTC
  - WebRTC API
  - signalingState
  - state
browser-compat: api.RTCPeerConnection.signalingState
---
{{APIRef("WebRTC")}}

The read-only **`signalingState`** property on the
{{domxref("RTCPeerConnection")}} interface returns a string value
describing the state of the signaling process
on the local end of the connection
while connecting or reconnecting to another peer.
See {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Session_lifetime",
  "Signaling")}} for more details about the signaling process.

Because the signaling process is a state machine, being able to verify that your code
is in the expected state when messages arrive can help avoid unexpected and avoidable
failures. For example, if you receive an answer while the `signalingState`
isn't `"have-local-offer"`, you know that something is wrong, since you
should only receive answers after creating an offer but before an answer has been
received and passed into {{domxref("RTCPeerConnection.setLocalDescription()")}}. Your
code will be more reliable if you watch for mismatched states like this and handle them
gracefully.

This value may also be useful during debugging, for example.

In addition, when the value of this property changes, a
{{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}} event is sent to the {{domxref("RTCPeerConnection")}}
instance.

## Syntax

```js
 var state = RTCPeerConnection.signalingState;
```

### Value

The allowed string values are:

- `stable`
  - : There is no ongoing exchange of offer and answer underway.
    This may mean that the {{domxref("RTCPeerConnection")}} object is new,
    in which case
    both the {{domxref("RTCPeerConnection.localDescription", "localDescription")}}
    and {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}}
    are `null`;
    it may also mean that negotiation is complete
    and a connection has been established.
- `have-local-offer`
  - : The local peer has called {{domxref("RTCPeerConnection.setLocalDescription()")}},
    passing in SDP representing an offer
    (usually created by calling {{domxref("RTCPeerConnection.createOffer()")}}),
    and the offer has been applied successfully.
- `have-remote-offer`
  - : The remote peer has created an offer
    and used the signaling server
    to deliver it to the local peer,
    which has set the offer
    as the remote description
    by calling {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
- `have-local-pranswer`
  - : The offer sent by the remote peer has been applied
    and an answer has been created
    (usually by calling {{domxref("RTCPeerConnection.createAnswer()")}})
    and applied by calling {{domxref("RTCPeerConnection.setLocalDescription()")}}.
    This provisional answer describes the supported media formats and so forth,
    but may not have a complete set of ICE candidates included.
    Further candidates will be delivered separately later.
- `have-remote-pranswer`
  - : A provisional answer has been received
    and successfully applied
    in response to an offer previously sent
    and established by calling `setLocalDescription()`.
- `closed`
  - : The {{domxref("RTCPeerConnection")}} has been closed.

## Example

```js
var pc = new RTCPeerConnection(configuration);
var state = pc.signalingState;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Lifetime of a WebRTC
  session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
