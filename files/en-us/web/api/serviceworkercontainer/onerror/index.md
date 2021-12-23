---
title: ServiceWorkerContainer.onerror
slug: Web/API/ServiceWorkerContainer/onerror
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
  - onerror
browser-compat: api.ServiceWorkerContainer.onerror
---
{{APIRef("Service Workers API")}}{{Deprecated_header}}

The **`onerror`** property of the
{{domxref("ServiceWorkerContainer")}} interface is an event handler fired whenever an
{{Event("error")}} event occurs in the associated service workers.

## Syntax

```js
serviceWorkerContainer.onerror = function(errorevent) { /* ... */ }
```

## Example

```js
navigator.serviceWorker.onerror = function(errorevent) {
  console.log(`received error message: ${errorevent.message}`);
}
```

## Browser compatibility

{{Compat}}
