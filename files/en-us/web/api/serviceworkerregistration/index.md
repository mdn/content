---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
page-type: web-api-interface
browser-compat: api.ServiceWorkerRegistration
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`ServiceWorkerRegistration`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) represents the service worker registration. You register a service worker to control one or more pages that share the same origin.

The lifetime of a service worker registration is beyond that of the `ServiceWorkerRegistration` objects that represent them within the lifetime of their corresponding service worker clients. The browser maintains a persistent list of active `ServiceWorkerRegistration` objects.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.active")}} {{ReadOnlyInline}}
  - : Returns a service worker whose state is `activating` or `activated`. This is initially set to `null`. An active worker will control a {{domxref("Client")}} if the client's URL falls within the scope of the registration (the `scope` option set when {{domxref("ServiceWorkerContainer.register")}} is first called.)
- {{domxref("ServiceWorkerRegistration.backgroundFetch")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to a {{domxref("BackgroundFetchManager")}} object, which manages background fetch operations.
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("CookieStoreManager")}} interface, which allows subscribe and unsubscribe to cookie change events.
- {{domxref("ServiceWorkerRegistration.index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("ContentIndex")}} interface, for managing indexed content for offline viewing.
- {{domxref("ServiceWorkerRegistration.installing")}} {{ReadOnlyInline}}
  - : Returns a service worker whose state is `installing`. This is initially set to `null`.
- {{domxref("ServiceWorkerRegistration.navigationPreload")}} {{ReadOnlyInline}}
  - : Returns the instance of {{domxref("NavigationPreloadManager")}} associated with the current service worker registration.
- {{domxref("ServiceWorkerRegistration.paymentManager")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a payment app's {{domxref("PaymentManager")}} instance, which is used to manage various payment app functionality.
- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("PeriodicSyncManager")}} interface, which allows for registering of tasks to run at specific intervals.
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("PushManager")}} interface for managing push subscriptions including subscribing, getting an active subscription, and accessing push permission status.
- {{domxref("ServiceWorkerRegistration.scope")}} {{ReadOnlyInline}}
  - : Returns a string representing a URL that defines a service worker's registration scope; that is, the range of URLs the service worker can control.
- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("SyncManager")}} interface, which manages background synchronization processes.
- {{domxref("ServiceWorkerRegistration.updateViaCache")}} {{ReadOnlyInline}}
  - : Returns the value of the setting used to determine the circumstances in which the browser will consult the HTTP cache when it tries to update the service worker or any scripts that are imported via {{domxref("WorkerGlobalScope.importScripts", "importScripts()")}}. It can be one of the following: `imports`, `all`, or `none`.
- {{domxref("ServiceWorkerRegistration.waiting")}} {{ReadOnlyInline}}
  - : Returns a service worker whose state is `installed`. This is initially set to `null`.

## Instance methods

_Also inherits methods from its parent interface,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : Returns a list of the notifications in the order that they were created from the current origin via the current service worker registration.
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : Displays the notification with the requested title.
- {{domxref("ServiceWorkerRegistration.unregister()")}}
  - : Unregisters the service worker registration and returns a {{jsxref("Promise")}}. The service worker will finish any ongoing operations before it is unregistered.
- {{domxref("ServiceWorkerRegistration.update()")}}
  - : Checks the server for an updated version of the service worker without consulting caches.

## Events

- {{domxref("ServiceWorkerRegistration.updatefound_event", "updatefound")}}
  - : Fired any time the {{domxref("ServiceWorkerRegistration.installing")}} property acquires a new service worker.

## Examples

In this example, the code first checks whether the browser supports service workers and if so registers one. Next, it adds an `updatefound` listener in which it uses the service worker registration to listen for further changes to the service worker's state. If the service worker hasn't changed since the last time it was registered, then the `updatefound` event will not be fired.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        const installingWorker = registration.installing;
        console.log(
          "A new service worker is being installed:",
          installingWorker,
        );

        // You can listen for changes to the installing service worker's
        // state via installingWorker.onstatechange
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
} else {
  console.error("Service workers are not supported.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
