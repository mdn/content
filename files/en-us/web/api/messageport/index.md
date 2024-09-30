---
title: MessagePort
slug: Web/API/MessagePort
page-type: web-api-interface
browser-compat: api.MessagePort
---

{{APIRef("Channel Messaging API")}} {{AvailableInWorkers}}

The **`MessagePort`** interface of the [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API) represents one of the two ports of a {{domxref("MessageChannel")}}, allowing messages to be sent from one port and listening out for them arriving at the other.

`MessagePort` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instance methods

_Inherits methods from its parent, {{domxref("EventTarget")}}_.

- {{domxref("MessagePort.postMessage","postMessage()")}}
  - : Sends a message from the port, and optionally, transfers ownership of objects to other browsing contexts.
- {{domxref("MessagePort.start","start()")}}
  - : Starts the sending of messages queued on the port (only needed when using {{domxref("EventTarget.addEventListener")}}; it is implied when using {{domxref("MessagePort.message_event", "onmessage")}}).
- {{domxref("MessagePort.close","close()")}}
  - : Disconnects the port, so it is no longer active.

## Events

_Inherits events from its parent, {{domxref("EventTarget")}}_.

- {{domxref("MessagePort.message_event","message")}}
  - : Fired when a `MessagePort` object receives a message.
- {{domxref("MessagePort.messageerror_event","messageerror")}}
  - : Fired when a `MessagePort` object receives a message that can't be deserialized.

## Example

In the following example, you can see a new channel being created using the {{domxref("MessageChannel.MessageChannel","MessageChannel()")}} constructor.

When the IFrame has loaded, we register an {{domxref("MessagePort/message_event","onmessage")}} handler for {{domxref("MessageChannel.port1")}} and transfer {{domxref("MessageChannel.port2")}} to the IFrame using the {{domxref("window.postMessage")}} method along with a message.

When a message is received back from the IFrame, the `onMessage` function outputs the message to a paragraph.

```js
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.querySelector("iframe");

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;

  // Transfer port2 to the iframe
  iframe.contentWindow.postMessage("Hello from the main page!", "*", [
    channel.port2,
  ]);
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}
```

For a full working example, see our [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/main/channel-messaging-basic) on GitHub ([run it live too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
