---
title: RTCPeerConnection.onconnectionstatechange
slug: Web/API/RTCPeerConnection/onconnectionstatechange
tags:
  - API
  - Connection State
  - Event Handler
  - ICE
  - Property
  - RTCPeerConnection
  - Reference
  - WebRTC
  - onconnectionstatechange
browser-compat: api.RTCPeerConnection.onconnectionstatechange
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection.onconnectionstatechange`** property
specifies an [event handler](/en-US/docs/Web/Events/Event_handlers)
which is called to handle the {{DOMxRef("RTCPeerConnection/connectionstatechange_event", "connectionstatechange")}} event
when it occurs on an instance of {{domxref("RTCPeerConnection")}}.
This happens whenever the aggregate state of the connection changes.
The aggregate state is a combination
of the states of all of the individual network transports
being used by the connection.

## Syntax

```js
RTCPeerConnection.onconnectionstatechange = eventHandler;
```

### Value

A function which is called by the browser when the {{DOMxRef("RTCPeerConnection/connectionstatechange_event", "connectionstatechange")}}
event occurs on the {{domxref("RTCPeerConnection")}}. The function receives as input a
single parameter, which is an object of type {{domxref("Event")}}. The event object
contains no special information of note; you can look at the value of the peer
connection's {{domxref("RTCPeerConnection.connectionState", "connectionState")}}
property to determine what the new state is.

## Example

```js
pc.onconnectionstatechange = function(event) {
  switch(pc.connectionState) {
    case "connected":
      // The connection has become fully connected
      break;
    case "disconnected":
    case "failed":
      // One or more transports has terminated unexpectedly or in an error
      break;
    case "closed":
      // The connection has been closed
      break;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("RTCPeerConnection/connectionstatechange_event", "connectionstatechange")}} event and its type, {{domxref("Event")}}.
