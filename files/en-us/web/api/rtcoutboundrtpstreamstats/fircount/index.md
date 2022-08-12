---
title: RTCOutboundRtpStreamStats.firCount
slug: Web/API/RTCOutboundRtpStreamStats/firCount
page-type: web-api-instance-property
tags:
  - API
  - FIR
  - Frames
  - Media
  - Property
  - RTCOutboundRtpStreamStats
  - RTP
  - Reference
  - Skipped Frames
  - Statistics
  - Stats
  - Video
  - WebRTC
  - WebRTC API
  - firCount
browser-compat: api.RTCOutboundRtpStreamStats.firCount
---
{{APIRef("WebRTC")}}

The **`firCount`** property of the
{{domxref("RTCOutboundRtpStreamStats")}} dictionary indicates the number of
**Full Intra Request** (**FIR**) that the remote
{{domxref("RTCRtpReceiver")}} has sent to this {{domxref("RTCRtpSender")}}.

A FIR packet is sent when the receiver finds that it has fallen behind and needs to skip
frames in order to catch up; the sender should respond by sending a full frame instead
of a delta frame.

Available only on video media.

## Value

An integer value indicating how many FIR packets have been received by the sender
during the current connection. This statistic is available only for video tracks.

The receiver sends a FIR packet to the sender any time it falls behind or loses packets
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
