---
title: "ServiceWorkerGlobalScope: notificationclose event"
short-title: notificationclose
slug: Web/API/ServiceWorkerGlobalScope/notificationclose_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.notificationclose_event
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`notificationclose`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface fires when a user closes a displayed notification spawned by {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Notifications created on the main thread or in workers which aren't service workers
using the {{domxref("Notification.Notification","Notification()")}} constructor will
instead receive a {{domxref("Notification/close_event", "close")}} event on the {{domxref("Notification")}} object
itself.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("notificationclose", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onnotificationclose = (event) => { }
```

## Event type

A {{domxref("NotificationEvent")}}. Inherits from {{domxref("ExtendableEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("NotificationEvent")}}

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
