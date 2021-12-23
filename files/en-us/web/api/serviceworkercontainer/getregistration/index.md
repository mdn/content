---
title: ServiceWorkerContainer.getRegistration()
slug: Web/API/ServiceWorkerContainer/getRegistration
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
browser-compat: api.ServiceWorkerContainer.getRegistration
---
{{APIRef("Service Workers API")}}

The **`getRegistration()`** method of the
{{domxref("ServiceWorkerContainer")}} interface gets a
{{domxref("ServiceWorkerRegistration")}} object whose scope URL matches the provided
client URL.  The method returns a {{jsxref("Promise")}} that resolves to
a {{domxref("ServiceWorkerRegistration")}} or `undefined`.

## Syntax

```js
serviceWorkerContainer.getRegistration(clientURL).then(function(serviceWorkerRegistration) { /* ... */ });
```

### Parameters

- `clientURL` {{optional_inline}}
  - : The registration whose scope matches this URL will be returned. Relative URLs are resolved with the current client as the base. If this parameter is not provided, the current client's URL will be used by default.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("ServiceWorkerRegistration")}}
object or `undefined`.

## Example

```js
navigator.serviceWorker.getRegistration('/app').then(function(registration) {
  if(registration){
    document.querySelector('#status').textContent = 'ServiceWorkerRegistration found.';
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
