---
title: ServiceWorkerContainer.ready
slug: Web/API/ServiceWorkerContainer/ready
page-type: web-api-instance-property
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
the {{domxref("ServiceWorkerRegistration")}} associated with the current page has
an {{domxref("ServiceWorkerRegistration.active","active")}} worker. Once that
condition is met, it resolves with
the {{domxref("ServiceWorkerRegistration")}}.

## Value

A {{jsxref("Promise")}} that will never reject, and which may eventually resolve with a
{{domxref("ServiceWorkerRegistration")}}.

## Examples

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready
  .then((registration) => {
    console.log(`A service worker is active: ${registration.active}`);

    // At this point, you can call methods that require an active
    // service worker, like registration.pushManager.subscribe()
  });
} else {
  console.error('Service workers are not supported.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
