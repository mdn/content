---
title: "ServiceWorkerContainer: controller property"
short-title: controller
slug: Web/API/ServiceWorkerContainer/controller
page-type: web-api-instance-property
browser-compat: api.ServiceWorkerContainer.controller
---

{{APIRef("Service Workers API")}}

The **`controller`** read-only
property of the {{domxref("ServiceWorkerContainer")}} interface returns a
{{domxref("ServiceWorker")}} object if its state is `activating` or
`activated` (the same object returned by
{{domxref("ServiceWorkerRegistration.active")}}). This property returns
`null` if the request is a force refresh (_Shift_ + refresh) or if
there is no active worker.

## Value

A {{domxref("ServiceWorker")}} object.

## Examples

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
