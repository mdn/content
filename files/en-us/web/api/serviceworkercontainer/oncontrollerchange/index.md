---
title: ServiceWorkerContainer.oncontrollerchange
slug: Web/API/ServiceWorkerContainer/oncontrollerchange
tags:
  - API
  - Experimental
  - Interface
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
  - onchange
browser-compat: api.ServiceWorkerContainer.oncontrollerchange
---
{{APIRef("Service Workers API")}}{{ SeeCompatTable() }}

The **`oncontrollerchange`** property of the
{{domxref("ServiceWorkerContainer")}} interface is an event handler fired whenever a
{{Event("controllerchange")}} event occurs — when the document's associated
{{domxref("ServiceWorkerRegistration")}} acquires a new
{{domxref("ServiceWorkerRegistration.active","active")}} worker.

## Syntax

```js
serviceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { /* ... */ }
```

## Example

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
