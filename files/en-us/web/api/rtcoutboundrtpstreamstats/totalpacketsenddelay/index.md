---
title: "RTCOutboundRtpStreamStats: totalPacketSendDelay property"
short-title: totalPacketSendDelay
slug: Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_outbound-rtp.totalPacketSendDelay
---

{{APIRef("WebRTC")}}

The **`totalPacketSendDelay`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the total time in seconds that packets have spent buffered locally before being transmitted.

The individual packet delay is the time between a packet being emitted from the RTP packetizer and it being handed over to the OS network socket.
The individual delay is added to `totalPacketSendDelay` when {{domxref("RTCOutboundRtpStreamStats/framesEncoded","packetsSent")}} is incremented.

> [!NOTE]
> The property is undefined for audio streams.

## Value

The delay in seconds, represented as a number.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
