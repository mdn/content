---
title: MessageChannel
slug: Web/API/MessageChannel
tags:
  - API
  - Channel Messaging API
  - Interface
  - MessageChannel
  - Reference
  - web messaging
browser-compat: api.MessageChannel
---
{{APIRef("HTML DOM")}}

The **`MessageChannel`** interface of the [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API) allows us to create a new message channel and send data through it via its two {{domxref("MessagePort")}} properties.

{{AvailableInWorkers}}

## Properties

- {{domxref("MessageChannel.port1")}} {{readonlyInline}}
  - : Returns port1 of the channel.
- {{domxref("MessageChannel.port2")}} {{readonlyInline}}
  - : Returns port2 of the channel.

## Constructor

- {{domxref("MessageChannel.MessageChannel", "MessageChannel()")}}
  - : Returns a new `MessageChannel` object with two new {{domxref("MessagePort")}} objects.

## Example

In the following example, you can see a new channel being created using the {{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} constructor.

When the IFrame has loaded, we register an `onmessage` handler for  {{domxref("MessageChannel.port1")}} and transfer {{domxref("MessageChannel.port2")}} to the IFrame using the {{domxref("window.postMessage")}} method along with a message.

When a message is received back from the IFrame, the `onMessage` function outputs the message to a paragraph.

```js
var channel = new MessageChannel();
var output = document.querySelector('.output');
var iframe = document.querySelector('iframe');

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage('Hello from the main page!', '*', [channel.port2]);
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}
```

For a full working example, see our [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic) on Github ([run it live too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
