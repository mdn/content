---
title: ServiceWorkerRegistration.getNotifications()
slug: Web/API/ServiceWorkerRegistration/getNotifications
tags:
  - API
  - Experimental
  - Method
  - Notifications
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - ServiceWorkerRegistration
  - getNotifications
browser-compat: api.ServiceWorkerRegistration.getNotifications
---
{{APIRef("Service Workers API")}}

The **`getNotifications()`** method of
the {{domxref("ServiceWorkerRegistration")}} interface returns a list of the
notifications in the order that they were created from the current origin via the
current service worker registration. Origins can have many active but
differently-scoped service worker registrations. Notifications created by one service
worker on the same origin will not be available to other active services workers on
that same origin.

## Syntax

```js
serviceWorkerRegistration.getNotifications(options)
.then(function(notificationsList) { /* ... */ });
```

### Parameters

- options {{optional_inline}}

  - : An object containing options to filter the notifications returned. The available
    options are:

    - `tag`: A {{domxref("DOMString")}} representing a notification tag. If
      specified, only notifications that have this tag will be returned.

### Return value

A {{jsxref("Promise")}} that resolves to a list of {{domxref("Notification")}} objects.

## Example

```js
navigator.serviceWorker.register('sw.js');

var options = { tag : 'user_alerts' };

navigator.serviceWorker.ready.then(function(registration) {
  registration.getNotifications(options).then(function(notifications) {
    // do something with your notifications
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
