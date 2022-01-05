---
title: 'RTCPeerConnection: addstream event'
slug: Web/API/RTCPeerConnection/addstream_event
tags:
  - Event
  - Media
  - MediaStream
  - Deprecated
  - RTCPeerConnection
  - Reference
  - Streams
  - WebRTC
  - WebRTC API
  - addStream
  - events
browser-compat: api.RTCPeerConnection.addstream_event
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The obsolete **`addstream`** event is sent to an {{domxref("RTCPeerConnection")}} when new media, in the form of a {{domxref("MediaStream")}} object, has been added to it.

> **Warning:** This event has been removed from the WebRTC specification. You should instead watch for the {{domxref("RTCPeerConnection.track_event", "track")}} event, which is sent for each media track added to the `RTCPeerConnection`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{DOMxRef("MediaStreamEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{DOMxRef("RTCPeerconnection.onaddstream")}}</td>
    </tr>
  </tbody>
</table>

You can, similarly, watch for streams to be removed from the connection by monitoring the {{domxref("RTCPeerConnection.removestream_event", "removestream")}} event.

## Examples

This example looks to determine if the user's browser supports the {{domxref("RTCPeerConnection.track_event", "track")}} event. If it does, a `track` event listener is set up; otherwise, an `addstream` event listener is set up. `pc` is an `RTCPeerConnection`.

```js
if (pc.addTrack !== undefined) {
  pc.ontrack = ev => {
    ev.streams.forEach(stream => doAddStream(stream));
  }
} else {
  pc.onaddstream = ev => {
    doAddStream(ev.stream);
  }
}
```

This calls a function `doAddStream()` once for each stream being added to the {{domxref("RTCPeerConnection")}}, regardless of whether the browser sends `addstream` or `track`.

You can also use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method to set an event listener:

```js
pc.addEventListener("addstream", ev => doAddStream(ev.stream), false);
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.onaddstream")}}
- {{domxref("RTCPeerConnection.addStream()")}}
- {{domxref("MediaStreamEvent")}}
