---
title: RTCIceCandidate.relatedPort
slug: Web/API/RTCIceCandidate/relatedPort
tags:
  - API
  - Address
  - Candidate
  - ICE
  - IP
  - Media
  - Property
  - RTCIceCandidate
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - relatedPort
browser-compat: api.RTCIceCandidate.relatedPort
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`relatedPort`** property indicates the port number of reflexive or relay candidates.

If the candidate is a host candidate (that is, its {{domxref("RTCIceCandidate/address", "address")}} is in fact the real IP address of the remote peer), `relatedPort` is `null`.

The `relatedPort` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `relatedPort` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line, if it's formatted properly (the `rel-port` field).

The related address ({{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}}) and port are not used at all by {{Glossary("ICE")}} itself; they are provided for
analysis and diagnostic purposes only, and their inclusion may be blocked by security systems, so do not rely on them having non-`null` values.

## Syntax

```js
var relPort = RTCIceCandidate.relatedPort;
```

### Value

An unsigned 16-bit value containing the candidate's related port number, if any. For
both peer and server reflexive candidates, the related address and port describe the
base for that candidate. For relay candidates, the related address and port provide the
mapped address selected by the TURN server.

For host candidates, `relatedPort` is `null`, meaning the field is not included in the candidate's a-line.

## Usage notes

The related address and port are not used by ICE itself, and are only present for
diagnostic and Quality-of-Service purposes. They may in fact be omitted for security
reasons, but if present can be a useful tool during debugging. See the {{anch("Example",
  "example")}}, which shows a bit of this.

Here's an {{Glossary("SDP")}} attribute line (a-line) describing an ICE candidate
discovered by the STUN server:

    a=candidate:4234997325 1 udp 2043278322 192.168.0.56 6502 typ srflx raddr 192.168.2.77 rport 32768 generation 0

The remote port, `relatedPort`, is the number immediately following the `"rport"` label on the a-line, or 32768.

## Example

In this example, the candidate's {{domxref("RTCIceCandidate.type", "type")}} is
checked, and then debugging output is presented, based on the candidate type, including
the candidate's type, address (`ip` and {{domxref("RTCIceCandidate.port",
  "port")}}), and related address ({{domxref("RTCIceCandidate.relatedAddress",
  "relatedAddress")}} and `relatedPort`).

```js
var ip = candidate.ip;
var port = candidate.port;
var relIP = candidate.relatedAddress;
var relPort = candidate.relatedPort;

if (relIP && relPort) {
  console.log("Candidate type '" + type + "' -- contact address: " + ip + " " + port + ", related address: " + relIP + " " + relPort);
} else {
  console.log("Host candidate address is " + ip + " " + port);
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
- {{domxref("RTCIceCandidate.relatedAddress")}}
- {{domxref("RTCIceCandidate.address")}} and {{domxref("RTCIceCandidate.port")}}
