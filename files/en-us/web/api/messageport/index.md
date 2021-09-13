---
title: MessagePort
slug: Web/API/MessagePort
tags:
  - API
  - Channel messaging
  - HTML5
  - Interface
  - MessagePort
  - Reference
browser-compat: api.MessagePort
---
{{APIRef("HTML DOM")}}

The **`MessagePort`** interface of the [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API) represents one of the two ports of a {{domxref("MessageChannel")}}, allowing messages to be sent from one port and listening out for them arriving at the other.

{{AvailableInWorkers}}

## Methods

_Inherits methods from its parent, {{domxref("EventTarget")}}_

- {{domxref("MessagePort.postMessage","postMessage()")}}
  - : Sends a message from the port, and optionally, transfers ownership of objects to other browsing contexts.
- {{domxref("MessagePort.start","start()")}}
  - : Starts the sending of messages queued on the port (only needed when using {{domxref("EventTarget.addEventListener")}}; it is implied when using {{domxref("MessagePort.onmessage")}}.)
- {{domxref("MessagePort.close","close()")}}
  - : Disconnects the port, so it is no longer active.

## Event handlers

_Inherits event handlers from its parent, {{domxref("EventTarget")}}_

- {{domxref("MessagePort.onmessage","onmessage")}}
  - : An {{domxref("EventListener")}} called when {{domxref("MessageEvent")}} of type `message` is fired on the port—that is, when the port receives a message.
- {{domxref("MessagePort.onmessageerror","onmessageerror")}}
  - : An {{domxref("EventListener")}} called when a {{domxref("MessageEvent")}} of type {{domxref("MessageError")}} is fired—that is, when it receives a message that cannot be deserialized.

## Events

- {{domxref("MessagePort.message_event","message")}}
  - : Fired when a `MessagePort` object receives a message.
    Also available via the {{domxref("MessagePort.onmessage","onmessage")}} property.
- {{domxref("MessagePort.messageerror_event","messageerror")}}
  - : Fired when a `MessagePort` object receives a message that can't be deserialized.
    Also available via the {{domxref("MessagePort.onmessageerror","onmessageerror")}} property.

## Example

In the following example, you can see a new channel being created using the {{domxref("MessageChannel.MessageChannel","MessageChannel()")}} constructor.

When the IFrame has loaded, we register an {{domxref("MessagePort.onmessage","onmessage")}} handler for {{domxref("MessageChannel.port1")}} and transfer {{domxref("MessageChannel.port2")}} to the IFrame using the {{domxref("window.postMessage")}} method along with a message.

When a message is received back from the IFrame, the `onMessage` function outputs the message to a paragraph.

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

For a full working example, see our [channel messaging basic demo](https://github.com/mdn/dom-examples/tree/master/channel-messaging-basic) on Github ([run it live too](https://mdn.github.io/dom-examples/channel-messaging-basic/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using channel messaging](/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging)
