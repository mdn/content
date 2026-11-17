---
title: "ServiceWorkerContainer: controllerchange event"
short-title: controllerchange
slug: Web/API/ServiceWorkerContainer/controllerchange_event
page-type: web-api-event
browser-compat: api.ServiceWorkerContainer.controllerchange_event
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`controllerchange`** event of the {{domxref("ServiceWorkerContainer")}} interface fires when the document's associated {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active","active")}} worker.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("controllerchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
oncontrollerchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
navigator.serviceWorker.addEventListener("controllerchange", () => {
  console.log("The controller of current browsing context has changed.");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
