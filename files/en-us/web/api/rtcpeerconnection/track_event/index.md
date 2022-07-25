---
title: 'RTCPeerConnection: track event'
slug: Web/API/RTCPeerConnection/track_event
page-type: web-api-event
tags:
  - DOM
  - DOM Event Reference
  - Event Reference
  - Media
  - MediaStreamTrack
  - Reference
  - WebRTC
  - WebRTC API
  - events
  - Event
  - track
browser-compat: api.RTCPeerConnection.track_event
---
{{APIRef("WebRTC")}}

The **`track`** event is sent to the `ontrack` event handler on {{domxref("RTCPeerConnection")}}s after a new track has been added to an {{domxref("RTCRtpReceiver")}} which is part of the connection.

By the time this event is delivered, the new track has been fully added to the peer connection. See {{SectionOnPage("/en-US/docs/Web/API/RTCTrackEvent", "Track event types")}} for details.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('track', (event) => { });

ontrack = (event) => { };
```

## Event type

An {{domxref("RTCTrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCTrackEvent")}}

## Event properties

_Since `RTCTrackEvent` is based on {{domxref("Event")}}, its properties are also available._

- {{domxref("RTCTrackEvent.receiver", "receiver")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCRtpReceiver")}} used by the track that's been added to the `RTCPeerConnection`.
- {{domxref("RTCTrackEvent.streams", "streams")}} {{ReadOnlyInline}} {{optional_inline}}
  - : An array of {{domxref("MediaStream")}} objects, each representing one of the media streams to which the added {{domxref("RTCTrackEvent.track", "track")}} belongs. By default, the array is empty, indicating a streamless track.
- {{domxref("RTCTrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The {{domxref("MediaStreamTrack")}} which has been added to the connection.
- {{domxref("RTCTrackEvent.transceiver", "transceiver")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCRtpTransceiver")}} being used by the new track.

## Examples

This example shows code that creates a new {{domxref("RTCPeerConnection")}}, then adds a new `track` event handler.

```js
pc = new RTCPeerConnection({
  iceServers: [
    {
      urls: "turn:fake.turnserver.url",
      username: "someusername",
      credential: "somepassword"
    }
  ]
});

pc.addEventListener("track", (e) => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
}, false);
```

The event handler assigns the new track's first stream to an existing {{HTMLElement("video")}} element, identified using the variable `videoElement`.

You can also assign the event handler function to the `ontrack` property, rather than use {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
pc.ontrack = (e) => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
  return false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
