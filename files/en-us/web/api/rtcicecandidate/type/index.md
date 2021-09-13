---
title: RTCIceCandidate.type
slug: Web/API/RTCIceCandidate/type
tags:
  - API
  - Candidate
  - ICE
  - Media
  - RTCIceCandidate
  - Read-only
  - Reference
  - Property
  - SDP
  - Type
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIceCandidate.type
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`type`** specifies the type of candidate the object represents.

The `type` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `type` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line (the `cand-type` field), if it's formatted properly.

## Syntax

```js
var type = RTCIceCandidate.type;
```

### Value

A {{domxref("DOMString")}} whose value is one of those defined below. These candidate types are listed in order of priority; the higher in the list they are, the more efficient they are.

- `host`
  - : The candidate is a host candidate, whose IP address as specified in the {{domxref("RTCIceCandidate.address")}} property is in fact the true address of the remote peer.
- `srflx`
  - : The candidate is a server reflexive candidate; the `ip` indicates an intermediary address assigned by the {{Glossary("STUN")}} server to represent the candidate's peer anonymously.
- `prflx`
  - : The candidate is a peer reflexive candidate; the `ip` is an intermediary address assigned by the STUN server to represent the candidate's peer anonymously.
- `relay`
  - : The candidate is a relay candidate, obtained from a {{Glossary("TURN")}} server. The relay candidate's IP address is an address the TURN server uses to forward the media between the two peers.

If `type` is `null`, that information was missing from the
{{domxref("RTCIceCandidate.candidate", "candidate")}}'s a-line, which will cause
{{domxref("RTCPeerConnection.addIceCandidate()")}} to throw an
`OperationError` exception.

## Example

In this example, the candidate's {{domxref("RTCIceCandidate.type", "type")}} is used to
present a modified user interface for host candidates (those where the
{{domxref("RTCIceCandidate/address", "ip")}} refers directly to the remote peer, rather than
an intermediary).

```js
if (candidate.type == "host") {
  showHostControls();
} else {
  hideHostControls();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC connectivity](/en-US/docs/Web/API/WebRTC_API/Connectivity)
- {{domxref("RTCIceCandidate.tcpType")}}
