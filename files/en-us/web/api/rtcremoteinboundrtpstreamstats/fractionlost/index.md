---
title: "RTCRemoteInboundRtpStreamStats: fractionLost property"
short-title: fractionLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/fractionLost
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.fractionLost
---

{{APIRef("WebRTC")}}

The **`fractionLost`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary provides the fraction of packets lost for this [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) in the last reporting interval.

The value provides a quick and convenient measure of the link quality.
It is the packet loss as a fraction, scaled up by 256.
To convert to a percentage, divide by 256 and multiply by 100.
For example, a value of 20 would equal a 7.8% packet loss.
Note that the packet loss can be negative if more packets are received than expected, and in this case the fraction is set to zero.

## Value

A number indicating the fraction packet loss in the last reporting interval.

The fraction packet loss comes from the 8-bit `fraction lost` field of the last SR or RR RTCP packet.
It is calculated by dividing the expected packets by the packets received in the period since the last SR or RR packet was sent.
If the packet loss is negative the value is set to zero.
Otherwise the value is bit-shifted 8 bits.
This has the effect of making the fractional part of the fraction packet loss into the 8 bit unsigned integer which is what is sent in the SR or RR packet and contained in this property.
For more information see the definition of "fraction lost" in {{rfc("3550","SR: Sender Report RTCP Packet", "6.4.1")}} and [RFC 3550, Appendix A.3: Determining Number of Packets Expected and Lost](https://datatracker.ietf.org/doc/html/rfc3550#appendix-A.3).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
