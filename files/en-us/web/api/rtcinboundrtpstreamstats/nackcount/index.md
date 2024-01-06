---
title: "RTCInboundRtpStreamStats: nackCount property"
short-title: nackCount
slug: Web/API/RTCInboundRtpStreamStats/nackCount
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.nackCount
---

{{APIRef("WebRTC")}}

The **`nackCount`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary is a numeric value indicating the
number of times the receiver sent a **NACK** packet to the sender.

A NACK (Negative ACKnowledgement, also called "Generic NACK") packet tells the sender
that one or more of the {{Glossary("RTP")}} packets it sent were lost in transport.

## Value

An integer value indicating how many times the receiver sent a NACK packet to the
sender after detecting that one or more packets were lost during transport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
