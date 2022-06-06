---
title: RTCStats.id
slug: Web/API/RTCStats/id
page-type: web-api-instance-property
tags:
  - API
  - Property
  - RTCStats
  - Reference
  - Statistics
  - Stats
  - WebRTC
  - WebRTC API
  - id
  - rtc
browser-compat: api.RTCStats.id
---
{{APIRef("WebRTC")}}

The **`id`** property of the
{{domxref("RTCStats")}} dictionary is a string which uniquely identifies the object
for which this `RTCStats` object provides statistics.

Using the
`id`, you can correlate two or more `RTCStats`-based objects in
order to monitor statistics over time for a given WebRTC object, such as an
{{Glossary("RTP")}} stream, an {{domxref("RTCPeerConnection")}}, or an
{{domxref("RTCDataChannel")}}.

## Value

A string which uniquely identifies the object for which this
`RTCStats`-based object provides statistics.

The format of the ID string is not defined by the specification, so you cannot reliably
make any assumptions about the contents of the string, or assume that the format of the
string will remain unchanged for a given object type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
