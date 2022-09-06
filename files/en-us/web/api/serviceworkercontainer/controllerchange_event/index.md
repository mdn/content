---
title: 'ServiceWorkerContainer: controllerchange event'
slug: Web/API/ServiceWorkerContainer/controllerchange_event
page-type: web-api-event
tags:
  - API
  - Interface
  - Event
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerContainer
  - controllerchange
browser-compat: api.ServiceWorkerContainer.controllerchange_event
---
{{APIRef("Service Workers API")}}

The **`controllerchange`** event of the
{{domxref("ServiceWorkerContainer")}} interface fires when the document's associated
{{domxref("ServiceWorkerRegistration")}} acquires a new
{{domxref("ServiceWorkerRegistration.active","active")}} worker.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('controllerchange', (event) => { });

oncontrollerchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
// TBD
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
