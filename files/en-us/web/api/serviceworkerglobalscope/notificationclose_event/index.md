---
title: "ServiceWorkerGlobalScope: notificationclose event"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.notificationclose_event
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`notificationclose`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface fires when the user closes a [persistent notification](/en-US/docs/Web/API/Notifications_API#persistent_notifications) associated with this service worker.

[Non-persistent notifications](/en-US/docs/Web/API/Notifications_API#non-persistent_notifications), created using the {{domxref("Notification.Notification","Notification()")}} constructor on the main thread or in workers which aren't service workers, will instead receive a {{domxref("Notification/close_event", "close")}} event on the {{domxref("Notification")}} object itself.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("notificationclose", (event) => { })

onnotificationclose = (event) => { }
```

## Event type

A {{domxref("NotificationEvent")}}. Inherits from {{domxref("ExtendableEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("NotificationEvent")}}

## Event properties

_Inherits properties from its ancestor, {{domxref("ExtendableEvent")}} and {{domxref("Event")}}_.

- {{domxref("NotificationEvent.notification")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Notification")}} object representing the notification that was clicked to fire the event.
- {{domxref("NotificationEvent.action")}} {{ReadOnlyInline}}
  - : Returns the string ID of the notification button the user clicked. This value returns an empty string if the user clicked the notification somewhere other than an action button, or the notification does not have a button.

## Example

```js
// Inside a service worker.
self.onnotificationclose = (event) => {
  console.log("On notification close: ", event.notification.tag);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
