---
title: ExtendableMessageEvent
slug: Web/API/ExtendableMessageEvent
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Interface
  - Reference
  - Service Workers
browser-compat: api.ExtendableMessageEvent
---
{{APIRef("Service Workers API")}}

The **`ExtendableMessageEvent`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) represents the event object of a {{event("message_(ServiceWorker)","message")}} event fired on a service worker (when a message is received on the {{domxref("ServiceWorkerGlobalScope")}} from another context) — extends the lifetime of such events.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

## Constructor

- {{domxref("ExtendableMessageEvent.ExtendableMessageEvent","ExtendableMessageEvent()")}}
  - : Creates a new `ExtendableMessageEvent` object instance.

## Properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}}_.

- {{domxref("ExtendableMessageEvent.data")}} {{readonlyinline}}
  - : Returns the event's data. It can be any data type.
- {{domxref("ExtendableMessageEvent.origin")}} {{readonlyinline}}
  - : Returns the origin of the {{domxref("Client")}} that sent the message.
- {{domxref("ExtendableMessageEvent.lastEventId")}} {{readonlyinline}}
  - : Represents, in [server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events), the last event ID of the event source. This is an empty string.
- {{domxref("ExtendableMessageEvent.source")}} {{readonlyinline}}
  - : Returns a reference to the {{domxref("Client")}} object that sent the message.
- {{domxref("ExtendableMessageEvent.ports")}} {{readonlyinline}}
  - : Returns the array containing the {{domxref("MessagePort")}} objects representing the ports of the associated message channel.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

## Examples

In the below example a page gets a handle to the {{domxref("ServiceWorker")}} object via {{domxref("ServiceWorkerRegistration.active")}}, and then calls its `postMessage()` function.

```js
// in the page being controlled
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.addEventListener('message', event => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
  });

  navigator.serviceWorker.ready.then( registration => {
    registration.active.postMessage("Hi service worker");
  });

}
```

The service worker can receive the message by listening to the `message` event:

```js
// in the service worker
addEventListener('message', event => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Channel Messaging](/en-US/docs/Web/API/Channel_Messaging_API)
