---
title: RTCIceCandidate.candidate
slug: Web/API/RTCIceCandidate/candidate
page-type: web-api-instance-property
tags:
  - API
  - Candidate
  - Candidates
  - ICE
  - Media
  - Property
  - RTCIceCandidate
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - a-line
browser-compat: api.RTCIceCandidate.candidate
---
{{APIRef("WebRTC")}}

The read-only property **`candidate`** on the {{domxref("RTCIceCandidate")}} interface returns a string describing the candidate in detail.
Most of the other properties of `RTCIceCandidate` are actually extracted from this string.

This property can be configured using the `candidate` property of the object passed into the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate() constructor")}} or {{domxref("RTCPeerConnection.addIceCandidate()")}}.

## Value

A string describing the properties of the candidate, taken directly from the {{Glossary("SDP")}} attribute `"candidate"`.
The candidate string specifies the network connectivity information for the candidate.
If the `candidate` is an empty string (`""`), the end of the candidate list has been reached; this candidate is known as the "end-of-candidates" marker.

The syntax of the candidate string is described in {{RFC(5245, "", 15.1)}}. For an a-line (attribute line) that looks like this:

```
a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host
```

the corresponding `candidate` string's value will be: `"candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host"`.

The {{Glossary("user agent")}} always prefers candidates with the highest
{{domxref("RTCIceCandidate.priority", "priority")}}, all else being equal. In the
example above, the priority is `2043278322`. The attributes are all separated
by a single space character, and are in a specific order. The complete list of
attributes for this example candidate is:

- {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
- {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (the number 1 is encoded to this string; 2 becomes `"rtcp"`)
- {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
- {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
- {{domxref("RTCIceCandidate/address", "ip")}} = `"192.168.0.56"`
- {{domxref("RTCIceCandidate.port", "port")}} = 44323
- {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

## Examples

In this example, we see a function which receives as input an SDP string containing an
ICE candidate received from the remote peer during the signaling process.

```js
function handleNewIceCandidate(candidateSDP) {
  const candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}
```

The `handleNewIceCandidate()` function shown here passes the received
candidate's SDP text into {{domxref("RTCIceCandidate.RTCIceCandidate",
  "RTCIceCandidate()")}} to receive an {{domxref("RTCIceCandidate")}} object in return,
which represents the candidate.

The new candidate is then passed into {{domxref("RTCPeerConnection.addIceCandidate()")}} to add the candidate to the list of
candidates for WebRTC to consider using for the connection being established.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
