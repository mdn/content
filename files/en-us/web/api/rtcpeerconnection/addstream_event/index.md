---
title: "RTCPeerConnection: addstream event"
short-title: addstream
slug: Web/API/RTCPeerConnection/addstream_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.RTCPeerConnection.addstream_event
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The obsolete **`addstream`** event is sent to an {{domxref("RTCPeerConnection")}} when new media, in the form of a {{domxref("MediaStream")}} object, has been added to it.

> **Warning:** This event has been removed from the WebRTC specification. You should instead watch for the {{domxref("RTCPeerConnection.track_event", "track")}} event, which is sent for each media track added to the `RTCPeerConnection`.

You can, similarly, watch for streams to be removed from the connection by monitoring the {{domxref("RTCPeerConnection.removestream_event", "removestream")}} event.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("addstream", (event) => {});

onaddstream = (event) => {};
```

## Event type

A {{domxref("MediaStreamEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamEvent")}}

## Event properties

_A {{domxref("MediaStreamEvent")}} being an {{domxref("Event")}}, this event also implements these properties_.

- {{domxref("MediaStreamEvent.stream")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("MediaStream")}} containing the stream associated with the event.

## Examples

This example looks to determine if the user's browser supports the {{domxref("RTCPeerConnection.track_event", "track")}} event. If it does, a `track` event listener is set up; otherwise, an `addstream` event listener is set up. `pc` is an `RTCPeerConnection`.

```js
if (pc.addTrack !== undefined) {
  pc.ontrack = (ev) => {
    ev.streams.forEach((stream) => doAddStream(stream));
  };
} else {
  pc.onaddstream = (ev) => {
    doAddStream(ev.stream);
  };
}
```

This calls a function `doAddStream()` once for each stream being added to the {{domxref("RTCPeerConnection")}}, regardless of whether the browser sends `addstream` or `track`.

You can also use the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method to set an event listener:

```js
pc.addEventListener("addstream", (ev) => doAddStream(ev.stream), false);
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.addStream()")}}
- {{domxref("MediaStreamEvent")}}
