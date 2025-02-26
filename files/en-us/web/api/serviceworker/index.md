---
title: ServiceWorker
slug: Web/API/ServiceWorker
page-type: web-api-interface
browser-compat: api.ServiceWorker
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

The **`ServiceWorker`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) provides a reference to a service worker. Multiple {{glossary("browsing context", "browsing contexts")}} (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique `ServiceWorker` object.

A `ServiceWorker` object is available via a number of properties:

- {{domxref("ServiceWorkerRegistration.active")}}
- {{domxref("ServiceWorkerGlobalScope.serviceWorker")}}
- {{domxref("ServiceWorkerContainer.controller")}} — when the service worker is in `activating` or `activated` state
- {{domxref("ServiceWorkerRegistration.installing")}} — when the service worker is in `installing` state
- {{domxref("ServiceWorkerRegistration.waiting")}} — when the service worker is in `installed` state

The {{domxref("ServiceWorker.state")}} property and [`statechanged` event](/en-US/docs/Web/API/ServiceWorker/statechange_event) can be used to check and observe changes in the lifecycle-state of the object's associated service worker.
Related lifecycle events, such as [`install`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event) and [`activate`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event) are fired at the service worker itself.

Service workers allow static import of [ECMAScript modules](/en-US/docs/Web/JavaScript/Guide/Modules), if supported, using [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import).
Dynamic import is disallowed by the specification — calling [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) will throw.

Service workers can only be registered in the Window scope in some or all browsers, because the `ServiceWorker` object is not exposed to {{domxref("DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope")}}.
Check the [browser compatibility](#browser_compatibility) for information.

{{InheritanceDiagram}}

## Instance properties

_The `ServiceWorker` interface inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{ReadOnlyInline}}
  - : Returns the `ServiceWorker` serialized script URL defined as part of {{domxref("ServiceWorkerRegistration")}}. The URL must be on the same origin as the document that registers the `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{ReadOnlyInline}}
  - : Returns the state of the service worker. It returns one of the following values: `parsed`, `installing`, `installed`, `activating`, `activated`, or `redundant`.

## Instance methods

_The `ServiceWorker` interface inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.postMessage()")}}
  - : Sends a message — consisting of any [structured-cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript object — to the service worker. The message is transmitted to the service worker using a {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} event on its global scope.

## Events

- {{domxref("ServiceWorker.statechange_event", "statechange")}}

  - : Fired when {{domxref("ServiceWorker.state")}} changes.

- {{domxref("ServiceWorker.error_event", "error")}}
  - : Fired when an error happens inside the `ServiceWorker` object.

## Examples

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the {{domxref("ServiceWorker.state")}} and returns its value.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then((registration) => {
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
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // Something went wrong during registration. The service-worker.js file
      // might be unavailable or contain a syntax error.
    });
} else {
  // The current browser doesn't support service workers.
  // Perhaps it is too old or we are not in a Secure Context.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) (service workers)
- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
