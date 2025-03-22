---
title: "RTCRemoteInboundRtpStreamStats: localId property"
short-title: localId
slug: Web/API/RTCRemoteInboundRtpStreamStats/localId
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.localId
---

{{APIRef("WebRTC")}}

The {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary's **`localId`** property is a string that can be used to identify the {{domxref("RTCOutboundRtpStreamStats")}} object whose {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}} matches this value.

Together, these two objects provide statistics about the inbound and outbound sides of the same [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc).

## Value

A string which can be compared to the value of an {{domxref("RTCOutboundRtpStreamStats")}} object's {{domxref("RTCOutboundRtpStreamStats.remoteId", "remoteId")}} property to see if the two represent statistics for each of the two sides of the same set of data sent by the local peer.

## Usage notes

You can think of the local and remote views of the same RTP stream as pairs, each of which has a reference back to the other one.
Thus, if an {{domxref("RTCStatsReport")}} includes an `remote-inbound-rtp` statistics object (of type `RTCRemoteInboundRtpStreamStats`), it should also have a corresponding `outbound-rtp` object.

Both of these provide information about the same batch of packets being sent from the local device to the remote peer.
The difference is that `outbound-rtp` offers statistics about the outgoing data from the local peer's perspective, while `remote-inbound-rtp` provides statistics about the same data from the perspective of the remote peer, as it is received.

## Examples

See the example in {{domxref("RTCRemoteOutboundRtpStreamStats.localId")}}.
This shows how to correlate statistics about data sent from the remote peer (from the perspective of the remote peer) with the incoming data from the perspective of the local peer.

The code to correlate send data from the perspective of the local peer and received data from the perspective of the remote peer would be almost the same, and can be inferred from that example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
