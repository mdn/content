---
title: PushManager
slug: Web/API/PushManager
tags:
  - API
  - Experimental
  - Interface
  - Push
  - Push API
  - Reference
  - Service Workers
browser-compat: api.PushManager
---
{{ApiRef("Push API")}}

The **`PushManager`** interface of the [Push API](/en-US/docs/Web/API/Push_API) provides a way to receive notifications from third-party servers as well as request URLs for push notifications.

This interface is accessed via the {{domxref("ServiceWorkerRegistration.pushManager")}} property.

## Properties

- {{domxref("PushManager.supportedContentEncodings")}}
  - : Returns an array of supported content codings that can be used to encrypt the payload of a push message.

## Methods

- {{domxref("PushManager.getSubscription()")}}
  - : Retrieves an existing push subscription. It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of an existing subscription. If no existing subscription exists, this resolves to a `null` value.
- {{domxref("PushManager.permissionState()")}}
  - : Returns a {{jsxref("Promise")}} that resolves to the permission state of the current {{domxref("PushManager")}}, which will be one of `'granted'`, `'denied'`, or `'prompt'`.
- {{domxref("PushManager.subscribe()")}}
  - : Subscribes to a push service. It returns a {{jsxref("Promise")}} that resolves to a {{domxref("PushSubscription")}} object containing details of a push subscription. A new push subscription is created if the current service worker does not have an existing subscription.

### Deprecated methods

- {{domxref("PushManager.hasPermission()")}} {{deprecated_inline}}
  - : Returns a {{jsxref("Promise")}} that resolves to the `PushPermissionStatus` of the requesting webapp, which will be one of `granted`, `denied`, or `default`. Replaced by {{domxref("PushManager.permissionState()")}}.
- {{domxref("PushManager.register()")}} {{deprecated_inline}}
  - : Subscribes to a push subscription. Replaced by {{domxref("PushManager.subscribe()")}}.
- {{domxref("PushManager.registrations()")}} {{deprecated_inline}}
  - : Retrieves existing push subscriptions. Replaced by {{domxref("PushManager.getSubscription()")}}.
- {{domxref("PushManager.unregister()")}} {{deprecated_inline}}
  - : Unregisters and deletes a specified subscription endpoint. In the updated API, a subscription is unregistered by calling the {{domxref("PushSubscription.unsubscribe()")}} method.

## Example

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
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
