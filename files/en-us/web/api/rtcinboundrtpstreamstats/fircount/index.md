---
title: RTCInboundRtpStreamStats.firCount
slug: Web/API/RTCInboundRtpStreamStats/firCount
tags:
  - API
  - FIR
  - Frames
  - Property
  - RTCIncomingRtpStreamStats
  - RTP
  - Reference
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - firCount
  - stream
browser-compat: api.RTCInboundRtpStreamStats.firCount
---
{{APIRef("WebRTC")}}

The **`firCount`** property of the
{{domxref("RTCInboundRtpStreamStats")}} dictionary indicates the number of
**Full Intra Request** (**FIR**) packets have been sent by
the receiver to the sender.

The receiver sends a FIR packet when the stream
falls behind and needs to skip frames in order to catch up.

## Syntax

```js
var firCount = rtcInboundRtpStreamStats.firCount;
```

### Value

An integer value indicating how many FIR packets have been received by the sender
during the current connection. This statistic is available only for video tracks.

The receiver sends a FIR packet to the sender any time it falls bahind or loses packets
and cannot decode the incoming stream any longer because of the lost data. This tells
the sender to send a full frame instead of a delta frame, so that the receiver can catch
up.

The higher `firCount` is, the more often frames were dropped, which may be
an indication that the media's bit rate is too high for the available bandwidth, or that
the receiving device is overburdened and is therefore unable to process the incoming
data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
