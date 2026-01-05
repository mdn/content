---
title: "ServiceWorkerContainer: controller property"
short-title: controller
slug: Web/API/ServiceWorkerContainer/controller
page-type: web-api-instance-property
browser-compat: api.ServiceWorkerContainer.controller
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`controller`** read-only property of the {{domxref("ServiceWorkerContainer")}} interface represents the active {{domxref("ServiceWorker","service worker","","nocode")}} controlling the current page (associated with this `ServiceWorkerContainer`), or `null` if the page has no active or activating service worker.

This is the same object returned by {{domxref("ServiceWorkerRegistration.active")}}.

## Value

A {{domxref("ServiceWorker")}} object if its state is `activating` or `activated`, or `null` if there is no active worker.

The property also returns `null` if the request is a force refresh (<kbd>Shift</kbd> + refresh)

## Examples

### Test if a page is controlled by a service worker

```js
if ("serviceWorker" in navigator) {
  // Do a one-off check to see if a service worker's in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      `This page is currently controlled by: ${navigator.serviceWorker.controller}`,
    );
  } else {
    console.log("This page is not currently controlled by a service worker.");
  }
} else {
  console.log("Service workers are not supported.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
