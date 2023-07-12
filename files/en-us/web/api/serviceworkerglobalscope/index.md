---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
page-type: web-api-interface
browser-compat: api.ServiceWorkerGlobalScope
---

{{APIRef("Service Workers API")}}

The **`ServiceWorkerGlobalScope`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) represents the global execution context of a service worker.

Developers should keep in mind that the ServiceWorker state is not persisted across the termination/restart cycle, so each event handler should assume it's being invoked with a bare, default global state.

Once successfully registered, a service worker can and will be terminated when idle to conserve memory and processor power. An active service worker is automatically restarted to respond to events, such as {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} or {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}.

Additionally, synchronous requests are not allowed from within a service worker — only asynchronous requests, like those initiated via the {{domxref("fetch()")}} method, can be used.

This interface inherits from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("Clients")}} object associated with the service worker.
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("ServiceWorkerRegistration")}} object that represents the service worker's registration.

### Instance properties inherited from WorkerGlobalScope

- {{domxref("caches", "ServiceWorkerGlobalScope.caches")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CacheStorage")}} object associated with the current context. This object enables functionality such as storing assets for offline use, and generating custom responses to requests.
- {{domxref("WorkerGlobalScope.console", "ServiceWorkerGlobalScope.console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Returns the {{domxref("console")}} associated with the worker.
- {{domxref("WorkerGlobalScope.fonts", "ServiceWorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("FontFaceSet")}} associated with the worker.
- {{domxref("indexedDB", "ServiceWorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : Provides a mechanism for applications to asynchronously access capabilities of indexed databases; returns an {{domxref("IDBFactory")}} object.
- {{domxref("isSecureContext", "ServiceWorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : Returns a boolean indicating whether the current context is secure (`true`) or not (`false`).
- {{domxref("WorkerGlobalScope.location", "ServiceWorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerLocation")}} associated with the worker. `WorkerLocation` is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.
- {{domxref("WorkerGlobalScope.navigator", "ServiceWorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("WorkerNavigator")}} associated with the worker. `WorkerNavigator` is a specific navigator object, mostly a subset of the {{domxref("Navigator")}} for browsing scopes, but adapted to workers.
- {{domxref("origin", "ServiceWorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : Returns the global object's origin, serialized as a string.
- {{domxref("performance_property", "ServiceWorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Performance")}} object associated with the worker, which is a regular performance object, but with a subset of its properties and methods available.
- {{domxref("Window.scheduler", "ServiceWorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("Scheduler")}} object associated with the current context. This is the entry point for using the [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("WorkerGlobalScope.self", "ServiceWorkerGlobalScope.self")}}
  - : Returns an object reference to the `ServiceWorkerGlobalScope` object itself.

## Instance methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : Allows the current service worker registration to progress from waiting to active state while service worker clients are using it.

### Inherited from WorkerGlobalScope

- {{domxref("atob", "ServiceWorkerGlobalScope.atob()")}}
  - : Decodes a string of data which has been encoded using base-64 encoding.
- {{domxref("btoa", "ServiceWorkerGlobalScope.btoa()")}}
  - : Creates a base-64 encoded ASCII string from a string of binary data.
- {{domxref("clearInterval", "ServiceWorkerGlobalScope.clearInterval()")}}
  - : Cancels the repeated execution set using {{domxref("setInterval")}}.
- {{domxref("clearTimeout", "ServiceWorkerGlobalScope.clearTimeout()")}}
  - : Cancels the repeated execution set using {{domxref("setTimeout")}}.
- {{domxref("WorkerGlobalScope.dump", "ServiceWorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Writes a message to the console.
- {{domxref("WorkerGlobalScope.importScripts", "ServiceWorkerGlobalScope.importScripts()")}}
  - : Imports one or more scripts into the worker's scope. You can specify as many as you'd like, separated by commas. For example: `importScripts('foo.js', 'bar.js');`
- {{domxref("setInterval", "ServiceWorkerGlobalScope.setInterval()")}}
  - : Schedules the execution of a function every X milliseconds.
- {{domxref("setTimeout", "ServiceWorkerGlobalScope.setTimeout()")}}
  - : Sets a delay for executing a function.

## Events

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active")}} worker.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}} {{Experimental_Inline}}
  - : Fired when a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation has been canceled by the user or the app.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} {{Experimental_Inline}}
  - : Fired when the user has clicked on the UI for a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchfail_event", "backgroundfetchfail")}} {{Experimental_Inline}}
  - : Fired when at least one of the requests in a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation has failed.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchsuccess_event", "backgroundfetchsuccess")}} {{Experimental_Inline}}
  - : Fired when all of the requests in a [background fetch](/en-US/docs/Web/API/Background_Fetch_API) operation have succeeded.
- {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}} {{Experimental_Inline}}
  - : Fired on a payment app's service worker to check whether it is ready to handle a payment. Specifically, it is fired when the merchant website calls {{domxref("PaymentRequest.PaymentRequest", "new PaymentRequest()")}}.
- {{domxref("ServiceWorkerGlobalScope/contentdelete_event", "contentdelete")}} {{Experimental_Inline}}
  - : Occurs when an item is removed from the {{domxref("ContentIndex", "Content Index")}}.
- {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}
  - : Occurs when a {{domxref("fetch()")}} is called.
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.installing")}} worker.
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : Occurs when incoming messages are received. Controlled pages can use the {{domxref("MessagePort.postMessage()")}} method to send messages to service workers. The service worker can optionally send a response back via the {{domxref("MessagePort")}} exposed in [`event.data.port`](https://html.spec.whatwg.org/multipage/comms.html#messageport), corresponding to the controlled page.
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : Occurs when a user clicks on a displayed notification.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}}
  - : Occurs when a user closes a displayed notification.
- {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}} {{Experimental_Inline}}
  - : Fired on a payment app when a payment flow has been initiated on the merchant website via the {{domxref("PaymentRequest.show()")}} method.
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}
  - : Triggered when a call to {{domxref("SyncManager.register")}} is made from a service worker client page. The attempt to sync is made either immediately if the network is available or as soon as the network becomes available.
- {{domxref("ServiceWorkerGlobalScope/periodicsync_event", "periodicsync")}} {{Experimental_Inline}}
  - : Occurs at periodic intervals, which were specified when registering a {{domxref("PeriodicSyncManager")}}.
- {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}
  - : Occurs when a server push notification is received.
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}
  - : Occurs when a push subscription has been invalidated, or is about to be invalidated (e.g. when a push service sets an expiration time).

## Examples

This code snippet is from the [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (see [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/).) The {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}} event handler listens for the `fetch` event. When fired, the code returns a promise that resolves to the first matching request in the {{domxref("Cache")}} object. If no match is found, the code fetches a response from the network.

The code also handles exceptions thrown from the {{domxref("fetch()")}} operation. Note that an HTTP error response (e.g., 404) will not trigger an exception. It will return a normal response object that has the appropriate error code set.

```js
self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request).then(
        (response) => {
          console.log("Response from network is:", response);

          return response;
        },
        (error) => {
          console.error("Fetching failed:", error);

          throw error;
        },
      );
    }),
  );
});
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
