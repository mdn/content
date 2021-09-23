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
  - : An object based on the {{domxref("RTCTrackEventInit")}} dictionary, providing
    information about the track which has been added to the
    {{domxref("RTCPeerConnection")}}. This object has the following properties:
    {{page("/en-US/docs/Web/API/RTCTrackEventInit", "property-list")}}

### Return value

A new {{domxref("RTCTrackEvent")}} describing a track which has been added to the
`RTCPeerConnection`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
