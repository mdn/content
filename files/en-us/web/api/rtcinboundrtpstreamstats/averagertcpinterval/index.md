---
title: "RTCInboundRtpStreamStats: averageRtcpInterval property"
short-title: averageRtcpInterval
slug: Web/API/RTCInboundRtpStreamStats/averageRtcpInterval
page-type: web-api-instance-property
browser-compat: api.RTCInboundRtpStreamStats.averageRtcpInterval
---

{{APIRef("WebRTC")}}

The **`averageRtcpInterval`** property
of the {{domxref("RTCInboundRtpStreamStats")}} dictionary is a floating-point value
indicating the average {{Glossary("RTCP")}} transmission interval, in seconds.

The RTCP interval is the amount of time that should elapse between transmissions of RTCP
packets.

## Value

A floating-point value indicating the average interval, in seconds, between
transmissions of RTCP packets. This interval is computed following the formula outlined
in {{RFC(1889, "A.7")}}.

Because the interval's value is determined in part by the number of active senders, it
will be different for each user of a service. Since this value is also used to determine
the number of seconds after a stream starts to flow before the first RTCP packet should
be sent, the result is that if many users try to start using the service at the same
time, the server won't be flooded with RTCP packets coming in all at once.

The sending endpoint computes this value when sending compound RTCP packets, which must
contain at least an RTCP RR or SR packet and an SDES packet with the CNAME item.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
