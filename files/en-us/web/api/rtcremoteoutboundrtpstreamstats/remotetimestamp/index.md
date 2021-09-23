---
title: RTCRemoteOutboundRtpStreamStats.remoteTimestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp
tags:
  - API
  - Property
  - RTCRemoteOutboundRtpStreamStats
  - Reference
  - Remote
  - Statistics
  - Stats
  - Timer
  - Timing
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - remoteTimestamp
  - timeStamp
browser-compat: api.RTCRemoteOutboundRtpStreamStats.remoteTimestamp
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRemoteOutboundRtpStreamStats")}} property
**`remoteTimestamp`** indicates the timestamp on the remote peer
at which these statistics were sent. This differs from `timestamp`, which
indicates the time at which the statistics were generated or received locally.

## Syntax

```js
let remoteTimestamp = rtcRemoteOutboundRtpStreamStats.remoteTimestamp;
```

### Value

A {{domxref("DOMHighResTimeStamp")}} value indicating the timestamp on the remote peer
at which it sent these statistics. This is different from the value
`timestamp`, which gives the time at which the statistics were generated or
received by the local peer.

If this property is present, it comes from the {{Glossary("RTCP")}} Sender Report (SR)
block, which reflects the clock on the remote peer at the time the message was sent.
Keep in mind that this means the clock may not be synchronized with the local clock, and
that both the current time and the pace at which the clock runs may differ to some
extent.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStats.timestamp")}}
