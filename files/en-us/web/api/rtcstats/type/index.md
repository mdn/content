---
title: RTCStats.type
slug: Web/API/RTCStats/type
tags:
  - API
  - Property
  - RTCStats
  - Report
  - Statistics
  - Stats
  - Type
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCStats.type
---
{{APIRef("WebRTC")}}

The {{domxref("RTCStats")}} dictionary's property
**`type`** is a string which specifies the type of statistic
represented by the object, where the permitted values are drawn from the enum type
{{domxref("RTCStatsType")}}.

The string can be used to determine which of the
{{domxref("RTCStats")}}-based dictionaries are the foundation of the statistics object.

## Syntax

```js
var type = RTCStats.type;
```

### Value

A {{domxref("DOMString")}} which specifies which type of statistic is represented by
the object. The string comes from the {{domxref("RTCStatsType")}} enum and corrsponds to
one of the {{domxref("RTCStats")}}-based statistic object types.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
