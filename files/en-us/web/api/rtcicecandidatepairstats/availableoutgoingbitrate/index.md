---
title: "RTCIceCandidatePairStats: availableOutgoingBitrate property"
short-title: availableOutgoingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.availableOutgoingBitrate
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`availableOutgoingBitrate`** returns a value indicative of
the available outbound capacity of the network connection represented by the candidate
pair. The higher the value, the more bandwidth you can assume is available for
outgoing data.

You can get the incoming available bitrate from
{{domxref("RTCIceCandidatePairStats.availableIncomingBitrate",
  "availableIncomingBitrate")}}.

## Value

A floating-point value which approximates the amount of available bandwidth for
outgoing data on the network connection described by the
`RTCIceCandidatePair`. The value is reported in bits per second and is
computed over a 1-second interval.

The returned value is `undefined` in each of the following situations:

- The underlying implementation doesn't support computing a sender-side estimate of
  the outgoing bit rate.
- The {{domxref("RTCIceCandidatePair")}} described by this object has never been used.
- The candidate pair was once in use, but no longer is.

The value returned is calculated by adding up the available bit rate for every
{{Glossary("RTP")}} stream using the connection described by this candidate pair. The
returned value doesn't take into account overhead introduced by underlying protocols,
including IP, UDP, or TCP.

> **Note:** The returned value is computed using a method similar—but not
> identical—to the Transport Independent Application Specific Maximum (TIAS) described
> in {{RFC(3890, "", "6.2")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
