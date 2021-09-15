---
title: RTCDataChannel.onclose
slug: Web/API/RTCDataChannel/onclose
tags:
  - Event Handler
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - onclose
browser-compat: api.RTCDataChannel.onclose
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel.onclose`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called by the browser when
the {{DOMxRef("RTCDataChannel.close_event", "close")}} event is received by the {{domxref("RTCDataChannel")}}. This is a
simple {{domxref("Event")}} which indicates that the data channel has closed down.

## Syntax

```js
RTCDataChannel.onclose = function;
```

### Value

A function which the browser will call to handle the {{DOMxRef("RTCDataChannel.close_event", "close")}} event. The
function receives as its sole input parameter the event itself, as an object of type
{{domxref("Event")}}.

## Example

In this sample from a hypothetical instant messaging client, a data channel is created,
then handlers for the {{DOMxRef("RTCDataChannel.open_event", "open")}} and {{DOMxRef("RTCDataChannel.close_event", "close")}} events are set up to
enable and disable user interface objects based on the state of the channel. This way,
the message entry field and the send button are only enabled for use when the connection
is actually open.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("MessageChannel")}};

dc.onopen = function(event) {
  document.getElementById("messageBox").disabled = false;
  document.getElementById("sendButton").disabled = false;
};

dc.onclose = function(event) {
  document.getElementById("messageBox").disabled = true;
  document.getElementById("sendButton").disabled = true;
}

/* Now negotiate the connection, etc... */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- The {{DOMxRef("RTCDataChannel.close_event", "close")}} event and its type, {{domxref("Event")}}.
- {{domxref("RTCDataChannel.onopen")}}
- The {{DOMxRef("RTCDataChannel.open_event", "open")}} event and its type, {{domxref("Event")}}.
