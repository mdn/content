---
title: ServiceWorkerRegistration.pushManager
slug: Web/API/ServiceWorkerRegistration/pushManager
tags:
  - API
  - Property
  - Push
  - PushManager
  - Reference
  - Service Workers
  - ServiceWorkerRegistration
browser-compat: api.ServiceWorkerRegistration.pushManager
---
{{APIRef("Service Workers API")}}

The **`pushManager`** property of the
{{domxref("ServiceWorkerRegistration")}} interface returns a reference to the
{{domxref("PushManager")}} interface for managing push subscriptions; this includes
support for subscribing, getting an active subscription, and accessing push permission
status.

## Syntax

```js
var pushManager = serviceWorkerRegistration.pushManager;
```

### Value

A {{domxref("PushManager")}} object.

## Examples

```js
this.onpush = function(event) {
  console.log(event.data);
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.subscriptionId);
        console.log(pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
