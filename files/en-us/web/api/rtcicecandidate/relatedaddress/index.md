---
title: "RTCIceCandidate: relatedAddress property"
short-title: relatedAddress
slug: Web/API/RTCIceCandidate/relatedAddress
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.relatedAddress
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`relatedAddress`** property is a string indicating the **related address** of a relay or reflexive candidate.

If the candidate is a host candidate (that is, its {{domxref("RTCIceCandidate/address", "address")}} is in fact the real IP address of the remote peer), `relatedAddress` is `null`.

The `relatedAddress` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `relatedAddress` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line if it's formatted properly(the `rel-address` field).

The related address and port ({{domxref("RTCIceCandidate.relatedPort", "relatedPort")}}) are not used at all by {{Glossary("ICE")}} itself; they are provided for analysis and diagnostic purposes only, and their inclusion may be blocked by security systems, so do not rely on them having non-`null` values.

## Value

A string which contains the candidate's related address.
For both peer and server reflexive candidates, the related address (and related port) are the base for that server or peer reflexive candidate.
For relay candidates, the related address and port are set to the mapped address selected by the TURN server.

For host candidates, `relatedAddress` is `null`, meaning the field is not included in the candidate's a-line.

## Usage notes

The related address is included in ICE candidates despite not being used by ICE itself.
`relatedAddress` can be used for diagnostic purposes; by observing the relationships between the various types of candidates and their addresses and related addresses.
`relatedAddress` can also be used by Quality-of-Service (QoS) mechanisms.

Here's an [SDP](/en-US/docs/Web/API/WebRTC_API/Protocols#sdp) attribute line (a-line) describing an ICE candidate discovered by the STUN server:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 6502 typ srflx raddr 198.51.100.45 rport 32768 generation 0
```

The remote address, `relatedAddress`, is the dotted quad (for IPv4) or colon-delineated 64-bit address (for IPv6) immediately following the text `"raddr"`, or `"198.51.100.45"`.

## Examples

In this example, the candidate's {{domxref("RTCIceCandidate.type", "type")}} is checked, and then debugging output is presented, based on the candidate type, including the candidate's {{domxref("RTCIceCandidate/address", "ip")}} and `relatedAddress`.

```js
switch (candidate.type) {
  case "host":
    console.log(`Host candidate's IP address is ${candidate.address}`);
    break;
  case "srflx":
    console.log(
      `Server reflexive candidate's base address is ${candidate.relatedAddress}; reachable at ${candidate.address}`,
    );
    break;
  case "prflx":
    console.log(
      `Peer reflexive candidate's base address is ${candidate.relatedAddress}; reachable at ${candidate.address}`,
    );
    break;
  case "relay":
    console.log(
      `Relay candidate's address assigned by the TURN server is ${candidate.relatedAddress}; reachable at ${candidate.address}`,
    );
    break;
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
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCIceCandidate.relatedPort")}}
- {{domxref("RTCIceCandidate.address")}} and {{domxref("RTCIceCandidate.port")}}
