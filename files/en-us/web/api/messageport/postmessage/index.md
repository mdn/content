---
title: MessagePort.postMessage()
slug: Web/API/MessagePort/postMessage
tags:
  - API
  - Channel messaging
  - MessagePort
  - Method
  - Reference
  - postMessage
browser-compat: api.MessagePort.postMessage
---
{{APIRef("HTML DOM")}}

The **`postMessage()`** method of the
{{domxref("MessagePort")}} interface sends a message from the port, and optionally,
transfers ownership of objects to other browsing contexts.

{{AvailableInWorkers}}

## Syntax

```js
port.postMessage(message, transferList);
```

### Returns

{{jsxref('undefined')}}.

### Parameters

- message
  - : The message you want to send through the channel. This can be of any basic data
    type. Multiple data items can be sent as an array.
- transferList {{optional_inline}}
  - : {{domxref("Transferable")}} objects to be transferred — these objects have their
    ownership transferred to the receiving browsing context, so are no longer usable by
    the sending browsing context.

## Example

In the following code block, you can see a new channel being created using the
{{domxref("MessageChannel()", "MessageChannel.MessageChannel")}} constructor. When the
IFrame has loaded, we pass {{domxref("MessageChannel.port2")}} to the IFrame using
{{domxref("window.postMessage")}} along with a message. The iframe receives the message,
and sends a message back on the MessageChannel using {{domxref("MessageChannel.postMessage")}}.
The `handleMessage` handler then responds to a message being sent back from the iframe using
`onmessage`, putting it into a paragraph —
{{domxref("MessageChannel.port1")}} is listened to, to check when the message arrives.

```js
var channel = new MessageChannel();
var para = document.querySelector('p');

var ifr = document.querySelector('iframe');
var otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage('Transferring message port', '*', [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}

// in the iframe...

window.addEventListener('message', function (event) {
  const messagePort = event.ports?.[0];
  messagePort.postMessage("Hello from the iframe!");
});
```

For a full working example, see our [channel
messaging basic demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic) on Github ([run it live
too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
