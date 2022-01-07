---
title: ServiceWorkerContainer.getRegistrations()
slug: Web/API/ServiceWorkerContainer/getRegistrations
tags:
  - API
  - Experimental
  - Method
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
browser-compat: api.ServiceWorkerContainer.getRegistrations
---
{{APIRef("Service Workers API")}}

The **`getRegistrations()`** method of the
{{domxref("ServiceWorkerContainer")}} interface gets all
{{domxref("ServiceWorkerRegistration")}}s associated with a
`ServiceWorkerContainer`, in an array. The method returns a
{{jsxref("Promise")}} that resolves to an array of
{{domxref("ServiceWorkerRegistration")}}.

## Syntax

```js
serviceWorkerContainer.getRegistrations().then(function(serviceWorkerRegistrations) { /* ... */ });
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an array of
{{domxref("ServiceWorkerRegistration")}} objects.

## Example

```js
navigator.serviceWorker.getRegistrations().then(function(registrations) {
  document.querySelector('#status').textContent = 'ServiceWorkerRegistrations found.';
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
