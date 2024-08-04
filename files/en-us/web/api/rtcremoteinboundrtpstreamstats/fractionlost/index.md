---
title: "RTCRemoteInboundRtpStreamStats: fractionLost property"
short-title: fractionLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/fractionLost
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_remote-inbound-rtp.fractionLost
---

{{APIRef("WebRTC")}}

The **`fractionLost`** property of the {{domxref("RTCRemoteInboundRtpStreamStats")}} dictionary provides a value that can be used to determine the fraction of packets lost for this [synchronization source (SSRC)](/en-US/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) in the last reporting interval.

To convert the value to a percentage, divide it by 256 and multiply by 100.
For example, a value of 20 indicates a 7.8% packet loss.

Note that the value may not be precisely accurate due to the way that it is calculated, but it does provides a quick and convenient measure of the link quality.

## Value

A number giving the fraction packet loss in the last reporting interval, multiplied by 256.
The value is 0 if the calculated packet loss is negative.

> [!NOTE]
> The value comes from the 8-bit `fraction lost` field of the last Sender Report (SR) or Receiver Report (RR) RTCP packet.
> The algorithm for calculating the value is defined in [RFC 3550, Appendix A.3: Determining Number of Packets Expected and Lost](https://datatracker.ietf.org/doc/html/rfc3550#appendix-A.3).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{rfc("3550","SR: Sender Report RTCP Packet", "6.4.1")}}
- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
