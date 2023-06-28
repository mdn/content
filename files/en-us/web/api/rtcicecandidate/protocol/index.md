---
title: "RTCIceCandidate: protocol property"
short-title: protocol
slug: Web/API/RTCIceCandidate/protocol
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.protocol
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`protocol`** property is a string
which indicates whether the candidate uses {{Glossary("UDP")}} or {{Glossary("TCP")}} as its transport protocol.

The `protocol` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `protocol` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line, if it's formatted properly.

`protocol` is `null` by default if not specified properly in the SDP, but this is an error condition and will result in a thrown exception when you call {{domxref("RTCPeerConnection.addIceCandidate()")}}.

## Value

A string that indicates what network protocol the candidate uses:

- `tcp`
  - : The candidate, if selected, would use {{Glossary("TCP")}} as the transport protocol for its data. The {{domxref("RTCIceCandidate.tcpType", "tcpType")}} property provides additional information about the kind of TCP candidate represented by the object.
- `udp`
  - : The candidate will use the {{Glossary("UDP")}} transport protocol for its data. This is the preferred protocol for media interactions because of its better performance profile.

> **Note:** If `protocol` is `null` — and `protocol` is supported by the {{Glossary("user agent")}} — passing the
> candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} will fail, throwing an `OperationError` exception.

## Usage notes

Here's an example candidate a-line from an ICE transaction:

```
a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host
```

The third field, `"udp"`, is the protocol type, indicating that the
candidate would use the UDP transport protocol.

## Examples

This code snippet examines the value of `protocol` to decide if it should
look at the value of {{domxref("RTCIceCandidate.tcpType", "tcpType")}} to see if it's a
**simultaneous-open** (**S-O**) candidate.

```js
if (candidate.protocol === "tcp") {
  if (candidate.tcpType === "so") {
    adjustForSimultaneousOpen(candidate);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
