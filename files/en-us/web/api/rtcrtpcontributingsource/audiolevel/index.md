---
title: "RTCRtpContributingSource: audioLevel property"
short-title: audioLevel
slug: Web/API/RTCRtpContributingSource/audioLevel
page-type: web-api-instance-property
browser-compat: api.RTCRtpContributingSource.audioLevel
---

{{APIRef("WebRTC API")}}

The read-only **`audioLevel`**
property of the {{domxref("RTCRtpContributingSource")}} dictionary contains the audio
level contained in the last RTP packet played from the described source.

`audioLevel` will be the level value defined in \[RFC6465] if the RFC 6465 header extension
is present, and otherwise null.

## Value

A double-precision floating-point number which indicates the volume level of the audio
in the most recently received RTP packet from the source described by the
`RTCRtpContributingSource`.

This value, which is in the range 0.0 to 1.0, is on a linear scale and its value is
defined in dBov, or decibels (overload). This is the amplitude relative to the point at
which clipping of the audio begins to occur. A value of 1.0 represents 0 dBov (maximum
volume), a value of 0.0 represents silence, and a value of 0.5 represents approximately
6 dB SPL (decibels of sound pressure level) change in the sound pressure level from 0
dBov.

For both `RTCRtpContributingSource` and
{{domxref("RTCRtpSynchronizationSource")}}, the audio level is converted to this form
from the values defined in the specifications corresponding to each type of source.

> **Note:** `audioLevel` may be absent from `RTCRtpContributingSource`
> objects, which indicates that no volume level was provided by the source; however, it
> is _required_ and always available on all
> `RTCRtpSynchronizationSource` objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
