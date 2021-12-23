---
title: RTCDataChannel.onopen
slug: Web/API/RTCDataChannel/onopen
tags:
  - Event Handler
  - Property
  - RTCDataChannel
  - Reference
  - WebRTC
  - onopen
browser-compat: api.RTCDataChannel.onopen
---
{{APIRef("WebRTC")}}

The **`RTCDataChannel.onopen`** property is an
[event handler](/en-US/docs/Web/Events/Event_handlers) which specifies a function to be called when the
{{DOMxRef("RTCDataChannel.open_event", "open")}} event is fired; this is a simple {{domxref("Event")}} which is sent
when the data channel's underlying data transport—the link over which the
{{domxref("RTCDataChannel")}}'s messages flow—is established or re-established.

## Syntax

```js
RTCDataChannel.onopen = function;
```

### Value

A function which the browser will call to handle the {{DOMxRef("RTCDataChannel.open_event", "open")}} event. The
function receives as its only input parameter the event itself, of type
{{domxref("Event")}}.

## Example

This example adds a new data channel to an existing {{domxref("RTCPeerConnection")}},
`myPeerConnection`. It then establishes an {{DOMxRef("RTCDataChannel.open_event", "open")}} event handler
which updates some user interface elements to prepare them for being used to send
messages over the data channel.

```js
let dc = myPeerConnection.createDataChannel("Message Channel");

dc.onopen = function(event) {
  let messageBox = document.getElementById("messageBox");
  let sendButton = document.getElementById("sendButton");

  messageBox.disabled = false;
  messageBox.focus();
  sendButton.disabled = false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- The {{DOMxRef("RTCDataChannel.open_event", "open")}} event and its type, {{domxref("Event")}}.
- {{domxref("RTCDataChannel.onclose")}}
- The {{DOMxRef("RTCDataChannel.close_event", "close")}} event and its type, {{domxref("Event")}}.
