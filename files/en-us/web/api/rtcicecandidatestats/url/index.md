---
title: "RTCIceCandidateStats: url property"
short-title: url
slug: Web/API/RTCIceCandidateStats/url
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidateStats.url
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`url`** property specifies the URL of the
{{Glossary("ICE")}} server from which the described candidate was obtained. This
property is _only_ available for local candidates.

## Value

A string specifying the URL of the ICE server from which the
candidate described by the `RTCIceCandidateStats` was obtained. This is the
same URL that would be received in the {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event's
{{domxref("RTCPeerConnectionIceEvent.url", "url")}} property.

> [!NOTE]
> This property does not exist for remote candidates.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
