---
title: "RTCIceCandidate: address property"
short-title: address
slug: Web/API/RTCIceCandidate/address
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.address
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceCandidate")}}** interface's read-only **`address`** property is a string providing the IP address of the device which is the source of the candidate.
The `address` is `null` by default if not otherwise specified.

The `address` field's value is set from the `candidateInfo` options object passed to the {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} constructor.
You can't specify the value of `address` directly in the options object, but its value is automatically extracted from the object's `candidate` a-line, if it's formatted properly.

## Value

A string providing the IP address from which the candidate comes.

> **Note:** If `port` is `null` — and
> `port` is supported by the {{Glossary("user agent")}} — passing the
> candidate to {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
> will fail, throwing an `OperationError` exception.

## Security notes

It's important to note here that although WebRTC does not require the two peers on an
{{domxref("RTCPeerConnection")}} to know one another's true IP addresses, the
`address` property on `RTCIceCandidate` _can_ expose more
information about the source of the remote peer than the user expects. The IP address
can be used to derive information about the remote device's location, network topology,
and so forth. It can also be used for [fingerprinting](/en-US/docs/Glossary/Fingerprinting) purposes.

The candidate IP addresses are _always_ exposed to the application through
`address`, and unsavory applications can in turn potentially reveal the
address to the user. This can occur without the remote peer's consent.

Applications being built with user privacy and security in mind can choose to limit the
permitted candidates to relay candidates only. Doing so prevents the remote user's
address from being exposed, but reduces the pool of available candidates to choose from.
To do this, configure the ICE agent's ICE transport policy with an object confirming to the `configuration` property described in {{domxref("RTCPeerConnection.setConfiguration")}}, like this:

```js
const rtcConfig = {
  iceServers: [
    {
      urls: "turn:myturn.server.ip",
      username: "username",
      credential: "password",
    },
  ],
  iceTransportPolicy: "relay",
};
```

By setting `iceTransportPolicy` to `"relay"`,
any host candidates (candidates where the IP address is the peer's own IP address) are
left out of the pool of candidates, as are any other candidates which aren't relay candidates.

## Usage notes

Consider this {{Glossary("SDP")}} attribute line (a-line) which describes an ICE candidate:

```
a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host
```

The fifth field, `"192.168.0.56"` is the IP address in this candidate's a-line string.

## Examples

This code snippet uses the value of `address` to implement an IP address based ban feature.

```js
if (ipBanList.includes(candidate.address)) {
  rejectCandidate(candidate);
} else {
  acceptCandidate(candidate);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
