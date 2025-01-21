---
title: "RTCInboundRtpStreamStats: mid property"
short-title: mid
slug: Web/API/RTCInboundRtpStreamStats/mid
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.mid
---

{{APIRef("WebRTC")}}

The **`mid`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary is a string that contains the media id negotiated between the local and remote peers.
This uniquely identifies the pairing of source and destination for the transceiver's stream.

## Value

The value of the corresponding {{domxref("RTCRtpTransceiver.mid")}}, unless that value is null, in which case this statistic property is not present.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
