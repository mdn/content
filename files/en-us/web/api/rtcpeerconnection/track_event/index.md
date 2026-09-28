---
title: "RTCPeerConnection: track event"
short-title: track
slug: Web/API/RTCPeerConnection/track_event
page-type: web-api-event
browser-compat: api.RTCPeerConnection.track_event
---

{{APIRef("WebRTC")}}

The **`track`** event is sent to the `ontrack` event handler on {{domxref("RTCPeerConnection")}}s after a new track has been added to an {{domxref("RTCRtpReceiver")}} which is part of the connection.

By the time this event is delivered, the new track has been fully added to the peer connection. See [Track event types](/en-US/docs/Web/API/RTCTrackEvent#track_event_types) for details.

This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("track", (event) => { })

ontrack = (event) => { }
```

## Event type

An {{domxref("RTCTrackEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCTrackEvent")}}

## Examples

This example shows code that creates a new {{domxref("RTCPeerConnection")}}, then adds a new `track` event handler.

```js
pc = new RTCPeerConnection({
  iceServers: [
    {
      urls: "turn:fake.turn-server.url",
      username: "some username",
      credential: "some-password",
    },
  ],
});

pc.addEventListener("track", (e) => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
});
```

The event handler assigns the new track's first stream to an existing {{HTMLElement("video")}} element, identified using the variable `videoElement`.

You can also assign the event handler function to the `ontrack` property, rather than use {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
pc.ontrack = (e) => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
  return false;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
