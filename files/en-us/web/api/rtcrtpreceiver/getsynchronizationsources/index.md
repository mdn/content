---
title: RTCRtpReceiver.getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
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
var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()
```

### Parameters

None.

### Return value

An array of {{domxref("RTCRtpSynchronizationSource")}} instances. Each instance
describes one of the synchronization sources that provided data to the incoming stream
in the past ten seconds.

As you'll see in the documentarion for `RTCRtpSynchronizationSource`, it
inherits the properties of {{domxref("RTCRtpContributingSource")}},
including {{domxref("RTCRtpContributingSource.timestamp",
  "timestamp")}}, {{domxref("RTCRtpContributingSource.source", "source")}},
and {{domxref("RTCRtpContributingSource.audioLevel", "audioLevel")}}.

The synchronization source objects add a
{{domxref("RTCRtpSynchronizationSource.voiceActivityFlag", "voiceActivityFlag")}}
property, which indicates if the last RTP packet received contained voice activity.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
