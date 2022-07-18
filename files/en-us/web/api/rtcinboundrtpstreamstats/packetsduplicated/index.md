---
title: RTCInboundRtpStreamStats.packetsDuplicated
slug: Web/API/RTCInboundRtpStreamStats/packetsDuplicated
page-type: web-api-instance-property
tags:
  - API
  - Duplicate
  - Packets
  - Property
  - RTCInboundRtpStreamStats
  - RTP
  - Reference
  - Repeat
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - packetsDuplicated
  - stream
browser-compat: api.RTCInboundRtpStreamStats.packetsDuplicated
---
{{APIRef("WebRTC")}}

The **`packetsDuplicated`** property
of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number
of packets discarded because they were duplicates of previously-received
packets.

These packets are not counted by the
{{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}} property.

## Value

An integer value which specifies how many duplicate packets have been received by the
local end of this RTP stream so far. These duplicate packets are not included in the
{{domxref("RTCInboundRtpStreamStats.packetsDiscarded", "packetsDiscarded")}} property.

## Usage notes

Duplicate packets are detected when a packet has the same RTP sequence number as
another packet that has previously been processed. Each time a packet is repeated, the
value of `packetsDuplicated` is incremented, even if the same packet is
received more than twice.

You can get a more accurate tally of how many packets have been lost on the stream by
adding `packetsDuplicated` to
{{domxref("RTCInboundRtpStreamStats.packetsLost", "packetsLost")}}. The resulting value
will be positive, although it will not match the count as computed in {{RFC(3660)}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
