---
title: 'RTCPeerConnection: track event'
slug: Web/API/RTCPeerConnection/track_event
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

The **`track`** event is sent to the {{domxref("RTCPeerConnection.ontrack", "ontrack")}} event handler on {{domxref("RTCPeerConnection")}}s after a new track has been added to an {{domxref("RTCRtpReceiver")}} which is part of the connection.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("RTCTrackEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("RTCPeerConnection.ontrack", "ontrack")}}
      </td>
    </tr>
  </tbody>
</table>

By the time this event is delivered, the new track has been fully added to the peer connection. See {{SectionOnPage("/en-US/docs/Web/API/RTCTrackEvent", "Track event types")}} for details.

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

pc.addEventListener("track", e => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
}, false);
```

The event handler assigns the new track's first stream to an existing {{HTMLElement("video")}} element, identified using the variable `videoElement`.

You can also assign the event handler function to the {{domxref("RTCPeerConnection.ontrack", "ontrack")}} property, rather than use {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

```js
pc.ontrack = e => {
  videoElement.srcObject = e.streams[0];
  hangupButton.disabled = false;
  return false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
