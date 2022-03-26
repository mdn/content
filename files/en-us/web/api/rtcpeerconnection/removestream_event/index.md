---
title: 'RTCPeerConnection: removestream event'
slug: Web/API/RTCPeerConnection/removestream_event
tags:
  - API
  - Event
  - Managing Streams
  - Media
  - MediaStream
  - RTCPeerConnection
  - Reference
  - Removing Streams
  - Streams
  - WebRTC
  - WebRTC API
  - removeStream
  - Deprecated
browser-compat: api.RTCPeerConnection.removestream_event
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The obsolete **`removestream`** event was sent to an {{domxref("RTCPeerConnection")}} to inform it that a {{domxref("MediaStream")}} had been removed from the connection.
You can use the `RTCPeerConnection` interface's `onremovestream` property to set a handler for this event.

This is the counterpart to the {{domxref("RTCPeerConnection.addstream_event", "addstream")}} event, which is also obsolete.

> **Warning:** This event has been removed from the WebRTC specification in favor of the existing {{DOMxRef("RTCPeerConnection/removetrack_event", "removetrack")}} event on the remote {{domxref("MediaStream")}} and the corresponding event handler property of the remote {{domxref("MediaStream")}}. The {{domxref("RTCPeerConnection")}} API is now track-based, so having zero tracks in the remote stream is equivalent to the remote stream being removed, which caused a `removestream` event.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('removestream', event => { });

onremovestream = event => { };
```

## Event type

An {{domxref("MediaStreamEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MediaStreamEvent")}}

## Event properties

_A {{domxref("MediaStreamEvent")}} being an {{domxref("Event")}}, this event also implements these properties_.

- {{domxref("MediaStreamEvent.stream")}} {{readOnlyInline}}
  - : Contains the {{domxref("MediaStream")}} containing the stream associated with the event.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.removeStream()")}}
- {{domxref("MediaStream.removetrack_event", "removetrack")}}
