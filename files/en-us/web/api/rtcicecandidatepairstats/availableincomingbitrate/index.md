---
title: "RTCIceCandidatePairStats: availableIncomingBitrate property"
short-title: availableIncomingBitrate
slug: Web/API/RTCIceCandidatePairStats/availableIncomingBitrate
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidatePairStats.availableIncomingBitrate
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidatePairStats")}} property
**`availableIncomingBitrate`** returns a value indicative of
the available inbound capacity of the network connection represented by the candidate
pair. The higher the value, the more bandwidth you can assume is available for
incoming data.

You can get the outgoing available bitrate from
{{domxref("RTCIceCandidatePairStats.availableoutgoingBitrate",
  "availableoutgoingBitrate")}}.

## Syntax

```js-nolint
availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate
```

### Value

A floating-point value which approximates the amount of available bandwidth for
incoming data on the network connection described by the
`RTCIceCandidatePair`. The value is reported in bits per second and is
computed over a 1-second interval.

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
