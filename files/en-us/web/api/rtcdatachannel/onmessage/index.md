---
title: RTCDataChannel.onmessage
slug: Web/API/RTCDataChannel/onmessage
tags:
  - Event Handler
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - onmessage
browser-compat: api.RTCDataChannel.onmessage
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel.onmessage`** property stores an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called when the
{{DOMxRef("RTCDataChannel.message_event", "message")}} event is fired on the channel. This event is represented by the
{{domxref("MessageEvent")}} interface. This event is sent to the channel when a message
is received from the other peer.

## Syntax

```js
RTCDataChannel.onmessage = function;
```

### Value

A function which the browser will call to handle the {{DOMxRef("RTCDataChannel.message_event", "message")}} event. The
function receives as its sole input parameter a {{domxref("MessageEvent")}} object
describing the event.

## Example

This code snippet creates a peer connection, adds a data channel to it, and starts
creating new {{HTMLElement("p")}} (paragraph) elements each time a message arrives, with
the message's contents displayed inside it. The new elements are then attached to the
end of the document.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel();

dc.onmessage = function(event) {
  var el = document.createElement("p");
  var txtNode = document.createTextNode(event.data);

  el.appendChild(txtNode);
  receiveBox.appendChild(el);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCDataChannel")}}
- The {{DOMxRef("RTCDataChannel.message_event", "message")}} event and its type, {{domxref("MessageEvent")}}.
