---
title: RTCInboundRtpStreamStats.nackCount
slug: Web/API/RTCInboundRtpStreamStats/nackCount
tags:
  - API
  - NACK
  - Packet Loss
  - Property
  - RTCInboundRtpStreamStats
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - nackCount
  - stream
browser-compat: api.RTCInboundRtpStreamStats.nackCount
---
{{APIRef("WebRTC")}}

The **`nackCount`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary is a numeric value indicating the
number of times the receiver sent a **NACK** packet to the sender.

A NACK (Negative ACKnowledgement, also called "Generic NACK") packet tells the sender
that one or more of the {{Glossary("RTP")}} packets it sent were lost in transport.

## Syntax

```js
var nackCount = rtcInboundRtpStreamStats.nackCount;
```

### Value

An integer value indicating how many times the receiver sent a NACK packet to the
sender after detecting that one or more packets were lost during transport.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
