---
title: "RTCIceCandidate: port property"
short-title: port
slug: Web/API/RTCIceCandidate/port
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.port
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`port`** property contains the port
number on the device at the address given by {{domxref("RTCIceCandidate.address")}} at which the candidate's peer can be reached.

The `port` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `port` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line, if it's formatted properly.

## Value

A 16-bit number indicating the port number on the device at the address indicated by {{domxref("RTCIceCandidate/address", "address")}} at which the candidate's peer can be reached.

`port` is initialized to `null` if it is not specified in the
`candidate`, or if the `candidate` string can't be parsed properly.

> **Note:** If `port` is `null`, passing the candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
> will fail, throwing an `OperationError` exception.
> This applies only if the candidate implements `port`.

## Usage notes

Consider this {{Glossary("SDP")}} attribute line (a-line) which describes an ICE
candidate:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

The port number is found in the sixth field, which is `"44323"`. In this case, the value of `port` will be 44323.

## Examples

This code snippet fetches the IP address and port number of the candidate, storing them
into an object for future use.

```js
const candidateLoc = {
  address: candidate.ip,
  port: candidate.port,
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
