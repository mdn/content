---
title: "ServiceWorker: state property"
short-title: state
slug: Web/API/ServiceWorker/state
page-type: web-api-instance-property
browser-compat: api.ServiceWorker.state
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`state`** read-only property of the
{{domxref("ServiceWorker")}} interface returns a string representing the current state
of the service worker. It can be one of the following values: `parsed`, `installing`,
`installed`, `activating`, `activated`, or
`redundant`.

## Value

A {{jsxref("String")}} that can take one of the following values:

- `"parsed"`
  - : The initial state of a service worker after it is downloaded and confirmed to be runnable.
    A service worker is never updated to this state, so this will never be the value of the {{DOMxRef("ServiceWorker.statechange_event", "statechange")}} event.
- `"installing"`
  - : The service worker in this state is considered an installing worker. During this state, {{DOMxRef("ExtendableEvent.waitUntil()")}} can be called inside the `install` event handler to extend the life of the installing worker until the passed promise resolves successfully. This is primarily used to ensure that the service worker is not active until all of the core caches are populated.
- `"installed"`
  - : The service worker in this state is considered a waiting worker.
- `"activating"`
  - : The service worker in this state is considered an active worker. During this state, {{DOMxRef("ExtendableEvent.waitUntil()")}} can be called inside the `onactivate` event handler to extend the life of the active worker until the passed promise resolves successfully. No functional events are dispatched until the state becomes activated.
- `"activated"`
  - : The service worker in this state is considered an active worker ready to handle functional events.
- `"redundant"`
  - : A new service worker is replacing the current service worker, or the current service worker is being discarded due to an install failure.

## Examples

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the `ServiceWorker.state`
and returns its value.

```js
let serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", (e) => {
    logState(e.target.state);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
