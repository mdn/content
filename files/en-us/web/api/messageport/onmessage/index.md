---
title: MessagePort.onmessage
slug: Web/API/MessagePort/onmessage
tags:
  - API
  - Channel messaging
  - MessagePort
  - Property
  - Reference
  - onmessage
browser-compat: api.MessagePort.onmessage
---
{{APIRef("HTML DOM")}}

The **`onmessage`** event handler of the
{{domxref("MessagePort")}} interface is an {{domxref("EventListener")}}, called whenever
an {{domxref("MessageEvent")}} of type `message` is fired on the port — that
is, when the port receives a message.

{{AvailableInWorkers}}

## Syntax

```js
channel.onmessage = function() { /* ... */ };
```

## Example

In the following code block, you can see a new channel being created using the
{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} constructor. When the
IFrame has loaded, we pass {{domxref("MessageChannel.port2")}} to the IFrame using
{{domxref("MessagePort.postMessage")}} along with a message. The
`handleMessage` handler then responds to a message being sent back from the
IFrame using `onmessage`, putting it into a paragraph —
{{domxref("MessageChannel.port1")}} is listened to, to check when the message arrives.

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

For a full working example, see our [channel messaging basic
demo](https://github.com/mdn/channel-messaging-basic-demo) on Github ([run it live too](https://mdn.github.io/channel-messaging-basic-demo/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
