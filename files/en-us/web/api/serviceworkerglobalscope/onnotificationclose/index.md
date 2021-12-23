---
title: ServiceWorkerGlobalScope.onnotificationclose
slug: Web/API/ServiceWorkerGlobalScope/onnotificationclose
tags:
  - API
  - Experimental
  - Interface
  - Property
  - Reference
  - ServiceWorkerGlobalScope
  - onnotificationclose
browser-compat: api.ServiceWorkerGlobalScope.onnotificationclose
---
{{APIRef("Service Workers API")}}

The **`ServiceWorkerGlobalScope.onnotificationclose`** property
is an event handler called whenever the {{Event("notificationclose")}} event is
dispatched on the {{domxref("ServiceWorkerGlobalScope")}} object, that is when a user
closes a displayed notification spawned by
{{domxref("ServiceWorkerRegistration.showNotification()")}}.

Notifications created on the main thread or in workers which aren't service workers
using the {{domxref("Notification.Notification","Notification()")}} constructor will
instead receive a {{Event("close")}} event on the `Notification` object
itself.

> **Note:** Trying to create a notification inside the
> {{domxref("ServiceWorkerGlobalScope")}} using the
> {{domxref("Notification.Notification","Notification()")}} constructor will throw an
> error.

## Syntax

```js
ServiceWorkerGlobalScope.onnotificationclose = function(NotificationEvent) { /* ... */ };
ServiceWorkerGlobalScope.addEventListener('notificationclose', function(NotificationEvent) { /* ... */ });
```

## Example

```js
//Inside a service worker.
self.onnotificationclose = function(event) {
  console.log('On notification close: ', event.notification.tag);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
