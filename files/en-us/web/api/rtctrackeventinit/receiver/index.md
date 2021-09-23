---
title: RTCTrackEventInit.receiver
slug: Web/API/RTCTrackEventInit/receiver
tags:
  - API
  - Property
  - RTCTrackEventInit
  - RTP
  - Reference
  - WebRTC
  - WebRTC API
  - events
  - receiver
  - track
browser-compat: api.RTCTrackEventInit.receiver
---
{{APIRef("WebAPI")}}

The {{domxref("RTCTrackEventInit")}} dictionary's
**`receiver`** property specifies the
{{domxref("RTCRtpReceiver")}} associated with the event.

## Syntax

```js
var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
};

var rtpReceiver = trackEventInit.receiver;
```

### Value

{{page("/en-US/docs/Web/API/RTCTrackEvent/receiver", "Value")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
