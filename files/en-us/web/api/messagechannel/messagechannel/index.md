---
title: "MessageChannel: MessageChannel() constructor"
short-title: MessageChannel()
slug: Web/API/MessageChannel/MessageChannel
page-type: web-api-constructor
browser-compat: api.MessageChannel.MessageChannel
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

The **`MessageChannel()`** constructor of the {{domxref("MessageChannel")}}
interface returns a new {{domxref("MessageChannel")}} object with two new
{{domxref("MessagePort")}} objects.

## Syntax

```js-nolint
new MessageChannel()
```

### Parameters

None ({{jsxref("undefined")}}).

### Return value

A new {{domxref("MessageChannel")}} object.

## Examples

In the following code block, you can see a new channel being created using the
`MessageChannel()` constructor.
When the {{HTMLElement("iframe")}} has loaded,
we pass {{domxref("MessageChannel.port2", "port2")}} to the `<iframe>` using {{domxref("MessagePort.postMessage")}} along with a message.
The `handleMessage` handler then responds to a message being sent back from the
`<iframe>` (using {{domxref("MessagePort.message_event", "onmessage")}}), putting it into a paragraph.
The {{domxref("MessageChannel.port1", "port1")}} is listened to, to check when the message arrives.

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Hello from the main page!", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}
```

For a full working example,
see our [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic)
on GitHub ([run it live too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
