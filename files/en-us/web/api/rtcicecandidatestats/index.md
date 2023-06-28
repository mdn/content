---
title: RTCIceCandidateStats
slug: Web/API/RTCIceCandidateStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_local-candidate
---

{{APIRef("WebRTC")}}

The **`RTCIceCandidateStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used to report statistics related to an {{domxref("RTCIceCandidate")}}.

The statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `local-candidate`.

## Instance properties

- {{domxref("RTCIceCandidateStats.address", "address")}} {{optional_inline}}
  - : A string containing the address of the candidate. This value may be an IPv4 address, an IPv6 address, or a fully-qualified domain name. This property was previously named `ip` and only accepted IP addresses.
- {{domxref("RTCIceCandidateStats.candidateType", "candidateType")}}
  - : A string matching one of the values in [`RTCIceCandidate.type`](/en-US/docs/Web/API/RTCIceCandidate/type#values), indicating what kind of candidate the object provides statistics for.
- {{domxref("RTCIceCandidateStats.deleted", "deleted")}} {{optional_inline}}
  - : A Boolean value indicating whether or not the candidate has been released or deleted; the default value is `false`. For local candidates, its value is `true` if the candidate has been deleted or released. For host candidates, `true` means that any network resources (usually a network socket) associated with the candidate have already been released. For {{Glossary("TURN")}} candidates, the TURN allocation is no longer active for deleted candidates. This property is not present for remote candidates.
- {{domxref("RTCIceCandidateStats.port", "port")}} {{optional_inline}}
  - : The network port number used by the candidate.
- {{domxref("RTCIceCandidateStats.priority", "priority")}} {{optional_inline}}
  - : The candidate's priority, corresponding to {{domxref("RTCIceCandidate.priority")}}.
- {{domxref("RTCIceCandidateStats.protocol", "protocol")}} {{optional_inline}}
  - : A string specifying the protocol (`tcp` or `udp`) used to transmit data on the `port`.
- {{domxref("RTCIceCandidateStats.relayProtocol", "relayProtocol")}} {{optional_inline}}
  - : A string identifying the protocol used by the endpoint for communicating with the {{Glossary("TURN")}} server; valid values are `tcp`, `udp`, and `tls`.
    Only present for local candidates.
- {{domxref("RTCIceCandidateStats.transportId", "transportId")}}
  - : A string uniquely identifying the transport object that was inspected in order to obtain the {{domxref("RTCTransportStats")}} associated with the candidate corresponding to these statistics.
- {{domxref("RTCIceCandidateStats.url", "url")}} {{optional_inline}}
  - : For local candidates, the `url` property is the {{Glossary("URL")}} of the {{Glossary("ICE")}} server from which the candidate was received.
    This URL matches the one included in the {{domxref("RTCPeerConnectionIceEvent")}} object representing the {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event that delivered the candidate to the local peer.

### Common instance properties

The following properties are common to all WebRTC statistics objects.

<!-- RTCStats -->

- {{domxref("RTCIceCandidateStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCIceCandidateStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCIceCandidateStats.type", "type")}}
  - : A string with the value `"local-candidate"`, indicating the type of statistics that the object contains.

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
