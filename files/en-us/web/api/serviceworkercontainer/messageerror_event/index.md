---
title: "ServiceWorkerContainer: messageerror event"
short-title: messageerror
slug: Web/API/ServiceWorkerContainer/messageerror_event
page-type: web-api-event
browser-compat: api.ServiceWorkerContainer.messageerror_event
---

{{APIRef}}

The **`messageerror`** event is used in a page controlled by a service worker to listen when incoming messages can't be deserialized.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener()", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Event type

A {{domxref("MessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Event properties

_This interface also inherits properties from its parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : The data sent by the message emitter.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : A string representing the origin of the message emitter.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : A string representing a unique ID for the event.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : A `MessageEventSource` (which can be a {{glossary("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) representing the message emitter.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : An array of {{domxref("MessagePort")}} objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker).

## Examples

In this example the service worker get the client's ID from a {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}} event and then sends it a message using {{domxref("Client.postMessage")}}:

```js
// service-worker.js
async function messageClient(clientId) {
  const client = await self.clients.get(clientId);
  client.postMessage("Hi client!");
}

self.addEventListener("fetch", (event) => {
  messageClient(event.clientId);
  event.respondWith(() => {
    // …
  });
});
```

The service worker can listen for the message deserialization error by listening to the `messageerror` event:

```js
// main.js
navigator.serviceWorker.addEventListener("messageerror", (event) => {
  console.error("Receive message from service worker failed!");
});
```

Alternatively, the script can listen for the message deserialization error using `onmessageerror`:

```js
// main.js
navigator.serviceWorker.onmessageerror = (event) => {
  console.error("Receive message from service worker failed!");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Using Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
