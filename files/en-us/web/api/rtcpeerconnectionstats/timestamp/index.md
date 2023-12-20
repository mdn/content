---
title: "RTCPeerConnectionStats: timestamp property"
short-title: timestamp
slug: Web/API/RTCPeerConnectionStats/timestamp
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_peer-connection.timestamp
---

{{APIRef("WebRTC")}}

The **`timestamp`** property of the {{domxref("RTCPeerConnectionStats")}} dictionary is a {{domxref("DOMHighResTimeStamp")}} object specifying the time at which the data in the object was sampled.

## Value

A {{domxref("DOMHighResTimeStamp")}} value indicating the time at which the activity described by the statistics in this object was recorded, in milliseconds elapsed since the beginning of January 1, 1970, UTC.

The value should be accurate to within a few milliseconds but may not be entirely precise, either because of hardware or operating system limitations or because of [fingerprinting](/en-US/docs/Glossary/Fingerprinting) protection in the form of reduced clock precision or accuracy.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
