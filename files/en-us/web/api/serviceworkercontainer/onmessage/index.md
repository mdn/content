---
title: ServiceWorkerContainer.onmessage
slug: Web/API/ServiceWorkerContainer/onmessage
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
browser-compat: api.ServiceWorkerContainer.onmessage
---
{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

The **`onmessage`** property of the
{{domxref("ServiceWorkerContainer")}} interface is an event handler fired whenever a
{{Event("message")}} event occurs — when incoming messages are received to the
{{domxref("ServiceWorkerContainer")}} object (e.g., via a
{{domxref("Client.postMessage()")}} call).

> **Note:** Messages received from service worker contexts (e.g. as the
> event object of onmessage) are represented by {{domxref("MessageEvent")}} objects in
> modern browsers, for consistency with other web messaging features. (They used to be
> represented by {{domxref("ServiceWorkerMessageEvent")}} objects, which have now been
> deprecated.)

## Syntax

```js
serviceWorkerContainer.onmessage = function(messageevent) { /* ... */ }
```

## Example

```js
navigator.serviceWorker.onmessage = function(messageevent) {
  console.log(`received data: ${messageevent.data}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
