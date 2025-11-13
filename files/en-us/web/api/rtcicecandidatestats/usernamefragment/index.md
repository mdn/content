---
title: "RTCIceCandidateStats: usernameFragment property"
short-title: usernameFragment
slug: Web/API/RTCIceCandidateStats/usernameFragment
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_local-candidate.usernameFragment
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`usernameFragment`** property of the {{domxref("RTCIceCandidateStats")}} interface is a string that represents the {{Glossary("ICE")}} username fragment ("ice-ufrag").

The fragment uniquely identifies a single ICE interaction session, and can be used to identify communications that are part of the same session even across ICE restarts.

For more information see {{domxref("RTCIceCandidate.usernameFragment")}}.

## Value

A string representing the {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}} of the corresponding {{domxref("RTCIceCandidate")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
