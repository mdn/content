---
title: "RTCInboundRtpStreamStats: bytesReceived property"
short-title: bytesReceived
slug: Web/API/RTCInboundRtpStreamStats/bytesReceived
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.bytesReceived
---

{{APIRef("WebRTC")}}

The **`bytesReceived`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the total number of bytes received so far from this synchronization source (SSRC), not including header and padding bytes.

The value can be used to calculate an approximation of the average media data rate:

```js
avgDataRate = rtcInboundRtpStreamStats.bytesReceived / elapsedTime;
```

The property value is reset to zero if the sender's SSRC identifier changes for any reason.

## Value

A positive integer.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
