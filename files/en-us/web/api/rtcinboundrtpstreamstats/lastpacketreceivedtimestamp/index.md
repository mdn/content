---
title: RTCInboundRtpStreamStats.lastPacketReceivedTimestamp
slug: Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp
tags:
  - API
  - Media
  - Property
  - RTCInboundRtpStreamStats
  - RTP
  - Reference
  - Time
  - Time stamp
  - WebRTC
  - WebRTC API
  - lastPacketReceivedTimestamp
  - stream
  - timeStamp
browser-compat: api.RTCInboundRtpStreamStats.lastPacketReceivedTimestamp
---
{{APIRef("WebRTC")}}

The **`lastPacketReceivedTimestamp`**
property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the time
at which the most recently received packet arrived from this source.

## Syntax

```js
var lastPacketTimestamp = rtcInboundRtpStreamStats.lastPacketReceivedTimestamp;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} which specifies the time at which the most
recently received packet arrived on this RTP stream.

> **Note:** This value differs from the {{domxref("RTCStats.timestamp",
    "timestamp")}}, which represents the time at which the statistics object was created.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
