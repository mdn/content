---
title: RTCTrackEventInit.transceiver
slug: Web/API/RTCTrackEventInit/transceiver
tags:
  - API
  - Media
  - RTCTrackEventInit
  - RTP
  - Reference
  - Transceiver
  - WebRTC
  - WebRTC API
  - events
browser-compat: api.RTCTrackEventInit.transceiver
---
{{APIRef("WebAPI")}}

The {{domxref("RTCTrackEventInit")}} dictionary's
**`transceiver`** property specifies the
{{domxref("RTCRtpTransceiver")}} associated with the {{event("track")}} event.

The transceiver pairs the track's {{domxref("RTCTrackEvent.receiver", "receiver")}} with
an {{domxref("RTCRtpSender")}} to allow bidirectional communication.

## Syntax

```js
var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
};

var rtpTransceiver = trackEventInit.transceiver;
```

### Value

{{page("/en-US/docs/Web/API/RTCTrackEvent/transceiver", "Value")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
