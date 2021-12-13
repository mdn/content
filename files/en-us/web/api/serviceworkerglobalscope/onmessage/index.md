---
title: ServiceWorkerGlobalScope.onmessage
slug: Web/API/ServiceWorkerGlobalScope/onmessage
tags:
  - API
  - Property
  - Reference
  - Service
  - ServiceWorker
  - ServiceWorkerGlobalScope
  - Workers
  - onmessage
browser-compat: api.ServiceWorkerGlobalScope.onmessage
---
{{APIRef("Service Workers API")}}

The **onmessage** property of the {{domxref("ServiceWorkerGlobalScope")}}
interface is an event handler fired whenever a
{{domxref("ServiceWorkerGlobalScope.message_event","message")}} event occurs — when
incoming messages are received.

> **Note:** Service workers define the extendable event to allow extending
> the lifetime of the event. For the `message` event, service workers use the
> {{domxref("ExtendableMessageEvent")}} interface which extends the
> {{domxref("ExtendableEvent")}} interface.

> **Note:** Messages received from service worker contexts (e.g. as the
> event object of `onmessage`) are represented by {{domxref("MessageEvent")}}
> objects in modern browsers, for consistency with other web messaging features. (They
> used to be represented by {{domxref("ServiceWorkerMessageEvent")}} objects, which have
> now been deprecated.)

## Syntax

```js
serviceWorkerGlobalScope.onmessage = function(extendableMessageEvent) { /* ... */ };
```

## Example

```js
self.addEventListener('message', function(messageEvent) {
  console.log('Handling message event:', messageEvent);
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
