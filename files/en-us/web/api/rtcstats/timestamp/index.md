---
title: RTCStats.timestamp
slug: Web/API/RTCStats/timestamp
page-type: web-api-instance-property
tags:
  - API
  - Property
  - RTCStats
  - Reference
  - Statistics
  - Stats
  - Time
  - WebRTC
  - WebRTC API
  - rtc
  - timeStamp
browser-compat: api.RTCStats.timestamp
---
{{APIRef("WebRTC")}}

The **`timestamp`** property of the
{{domxref("RTCStats")}} dictionary is a {{domxref("DOMHighResTimeStamp")}} object
specifying the time at which the data in the object was sampled.

For reports
related to RTCP packets, for instance, this indicates the time at which the data covered
by the statistics was received at the corresponding endpoint.

The time is given in milliseconds elapsed since the UNIX epoch (the first moment of
January 1, 1970, UTC).

## Value

A {{domxref("DOMHighResTimeStamp")}} value indicating the time at which the activity
described by the statistics in this object was recorded, in milliseconds elapsed since
the beginning of January 1, 1970, UTC. This should be accurate to within a few
milliseconds but may not be entirely precise, either because of hardware or operating
system limitations or because of fingerprinting protection in the form of reduced clock
precision or accuracy.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
