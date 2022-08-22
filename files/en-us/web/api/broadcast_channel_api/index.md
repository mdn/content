---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
page-type: web-api-overview
tags:
  - API
  - Broadcast Channel API
  - HTML API
  - Overview
  - Reference
browser-compat: api.BroadcastChannel
---
{{DefaultAPISidebar("Broadcast Channel API")}}

The **Broadcast Channel API** allows basic communication between {{glossary("browsing context", "browsing contexts")}} (that is, _windows_, _tabs_, _frames_, or _iframes_) and workers on the same {{glossary("origin")}}.

{{AvailableInWorkers}}

By creating a {{domxref("BroadcastChannel")}} object, you can receive any messages that are posted to it. You don't have to maintain a reference to the frames or workers you wish to communicate with: they can "subscribe" to a particular channel by constructing their own {{domxref("BroadcastChannel")}} with the same name, and have bi-directional communication between all of them.

![The principle of the Broadcast Channel API](broadcastchannel.png)

## Broadcast Channel interface

### Creating or joining a channel

A client joins a broadcast channel by creating a {{domxref("BroadcastChannel")}} object. Its [constructor](/en-US/docs/Web/API/BroadcastChannel/BroadcastChannel) takes one single parameter: the _name_ of the channel. If it is the first to connect to that broadcast channel name, the underlying channel is created.

```js
// Connection to a broadcast channel
const bc = new BroadcastChannel('test_channel');
```

### Sending a message

It is enough to call the {{domxref("BroadcastChannel.postMessage", "postMessage()")}} method on the created `BroadcastChannel` object, which takes any object as an argument. An example string message:

```js
// Example of sending of a very simple message
bc.postMessage('This is a test message.');
```

Data sent to the channel is serialized using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). That means you can send a broad variety of data objects safely without having to serialize them yourself.

The API doesn't associate any semantics to messages, so it is up to the code to know what kind of messages to expect and what to do with them.

### Receiving a message

When a message is posted, a [`message`](/en-US/docs/Web/API/BroadcastChannel/message_event) event is dispatched to each {{domxref("BroadcastChannel")}} object connected to this channel. A function can be run for this event using the {{domxref("BroadcastChannel/message_event", "onmessage")}} event handler:

```js
// A handler that only logs the event to the console:
bc.onmessage = (event) => { console.log(event); }
```

### Disconnecting a channel

To leave a channel, call the {{domxref("BroadcastChannel.close", "close()")}} method on the object. This disconnects the object from the underlying channel, allowing garbage collection.

```js
// Disconnect the channel
bc.close();
```

## Conclusion

The Broadcast Channel API's self-contained interface allows cross-context communication. It can be used to detect user actions in other tabs within a same origin, like when the user logs in or out.

The messaging protocol is not defined and the different browsing contexts need to implement it themselves; there is no negotiation nor requirement from the specification.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BroadcastChannel")}}, the interface implementing it.
