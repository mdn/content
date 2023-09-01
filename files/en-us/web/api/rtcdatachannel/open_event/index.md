---
title: "RTCDataChannel: open event"
short-title: open
slug: Web/API/RTCDataChannel/open_event
page-type: web-api-event
browser-compat: api.RTCDataChannel.open_event
---

{{APIRef("WebRTC")}}

The WebRTC **`open`** event is sent to an {{domxref("RTCDataChannel")}} object's `onopen` event handler when the underlying transport used to send and receive the data channel's messages is opened or reopened.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Event type

An {{domxref("RTCDataChannelEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCDataChannelEvent")}}

## Event properties

_Also inherits properties from its parent interface, {{DOMxRef("Event")}}._

- {{DOMxRef("RTCDataChannelEvent.channel", "channel")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("RTCDataChannel")}} associated with the event.

## Examples

This example adds to the {{domxref("RTCDataChannel")}} `dc` a handler for the `open` event that adjusts the user interface to indicate that a chat window is ready to be used after a connection has been established. It enables the message input box and send button as well as enabling the disconnect button and disabling the connect button. Finally, the message input box is focused so the user can immediately begin to type.

```js
dc.addEventListener(
  "open",
  (ev) => {
    messageInputBox.disabled = false;
    sendMessageButton.disabled = false;
    disconnectButton.disabled = false;
    connectButton.disabled = true;

    messageInputBox.focus();
  },
  false,
);
```

This can also be done by directly setting the value of the channel's `onopen` event handler property.

```js
dc.onopen = (ev) => {
  messageInputBox.disabled = false;
  sendMessageButton.disabled = false;
  disconnectButton.disabled = false;
  connectButton.disabled = true;

  messageInputBox.focus();
};
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [A simple RTCDataChannel example](/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- Related events: {{domxref("RTCDataChannel.message_event", "message")}}, {{domxref("RTCDataChannel.close_event", "close")}}, and {{domxref("RTCDataChannel.error_event", "error")}}
