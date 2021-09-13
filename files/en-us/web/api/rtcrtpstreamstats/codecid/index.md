---
title: RTCRtpStreamStats.codecId
slug: Web/API/RTCRtpStreamStats/codecId
tags:
  - API
  - Codec
  - Dictionary
  - Interface
  - Property
  - RTCRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - WebRTC
  - WebRTC API
  - WebRTC Statistics
  - codecId
  - id
  - rtc
browser-compat: api.RTCRtpStreamStats.codecId
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpStreamStats")}} dictionary's
**`codecId`** property is a string which uniquely identifies
the object that was inspected to produce the data in the {{domxref("RTCCodecStats")}}
for the {{Glossary("RTP")}} stream.

## Syntax

```js
var codecID = RTCRtpStreamStats.codecId;
```

### Value

A {{domxref("DOMString")}} which uniquely identifies the object from which the contents
of the stream's {{domxref("RTCCodecStats")}} are derived.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
