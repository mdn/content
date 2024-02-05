---
title: "RTCRtpReceiver: getSynchronizationSources() method"
short-title: getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
page-type: web-api-instance-method
browser-compat: api.RTCRtpReceiver.getSynchronizationSources
---

{{APIRef("WebRTC API")}}

The **`getSynchronizationSources()`** method of the {{domxref("RTCRtpReceiver")}} interface returns an array of objects, each corresponding to one SSRC (synchronization source) identifier received by the current `RTCRtpReceiver` in the last ten seconds.

## Syntax

```js-nolint
getSynchronizationSources()
```

### Parameters

None.

### Return value

An array of objects, each describing one of the synchronization sources that provided data to the incoming stream in the past ten seconds.
These objects contain the following properties:

- `audioLevel`

  - : A floating-point value between 0.0 and 1.0 specifying the audio level contained in the last RTP packet played from the synchronization source.

    The value is on a linear scale and is defined in units of dBov, or decibels (overload).
    This is the amplitude relative to the point at which clipping of the audio begins to occur.
    A value of 1.0 represents 0 dBov (maximum volume), a value of 0.0 represents silence, and a value of 0.5 represents approximately 6 dB SPL (decibels of sound pressure level) change in the sound pressure level from 0 dBov.

    This value is required and always present.

- `rtpTimestamp` {{optional_inline}}

  - : The RTP timestamp (an integer {{domxref("DOMHighResTimeStamp")}}) of the media.
    This source-generated timestamp indicates the time at which the media in this packet, scheduled for play out at the time indicated by `timestamp`, was initially sampled or generated.
    It may be useful for sequencing and synchronization purposes.

- `source` {{optional_inline}}

  - : A positive integer value specifying the SSRC identifier of the synchronization source.
    This uniquely identifies the source of the particular stream RTP packets.

- `timestamp` {{optional_inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} indicating the most recent time at which a frame originating from this source was delivered to the receiver's {{domxref("MediaStreamTrack")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
