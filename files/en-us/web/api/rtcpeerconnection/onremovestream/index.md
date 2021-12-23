---
title: RTCPeerConnection.onremovestream
slug: Web/API/RTCPeerConnection/onremovestream
tags:
  - Event Handler
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - Deprecated
browser-compat: api.RTCPeerConnection.onremovestream
---
{{APIRef("WebRTC")}}{{deprecated_header}}

> **Warning:** The {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}} event has been removed from the WebRTC specification in favor of the existing {{DOMxRef("RTCPeerConnection/removetrack_event", "removetrack")}} event on the remote {{domxref("MediaStream")}} and the corresponding {{domxref("MediaStream.onremovetrack")}} event handler property of the remote {{domxref("MediaStream")}}. The {{domxref("RTCPeerConnection")}} API is now track-based, so having zero tracks in the remote stream is equivalent to the remote stream being removed and the old removestream event.

The **`RTCPeerConnection.onremovestream`** event handler is a property containing the code to execute when the {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}} event, of type {{domxref("MediaStreamEvent")}}, is received by this {{domxref("RTCPeerConnection")}}. Such an event is sent when a {{domxref("MediaStream")}} is removed from this connection.

## Syntax

```js
peerconnection.onremovestream = function;
```

### Values

- `function` is the name of a user-defined function, without the `()` suffix or any parameters, or an anonymous function declaration, such as `function(event) {...}`. An event handler always has one single parameter, containing the event, here of type {{domxref("MediaStreamEvent")}}.

## Example

```js
pc.onremovestream = function(ev) { alert("onremovestream event detected!"); };
```

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}} event and its type, {{domxref("MediaStreamEvent")}}.
