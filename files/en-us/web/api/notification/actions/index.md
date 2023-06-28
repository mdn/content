---
title: "Notification: actions property"
short-title: actions
slug: Web/API/Notification/actions
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Notification.actions
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`actions`** read-only property of the {{domxref("Notification")}} interface provides the actions available for users to choose from for interacting with the notification.

The actions are set using the `actions` option of the second argument for the [`showNotification()`](/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification) method and [`Notification()`](/en-US/docs/Web/API/Notification/Notification) constructor.

> **Note:** Browsers typically limit the maximum number of actions they will display for a particular notification. Check the static {{DOMxRef("Notification.maxActions")}} property to determine the limit.

## Value

A read-only array of actions. Each element in the array is an object with the following members:

- `action`
  - : A string identifying a user action to be displayed on the notification.
- `title`
  - : A string containing action text to be shown to the user.
- `icon`
  - : A string containing the URL of an icon to display with the action.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxRef("Notification.maxActions")}}
