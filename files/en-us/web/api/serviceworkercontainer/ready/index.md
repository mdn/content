---
title: ServiceWorkerContainer.ready
slug: Web/API/ServiceWorkerContainer/ready
tags:
  - API
  - Property
  - Reference
  - Service worker API
  - ServiceWorker
  - ServiceWorkerContainer
browser-compat: api.ServiceWorkerContainer.ready
---
{{APIRef("Service Workers API")}}

The **`ready`** read-only property of
the {{domxref("ServiceWorkerContainer")}} interface provides a way of delaying code
execution until a service worker is active. It returns a {{jsxref("Promise")}} that
will never reject, and which waits indefinitely until
the {{domxref("ServiceWorkerRegistration")}} associated with the current page has
an {{domxref("ServiceWorkerRegistration.active","active")}} worker. Once that
condition is met, it resolves with
the {{domxref("ServiceWorkerRegistration")}}.

## Syntax

```js
navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { /* ... */ });
```

### Value

A {{jsxref("Promise")}} that will never reject, and which may eventually resolve with a
{{domxref("ServiceWorkerRegistration")}}.

## Example

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready
  .then(function(registration) {
    console.log('A service worker is active:', registration.active);

    // At this point, you can call methods that require an active
    // service worker, like registration.pushManager.subscribe()
  });
} else {
  console.log('Service workers are not supported.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
