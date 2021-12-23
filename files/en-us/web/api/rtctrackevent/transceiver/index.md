---
title: RTCTrackEvent.transceiver
slug: Web/API/RTCTrackEvent/transceiver
tags:
  - API
  - Media
  - Property
  - RTCTrackEvent
  - RTP
  - Reference
  - Transceiver
  - WebRTC
  - WebRTC API
  - events
browser-compat: api.RTCTrackEvent.transceiver
---
{{APIRef("WebRTC")}}

The WebRTC API interface {{domxref("RTCTrackEvent")}}'s
read-only **`transceiver`** property indicates the
{{domxref("RTCRtpTransceiver")}} affiliated with the event's
{{domxref("RTCTrackEvent.track", "track")}}.

The transceiver pairs the track's
{{domxref("RTCTrackEvent.receiver", "receiver")}} with an {{domxref("RTCRtpSender")}}.

## Syntax

```js
var rtpTransceiver = trackEvent.transceiver;
```

### Value

The {{domxref("RTCRtpTransceiver")}} which pairs the `receiver` with a
sender and other properties which establish a single bidirectional {{Glossary("RTP", "SRTP")}}
stream for use by the {{domxref("RTCTrackEvent.track", "track")}} associated with the
`RTCTrackEvent`.

> **Note:** The {{domxref("RTCRtpReceiver")}} referred to by this
> `RTCRtpReceiver`'s {{domxref("RTCRtpTransceiver.receiver", "receiver")}}
> property will always be the same as the {{domxref("RTCTrackEvent")}}'s
> {{domxref("RTCTrackEvent.receiver", "receiver")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
