---
title: "MessagePort: postMessage() method"
short-title: postMessage()
slug: Web/API/MessagePort/postMessage
page-type: web-api-instance-method
browser-compat: api.MessagePort.postMessage
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

The **`postMessage()`** method of the
{{domxref("MessagePort")}} interface sends a message from the port, and optionally,
transfers ownership of objects to other browsing contexts.

## Syntax

```js-nolint
postMessage(message)
postMessage(message, options)
postMessage(message, transfer)
```

### Parameters

- `message`
  - : The message you want to send through the channel. This can be of any basic data type. Multiple data items can be sent as an array.
- `options` {{optional_inline}}
  - : An optional object containing a `transfer` field with an [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) to transfer ownership of. The ownership of these objects is given to the destination side and they are no longer usable on the sending side.
- `transfer` {{optional_inline}}
  - : An optional [array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [transferable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) to transfer ownership of. The ownership of these objects is given to the destination side and they are no longer usable on the sending side.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In the following code block, you can see a new channel being created using the
{{domxref("MessageChannel.MessageChannel", "MessageChannel()")}} constructor. When the
IFrame has loaded, we pass {{domxref("MessageChannel.port2")}} to the IFrame using
{{domxref("window.postMessage")}} along with a message. The iframe receives the message,
and sends a message back on the `MessageChannel` using `postMessage()`.
The `handleMessage` handler then responds to a message being sent back from the iframe using
`onmessage`, putting it into a paragraph —
{{domxref("MessageChannel.port1")}} is listened to, to check when the message arrives.

```js
const channel = new MessageChannel();
const para = document.querySelector("p");

const ifr = document.querySelector("iframe");
const otherWindow = ifr.contentWindow;

ifr.addEventListener("load", iframeLoaded, false);

function iframeLoaded() {
  otherWindow.postMessage("Transferring message port", "*", [channel.port2]);
}

channel.port1.onmessage = handleMessage;
function handleMessage(e) {
  para.innerHTML = e.data;
}

// in the iframe…

window.addEventListener("message", (event) => {
  const messagePort = event.ports?.[0];
  messagePort.postMessage("Hello from the iframe!");
});
```

For a full working example, see our [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) on GitHub ([run it live too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
