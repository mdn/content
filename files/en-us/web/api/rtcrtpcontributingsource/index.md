---
title: RTCRtpContributingSource
slug: Web/API/RTCRtpContributingSource
page-type: web-api-interface
tags:
  - API
  - Contributing Source
  - Dictionary
  - Interface
  - Media
  - RTCRtpContributingSource
  - RTP
  - Reference
  - WebRTC
browser-compat: api.RTCRtpContributingSource
---
{{APIRef("WebRTC API")}}

The **`RTCRtpContributingSource`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) is used by {{domxref("RTCRtpReceiver.getContributingSources", "getContributingSources()")}} to provide information about a given contributing source (CSRC), including the most recent time a packet that the source contributed was played out.

The information provided is based on the last ten seconds of media received.

## Properties

- {{domxref("RTCRtpContributingSource.audioLevel", "audioLevel")}} {{optional_inline}}
  - : A double-precision floating-point value between 0 and 1 specifying the audio level contained in the last RTP packet played from this source.
- {{domxref("RTCRtpContributingSource.rtpTimestamp", "rtpTimestamp")}} {{optional_inline}}
  - : The RTP timestamp of the media played out at the time indicated by `timestamp`. This value is a source-generated time value which can be used to help with sequencing and synchronization.
- {{domxref("RTCRtpContributingSource.source", "source")}} {{optional_inline}}
  - : A 32-bit unsigned integer value specifying the CSRC identifier of the contributing source.
- {{domxref("RTCRtpContributingSource.timestamp", "timestamp")}} {{optional_inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the most recent time at which a frame originating from this source was delivered to the receiver's {{domxref("MediaStreamTrack")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
