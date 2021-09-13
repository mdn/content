---
title: RTCTrackEventInit
slug: Web/API/RTCTrackEventInit
tags:
  - API
  - Dictionary
  - Interface
  - Media
  - RTCTrackEventInit
  - Reference
  - WebRTC
  - WebRTC API
  - events
  - track
browser-compat: api.RTCTrackEventInit
---
{{APIRef("WebRTC")}}

The WebRTC API's **`RTCTrackEventInit`** dictionary is used to provide information describing an {{domxref("RTCTrackEvent")}} when instantiating a new {{event("track")}} event using {{domxref("RTCTrackEvent.RTCTrackEvent", "new RTCTrackEvent()")}}.

## Properties

_`RTCTrackEventInit` inherits properties from the {{domxref("EventInit")}} dictionary, and also includes the following properties:_

- {{domxref("RTCTrackEventInit.receiver", "receiver")}}
  - : The {{domxref("RTCRtpReceiver")}} which is being used to receive the track's media.
- {{domxref("RTCTrackEventInit.streams", "streams")}} {{optional_inline}}
  - : An array of {{domxref("MediaStream")}} objects representing each of the streams that comprise the event's corresponding track.
- {{domxref("RTCTrackEventInit.track", "track")}}
  - : The {{domxref("MediaStreamTrack")}} the event is associated with.
- {{domxref("RTCTrackEvent.transceiver", "transceiver")}}
  - : The {{domxref("RTCRtpTransceiver")}} associated with the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
