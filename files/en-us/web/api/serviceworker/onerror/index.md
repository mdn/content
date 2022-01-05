---
title: ServiceWorker.onerror
slug: Web/API/ServiceWorker/onerror
tags:
  - API
  - ServiceWorker
  - EventHandler
  - Property
  - Reference
  - Web Workers
  - Workers
  - onerror
browser-compat: api.ServiceWorker.onerror
---
{{APIRef("Service Workers API")}}

The **`onerror`** property of the {{domxref("ServiceWorker")}} interface represents an [event handler](/en-US/docs/Web/Events/Event_handlers), that is a function to be called when the {{event("error")}} event occurs.

## Syntax

```js
myServiceWorker.onerror = function(event) { /* ... */ };
```

## Example

The following code snippet gets a handle to the {{domxref("ServiceWorker")}} object via {{domxref("ServiceWorkerRegistration.active")}} and sets up an `onerror` handler on the resulting object:

```js
// in the page being controlled
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('service-worker.js');

  navigator.serviceWorker.ready.then(registration => {
    registration.active.onerror = (event) => {
      console.log('An error occurred in the service worker!');
    };
  });

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
