---
title: RTCRtpStreamStats.transportId
slug: Web/API/RTCRtpStreamStats/transportId
tags:
  - API
  - Property
  - RTCRtpStreamStats
  - RTP
  - Reference
  - Transport
  - WebRTC
  - WebRTC API
  - id
  - rtc
  - transportID
browser-compat: api.RTCRtpStreamStats.transportId
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary's
**`transportId`** property is a string which uniquely
identifies the object from which the statistics contained in the
{{domxref("RTCTransportStats")}} properties in the
{{domxref("RTCStatsReport")}}.

## Syntax

```js
var transportID = RTCRtpStreamStats.transportId;
```

### Value

A {{domxref("DOMString")}} uniquely identifying the source of the statistics contained
the {{domxref("RTCTransportStats")}} properties in the {{domxref("RTCStatsReport")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
