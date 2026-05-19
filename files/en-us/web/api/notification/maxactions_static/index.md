---
title: "Notification: maxActions static property"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
page-type: web-api-static-property
browser-compat: api.Notification.maxActions_static
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`maxActions`** read-only static property of the {{domxref("Notification")}} interface returns the maximum number of actions supported by the device and the user agent.

## Value

An integer number.

## Description

Notification actions are buttons or controls that appear within [persistent notifications](/en-US/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications), created using {{domxref("ServiceWorkerRegistration.showNotification", "showNotification()")}} on a service worker.
Actions are set using the [`actions`](/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#actions) option of the second argument of the {{DOMxref("ServiceWorkerRegistration.showNotification", "showNotification()")}} method.

Browsers typically limit the maximum number of actions they will display for a particular notification.
This property returns that limit, which is the maximum number of elements in {{domxref("Notification.actions")}} array that will be respected by the user agent.

## Examples

### Log the maximum possible number of actions

The following snippet logs the maximum number of supported actions.

```js
const maxActions = Notification.maxActions;
console.log(
  `This device can display at most ${maxActions} actions on each notification.`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
