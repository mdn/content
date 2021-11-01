---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
tags:
  - API
  - Candidate
  - Dictionary
  - ICE
  - Ice Candidate
  - RTCIceCandidate
  - RTCIceCandidateStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
browser-compat: api.RTCIceCandidateStats
---
{{APIRef("WebRTC")}}

The WebRTC API's **`RTCIceCandidateStats`** dictionary provides statistics related to an {{domxref("RTCIceCandidate")}}.

## Properties

`RTCIceCandidateStats` is based upon the {{domxref("RTCStats")}} dictionary, so it includes those properties in addition to the ones below.

- {{domxref("RTCIceCandidateStats.address", "address")}} {{optional_inline}}
  - : A string containing the address of the candidate. This value may be an IPv4 address, an IPv6 address, or a fully-qualified domain name. This property was previously named `ip` and only accepted IP addresses.
- {{domxref("RTCIceCandidateStats.candidateType", "candidateType")}} {{optional_inline}}
  - : A string matching one of the values in [`RTCIceCandidate.type`](/en-US/docs/Web/API/RTCIceCandidate/type#Values), indicating what kind of candidate the object provides statistics for.
- {{domxref("RTCIceCandidateStats.deleted", "deleted")}} {{optional_inline}}
  - : A Boolean value indicating whether or not the candidate has been released or deleted; the default value is `false`. For local candidates, it's value is `true` if the candidate has been deleted or released. For host candidates, `true` means that any network resources (usually a network socket) associated with the candidate have already been released. For {{Glossary("TURN")}} candidates, the TURN allocation is no longer active for deleted candidates. This property is not present for remote candidates.
- {{domxref("RTCIceCandidateStats.networkType", "networkType")}} {{optional_inline}}
  - : A string from the {{domxref("RTCNetworkType")}} enumerated type which indicates the type of interface used for a local candidate. This property is only present for local candidates.
- {{domxref("RTCIceCandidateStats.port", "port")}} {{optional_inline}}
  - : The network port number used by the candidate.
- {{domxref("RTCIceCandidateStats.priority", "priority")}} {{optional_inline}}
  - : The candidate's priority, corresponding to {{domxref("RTCIceCandidate.priority")}}.
- {{domxref("RTCIceCandidateStats.protocol", "protocol")}} {{optional_inline}}
  - : A string specifying the protocol (`tcp` or `udp`) used to transmit data on the `port`.
- {{domxref("RTCIceCandidateStats.relayProtocol", "relayProtocol")}} {{optional_inline}}
  - : A string identifying the protocol used by the endpoint for communicating with the {{Glossary("TURN")}} server; valid values are `tcp`, `udp`, and `tls`. Only present for local candidates.
- {{domxref("RTCIceCandidateStats.transportId", "transportId")}} {{optional_inline}}
  - : A string uniquely identifiying the transport object that was inspected in order to obtain the {{domxref("RTCTransportStats")}} associated with the candidate correspondin to these statistics.
- {{domxref("RTCIceCandidateStats.url", "url")}} {{optional_inline}}
  - : For local candidates, the `url` property is the {{Glossary("URL")}} of the {{Glossary("ICE")}} server from which the candidate was received. This URL matches the one included in the {{domxref("RTCPeerConnectionIceEvent")}} object representing the {{event("icecandidate")}} event that delivered the candidate to the local peer.

## Example

This example features a function, `isUsableNetworkType()`, whose job it is to look at an `RTCIceCandidateStats` object's {{domxref("RTCIceCandidateStats.networkType", "networkType")}} and determine whether or not the type of network is acceptable for use.

This function is then called for {{domxref("RTCStats")}} objects whose type is `local-candidate`, indicating that the object is in fact an `RTCIceCandidateStats` with information about a local ICE candidate.

```js
const isUsableNetworkType = stats => {
  switch(stats.networkType) {
    case "ethernet":
    case "vpn":
      return true;

    case "bluetooth":
    case "cellular":
    case "wimax":
    case "unknown":
    default:
      return false;
  }
}

if (rtcStats && rtcStats.type === "local-candidate") {
  if (!isUsableNetworkType(rtcStats)) {
    abortConnection();
    return;
  }
}
```

This code calls a function called `abortConnection()` if the `RTCStats` object represents information about a local candidate is which would be using a network connection other than Ethernet or a VPN.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
