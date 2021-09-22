---
title: RTCDataChannel.onerror
slug: Web/API/RTCDataChannel/onerror
tags:
  - Event Handler
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - onerror
browser-compat: api.RTCDataChannel.onerror
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel.onerror`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called when the
{{DOMxRef("RTCDataChannel.error_event", "error")}} event is received. When an error occurs on the data channel, the
function receives as input an {{domxref("RTCErrorEvent")}} object describing the error
which occurred.

## Syntax

```js
RTCDataChannel.onerror = function;
```

### Value

A function which the browser will call to handle the {{DOMxRef("RTCDataChannel.error_event", "error")}} event when it
occurs on the data channel. This function receives as its only input an
{{domxref("ErrorEvent")}} object describing the event which was received. That event
object, in turn, describes the error that took place.

## Example

In the example below, a data channel is established, and an `onerror`
handler is added to it. The error handler passes information about the error to a UI
library's alert box function to present an error message to the user.

```js
let pc = new RTCPeerConnection();
let dc = pc.createDataChannel("PlayerControl");

dc.onerror = function(event) {
  myUILibrary.doAlertBox('Network Error', // Alert title
    `The error ${event.message} occurred while handling player control network messages`, // Error msg
    event.filename, event.lineno, event.colno); // Error location
}

/* ... */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- The {{DOMxRef("RTCDataChannel.error_event", "error")}} event and its type, {{domxref("ErrorEvent")}}.
