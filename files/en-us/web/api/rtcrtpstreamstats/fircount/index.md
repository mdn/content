---
title: "RTCRtpStreamStats: firCount property"
short-title: firCount
slug: Web/API/RTCRtpStreamStats/firCount
page-type: web-api-instance-property
browser-compat: api.RTCRtpStreamStats.firCount
---

{{APIRef("WebRTC")}}

The **`firCount`** property of the
{{domxref("RTCRtpStreamStats")}} dictionary indicates the number of **Full Intra
Request** (**FIR**) packets have been sent by the receiver to
the sender.

This is a measure of how often the stream falls behind and has to
skip frames in order to catch up.

## Value

An integer value indicating how many FIR packets have been received by the sender
during the current connection. This value is available only on receivers for video
tracks.

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
