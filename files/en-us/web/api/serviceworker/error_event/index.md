---
title: "ServiceWorker: error event"
short-title: error
slug: Web/API/ServiceWorker/error_event
page-type: web-api-event
browser-compat: api.ServiceWorker.error_event
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `error` event fires whenever an error occurs in the service worker.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("error", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onerror = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Example

The following code snippet gets a handle to the {{domxref("ServiceWorker")}} object via {{domxref("ServiceWorkerRegistration.active")}} and sets up an `onerror` handler on the resulting object:

```js
// in the page being controlled
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.onerror = (event) => {
      console.log("An error occurred in the service worker!");
    };
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
