---
title: 'ServiceWorkerGlobalScope: notificationclose event'
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.notificationclose_event
---
{{APIRef("Service Workers API")}}

The **`notificationclose`** event fires when a user closes a displayed notification spawned by {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Notifications created on the main thread or in workers which aren't service workers
using the {{domxref("Notification.Notification","Notification()")}} constructor will
instead receive a {{domxref("Notification/close_event", "close")}} event on the `Notification` object
itself.

> **Note:** Trying to create a notification inside the
> {{domxref("ServiceWorkerGlobalScope")}} using the
> {{domxref("Notification.Notification","Notification()")}} constructor will throw an
> error.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('notificationclose', (event) => { });

onnotificationclose = (event) => { };
```

## Event type

A {{domxref("NotificationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("NotificationEvent")}}

## Event properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Notification")}} object representing the notification that was clicked to fire the event.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Returns the string ID of the notification button the user clicked. This value returns an empty string if the user clicked the notification somewhere other than an action button, or the notification does not have a button.

## Example

```js
//Inside a service worker.
self.onnotificationclose = (event) => {
  console.log('On notification close: ', event.notification.tag);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
