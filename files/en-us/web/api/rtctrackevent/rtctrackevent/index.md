---
title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
tags:
  - API
  - Constructor
  - Media
  - RTCTrackEvent
  - Reference
  - WebRTC
  - WebRTC API
  - events
  - track
browser-compat: api.RTCTrackEvent.RTCTrackEvent
---
{{APIRef("WebRTC")}}

The **`RTCTrackEvent()`** constructor
creates and returns a new {{domxref("RTCTrackEvent")}} object, configured to describe
the track which has been added to the {{domxref("RTCPeerConnection")}}.

In general, you won't need to use this constructor, as `RTCTrackEvent`
objects are created by WebRTC and delivered to your `RTCPeerConnector`'s
{{domxref("RTCPeerConnection.ontrack", "ontrack")}} event handler as appropriate.

## Syntax

```js
trackEvent = new RTCTrackEvent(eventInfo);
```

### Parameters

- `eventInfo`
  - : An object providing
    information about the track which has been added to the
    {{domxref("RTCPeerConnection")}}. This object has the following properties:

    - `receiver`
      - : The {{domxref("RTCRtpReceiver")}} which is being used to receive the track's media.
    - `streams` {{optional_inline}}
      - : An array of {{domxref("MediaStream")}} objects representing each of the streams that comprise the event's corresponding track.
    - `track`
      - : The {{domxref("MediaStreamTrack")}} the event is associated with.
    - `transceiver`
      - : The {{domxref("RTCRtpTransceiver")}} associated with the event.

### Return value

A new {{domxref("RTCTrackEvent")}} describing a track which has been added to the
`RTCPeerConnection`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
