---
title: RTCRtpSynchronizationSource.voiceActivityFlag
slug: Web/API/RTCRtpSynchronizationSource/voiceActivityFlag
tags:
  - API
  - Media
  - Property
  - RTCRtpSynchronizationSource
  - RTP
  - Voice Activity Detection
  - Voice Detection
  - WebRTC
  - voiceActivityFlag
browser-compat: api.RTCRtpSynchronizationSource.voiceActivityFlag
---
{{APIRef("WebRTC API")}}{{non-standard_header}}{{deprecated_header}}

The read-only **`voiceActivityFlag`**
property of the {{domxref("RTCRtpSynchronizationSource")}} interface indicates whether
or not the most recent RTP packet on the source includes voice activity.

This
is only present if the stream is using the voice activity detection feature; see the
`RTCOfferOptions` flag
[`voiceActivityDetection`](/en-US/docs/Web/API/RTCPeerConnection/createOffer#RTCOfferOptions_dictionary).

## Syntax

```js
var voiceActivity = RTCRtpSynchronizationSource.voiceActivityFlag
```

### Value

A Boolean value which is `true` if voice activity is present in the most
recently received RTP packet played by the associated source, or `false` if
voice activity is not present.

> **Note:** This property is omitted entirely if voice activity detection is not enabled on the
> source, or if the {{RFC(6464)}} extension header isn't present.

## Browser compatibility

{{Compat}}
