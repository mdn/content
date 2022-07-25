---
title: RTCTrackEvent()
slug: Web/API/RTCTrackEvent/RTCTrackEvent
page-type: web-api-constructor
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

The **`RTCTrackEvent()`** constructor creates and returns a new {{domxref("RTCTrackEvent")}} object,
configured to describe the track which has been added to the {{domxref("RTCPeerConnection")}}.

In general, you won't need to use this constructor, as `RTCTrackEvent`
objects are created by WebRTC and delivered to your `RTCPeerConnector`'s
{{domxref("RTCPeerConnection.track_event", "ontrack")}} event handler as appropriate.

## Syntax

```js
new RTCTrackEvent(type, options)
```

### Parameters

- `type`
  - :  A string with the name of the event.
    It is case-sensitive and browsers always set it to `track`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `receiver`
      - : The {{domxref("RTCRtpReceiver")}} which is being used to receive the track's media.
    - `streams` {{optional_inline}}
      - : An array of {{domxref("MediaStream")}} objects representing each of the streams that comprise the event's corresponding track.
        It defaults to an empty array.
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
