---
title: 'ServiceWorkerGlobalScope: message event'
slug: Web/API/ServiceWorkerGlobalScope/message_event
tags:
  - Event
  - Reference
  - Service worker API
  - ServiceWorkerGlobalScope
  - message
browser-compat: api.ServiceWorkerGlobalScope.message_event
---
{{APIRef}}

The **`message`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface occurs when incoming messages are received. Controlled pages can use the {{domxref("ServiceWorker.postMessage()")}} method to send messages to service workers.
The service worker can optionally send a response back via the {{domxref("Client.postMessage()")}}, corresponding to the controlled page.
This event is not cancellable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('message', event => { });

onmessage = event => { };
```

## Event type

An {{domxref("ExtendableMessageEvent")}}. Inherits from {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("ExtendableMessageEvent")}}

## Event properties

{{page("/en-us/docs/Web/API/ExtendableMessageEvent", "Properties")}}

## Examples

In the below example a page gets a handle to the {{domxref("ServiceWorker")}} object via {{domxref("ServiceWorkerRegistration.active")}}, and then calls its `postMessage()` function.

```js
// main.js
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
// service-worker.js
addEventListener('message', event => {
  // event is an ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`);

  event.source.postMessage("Hi client");
});
```

Alternatively, the script can listen for the message using `onmessage`:

```js
// service-worker.js
self.onmessage = event => {
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
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
