---
title: "ServiceWorkerGlobalScope: messageerror event"
short-title: messageerror
slug: Web/API/ServiceWorkerGlobalScope/messageerror_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.messageerror_event
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`messageerror`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface occurs when incoming messages can't be deserialized.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Event type

An {{domxref("ExtendableMessageEvent")}}. Inherits from {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Event properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableMessageEvent.data")}} {{ReadOnlyInline}}
  - : Returns the event's data. It can be any data type. If dispatched in `messageerror` event, the property will be `null`.
- {{domxref("ExtendableMessageEvent.origin")}} {{ReadOnlyInline}}
  - : Returns the origin of the {{domxref("Client")}} that sent the message.
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Represents, in [server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events), the last event ID of the event source.
- {{domxref("ExtendableMessageEvent.source")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("Client")}} object that sent the message.
- {{domxref("ExtendableMessageEvent.ports")}} {{ReadOnlyInline}}
  - : Returns the array containing the {{domxref("MessagePort")}} objects representing the ports of the associated message channel.

## Examples

In the below example a page gets a handle to the {{domxref("ServiceWorker")}} object via {{domxref("ServiceWorkerRegistration.active")}}, and then calls its `postMessage()` function.

```js
// main.js
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage("Hi service worker");
  });
}
```

The service worker can listen for the message deserialization error by listening to the `messageerror` event:

```js
// service-worker.js
self.addEventListener("messageerror", (event) => {
  // event is an ExtendableMessageEvent object
  console.error("Message deserialization failed");
});
```

Alternatively, the script can listen for the message deserialization error using `onmessageerror`:

```js
// service-worker.js
self.onmessageerror = (event) => {
  // event is an ExtendableMessageEvent object
  console.error("Message deserialization failed");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
- {{domxref("ServiceWorker.postMessage()")}}
- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
