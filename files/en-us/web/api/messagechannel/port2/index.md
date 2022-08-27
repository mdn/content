---
title: MessageChannel.port2
slug: Web/API/MessageChannel/port2
page-type: web-api-instance-property
tags:
  - API
  - Channel messaging
  - HTML
  - MessageChannel
  - Property
  - Reference
  - port2
browser-compat: api.MessageChannel.port2
---
{{APIRef("HTML DOM")}}

The **`port2`** read-only property of the
{{domxref("MessageChannel")}} interface returns the second port of the message channel —
the port attached to the context at the other end of the channel, which the message is
initially sent to.

{{AvailableInWorkers}}

## Value

A {{domxref("MessagePort")}} object representing the second port of the channel, the
port attached to the context at the other end of the channel.

## Examples

In the following code block, you can see a new channel being created using the
{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} constructor. When the
IFrame has loaded, we pass `port2` to the IFrame using
{{domxref("MessagePort.postMessage")}} along with a message. The
`handleMessage` handler then responds to a message being sent back from the
IFrame (using {{domxref("MessagePort.message_event", "onmessage")}}), putting it into a paragraph.
{{domxref("MessageChannel.port1")}} is listened to, to check when the message arrives.

```js
const channel = new MessageChannel();
const para = document.querySelector('p');

const ifr = document.querySelector('iframe');
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

For a full working example, see our [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) on GitHub ([run it live too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
