---
title: MessageChannel.port1
slug: Web/API/MessageChannel/port1
tags:
  - API
  - Channel messaging
  - HTML5
  - Message Channel API
  - MessageChannel
  - Property
  - Reference
browser-compat: api.MessageChannel.port1
---
{{APIRef("HTML DOM")}}

The **`port1`** read-only property of the
{{domxref("MessageChannel")}} interface returns the first port of the message channel —
the port attached to the context that originated the channel.

{{AvailableInWorkers}}

## Syntax

```js
channel.port1;
```

### Value

A {{domxref("MessagePort")}} object, the first port of the channel, that is the port
attached to the context that originated the channel.

## Example

In the following code block, you can see a new channel being created using the
{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} constructor. When the
{{HTMLElement("iframe")}} has loaded, we pass {{domxref("MessageChannel.port2")}} to the
{{HTMLElement("iframe")}} using {{domxref("MessagePort.postMessage")}} along with a
message. The `handleMessage` handler then responds to a message being sent
back from the `<iframe>` (using {{domxref("MessagePort.onmessage")}}),
putting it into a paragraph. The `handleMessage` method is associated to the
`port1` to listen when the message arrives.

```js
var channel = new MessageChannel();
var para = document.querySelector('p');

var ifr = document.querySelector('iframe');
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
