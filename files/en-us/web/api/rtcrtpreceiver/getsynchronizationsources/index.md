---
title: RTCRtpReceiver.getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
page-type: web-api-instance-method
tags:
  - API
  - Media
  - Method
  - RTCRtpReceiver
  - RTP
  - Web
  - WebRTC
  - getSynchronizationSources
browser-compat: api.RTCRtpReceiver.getSynchronizationSources
---
{{APIRef("WebRTC API")}}

The **`getSynchronizationSources()`**
method of the {{domxref("RTCRtpReceiver")}} interface returns an array of
{{domxref("RTCRtpContributingSource")}} instances, each corresponding to one SSRC
(synchronization source) identifier received by the current
`RTCRtpReceiver` in the last ten seconds.

## Syntax

```js
getSynchronizationSources()
```

### Parameters

None.

### Return value

An array of object describing one of the synchronization sources that provided data to the incoming stream in the past ten seconds. These objects contain the following properties:

- {{domxref("RTCRtpContributingSource.audioLevel", "audioLevel")}} {{optional_inline}}
  - : A double-precision floating-point value between 0.0 and 1.0 specifying the audio level (in dBov) contained in the last RTP packet played from this source.
- {{domxref("RTCRtpContributingSource.rtpTimestamp", "rtpTimestamp")}} {{optional_inline}}
  - : The RTP timestamp of the media played out at the time indicated by `timestamp`. This value is a source-generated time value which can be used to help with sequencing and synchronization.
- {{domxref("RTCRtpContributingSource.source", "source")}} {{optional_inline}}
  - : A 32-bit unsigned integer value specifying the CSRC identifier of the contributing source.
- {{domxref("RTCRtpContributingSource.timestamp", "timestamp")}} {{optional_inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the most recent time at which a frame originating from this source was delivered to the receiver's {{domxref("MediaStreamTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
