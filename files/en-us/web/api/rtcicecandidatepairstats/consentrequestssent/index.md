---
title: "RTCIceCandidatePairStats: consentRequestsSent property"
short-title: consentRequestsSent
slug: Web/API/RTCIceCandidatePairStats/consentRequestsSent
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_candidate-pair.consentRequestsSent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`consentRequestsSent`** property of the {{domxref("RTCIceCandidatePairStats")}} dictionary indicates the total number of consent requests sent on this candidate pair.

If either or both of the peers in the pair access the internet via [Network Address Translation](/en-US/docs/Web/API/WebRTC_API/Protocols#nat) (NAT), the other peer will need to regularly send a [Session Traversal Utilities for NAT (STUN)](/en-US/docs/Web/API/WebRTC_API/Protocols#stun) request to the NAT firewall to ask for consent to allow traffic to flow.
This property counts the number of requests.
{{rfc("7675")}} has more information about NAT and consent.

### Value

An integer value indicating the total number consent requests sent to the peers in the candidate pair.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
