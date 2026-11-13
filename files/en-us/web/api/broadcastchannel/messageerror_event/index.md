---
title: "BroadcastChannel: messageerror event"
short-title: messageerror
slug: Web/API/BroadcastChannel/messageerror_event
page-type: web-api-event
browser-compat: api.BroadcastChannel.messageerror_event
---

{{APIRef("BroadCastChannel API")}}{{AvailableInWorkers}}

The **`messageerror`** event of the {{domxref("BroadcastChannel")}} interface fires when a message that can't be deserialized arrives on the channel.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("messageerror", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onmessageerror = (event) => { }
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Examples

### Listening for messageerror events

This code uses {{domxref("EventTarget.addEventListener", "addEventListener()")}} to listen for messages and errors:

```js
const channel = new BroadcastChannel("example-channel");

channel.addEventListener("message", (event) => {
  received.textContent = event.data;
});

channel.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

The same, but using the `onmessage` and `onmessageerror` event handler properties (but note that this replaces other event listeners added using `onmessage` and `onmessageerror`, if any):

```js
const channel = new BroadcastChannel("example-channel");

channel.onmessage = (event) => {
  received.textContent = event.data;
};

channel.onmessageerror = (event) => {
  console.log(event);
};
```

### Attempting to share memory

A common cause of `messageerror` events is attempting to send a {{jsxref("SharedArrayBuffer")}} object, or a buffer view backed by one, across [agent clusters](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing). The following code demonstrates this.

Page A runs the following code:

```js
const channel = new BroadcastChannel("hello");
channel.postMessage({ data: new SharedArrayBuffer(1024) });
```

Page B runs the following code:

```js
const channel = new BroadcastChannel("hello");
channel.addEventListener("messageerror", (event) => {
  console.error("Message error");
});
```

Then page B will receive a `messageerror` event when it tries to deserialize the message sent from page A.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("BroadcastChannel/message_event", "message")}}.
