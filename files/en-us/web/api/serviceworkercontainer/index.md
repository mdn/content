---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
page-type: web-api-interface
tags:
  - API
  - Draft
  - Interface
  - Offline
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorkerContainer
  - Workers
browser-compat: api.ServiceWorkerContainer
---

{{APIRef("Service Workers API")}}

The `ServiceWorkerContainer` interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.

Most importantly, it exposes the {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}} method used to register service workers, and the {{domxref("ServiceWorkerContainer.controller")}} property used to determine whether or not the current page is actively controlled.

{{InheritanceDiagram}}

## Properties

- {{domxref("ServiceWorkerContainer.controller")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ServiceWorker")}} object if its state is `activating` or `activated` (the same object returned by {{domxref("ServiceWorkerRegistration.active")}}). This property returns `null` during a force-refresh request (_Shift_ + refresh) or if there is no active worker.
- {{domxref("ServiceWorkerContainer.ready")}} {{ReadOnlyInline}}
  - : Provides a way of delaying code execution until a service worker is active. It returns a {{jsxref("Promise")}} that will never reject, and which waits indefinitely until the {{domxref("ServiceWorkerRegistration")}} associated with the current page has an {{domxref("ServiceWorkerRegistration.active")}} worker. Once that condition is met, it resolves with the {{domxref("ServiceWorkerRegistration")}}.

## Events

- [`controllerchange`](/en-US/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Occurs when the document's associated {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active","active")}} worker.
- [`error`](/en-US/docs/Web/API/ServiceWorkerContainer/error_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fired whenever an error occurs in the associated service workers.
- [`message`](/en-US/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Occurs when incoming messages are received by the {{domxref("ServiceWorkerContainer")}} object (e.g. via a {{domxref("MessagePort.postMessage()")}} call).

## Methods

- {{domxref("ServiceWorkerContainer.register", "ServiceWorkerContainer.register()")}}
  - : Creates or updates a {{domxref("ServiceWorkerRegistration")}} for the given `scriptURL`.
- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Gets a {{domxref("ServiceWorkerRegistration")}} object whose scope matches the provided document URL. The method returns a {{jsxref("Promise")}} that resolves to a {{domxref("ServiceWorkerRegistration")}} or `undefined`.
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Returns all {{domxref("ServiceWorkerRegistration")}} objects associated with a `ServiceWorkerContainer` in an array. The method returns a {{jsxref("Promise")}} that resolves to an array of {{domxref("ServiceWorkerRegistration")}}.
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : explicitly starts the flow of messages being dispatched from a service worker to pages under its control (e.g. sent via {{domxref("Client.postMessage()")}}). This can be used to react to sent messages earlier, even before that page's content has finished loading.

## Examples

The example below first checks to see if the browser supports service workers. If supported, the code registers the service worker and determines if the page is actively controlled by the service worker. If it isn't, it prompts the user to reload the page so the service worker can take control. The code also reports any registration failures.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service worker registration succeeded:", registration);

      // At this point, you can optionally do something
      // with registration. See https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });

  // Independent of the registration, let's also display
  // information about whether the current page is controlled
  // by an existing service worker, and when that
  // controller changes.

  // First, do a one-off check if there's currently a
  // service worker in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "This page is currently controlled by:",
      navigator.serviceWorker.controller
    );
  }

  // Then, register a handler to detect when a new or
  // updated service worker takes control.
  navigator.serviceWorker.oncontrollerchange = () => {
    console.log(
      "This page is now controlled by",
      navigator.serviceWorker.controller
    );
  };
} else {
  console.log("Service workers are not supported.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
