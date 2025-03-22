---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
page-type: web-api-interface
browser-compat: api.ServiceWorkerGlobalScope
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`ServiceWorkerGlobalScope`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) represents the global execution context of a service worker.

Developers should keep in mind that the ServiceWorker state is not persisted across the termination/restart cycle, so each event handler should assume it's being invoked with a bare, default global state.

Once successfully registered, a service worker can and will be terminated when idle to conserve memory and processor power. An active service worker is automatically restarted to respond to events, such as {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} or {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}.

Additionally, synchronous requests are not allowed from within a service worker — only asynchronous requests, like those initiated via the {{domxref("WorkerGlobalScope/fetch", "fetch()")}} method, can be used.

This interface inherits from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("Clients")}} object associated with the service worker.
- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}}
  - : Returns a reference to the {{domxref("CookieStore")}} object associated with the service worker.
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("ServiceWorkerRegistration")}} object that represents the service worker's registration.
- {{domxref("ServiceWorkerGlobalScope.serviceWorker")}} {{ReadOnlyInline}}
  - : Contains the {{domxref("ServiceWorker")}} object that represents the service worker.

## Instance methods

_This interface inherits methods from the {{domxref("WorkerGlobalScope")}} interface, and its parent {{domxref("EventTarget")}}._

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : Allows the current service worker registration to progress from waiting to active state while service worker clients are using it.

## Events

Listen to this event using {{domxref("EventTarget/addEventListener()", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

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
- {{domxref("ServiceWorkerGlobalScope/canmakepayment_event", "canmakepayment")}} {{Experimental_Inline}}
  - : Fired on a payment app's service worker to check whether it is ready to handle a payment. Specifically, it is fired when the merchant website calls the {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor.
- {{domxref("ServiceWorkerGlobalScope/contentdelete_event", "contentdelete")}} {{Experimental_Inline}}
  - : Occurs when an item is removed from the {{domxref("ContentIndex")}}.
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} {{Experimental_Inline}}
  - : Fired when a cookie change has occurred that matches the service worker's cookie change subscription list.
- {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}
  - : Occurs when a {{domxref("WorkerGlobalScope/fetch", "fetch()")}} is called.
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : Occurs when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.installing")}} worker.
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : Occurs when incoming messages are received. Controlled pages can use the {{domxref("MessagePort.postMessage()")}} method to send messages to service workers.
- {{domxref("ServiceWorkerGlobalScope/messageerror_event", "messageerror")}}
  - : Occurs when incoming messages can't be deserialized.
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : Occurs when a user clicks on a displayed notification.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}}
  - : Occurs when a user closes a displayed notification.
- {{domxref("ServiceWorkerGlobalScope/paymentrequest_event", "paymentrequest")}} {{Experimental_Inline}}
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

The code also handles exceptions thrown from the {{domxref("WorkerGlobalScope/fetch", "fetch()")}} operation. Note that an HTTP error response (e.g., 404) will not trigger an exception. It will return a normal response object that has the appropriate error code set.

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
