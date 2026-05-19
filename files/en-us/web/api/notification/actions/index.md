---
title: "Notification: actions property"
short-title: actions
slug: Web/API/Notification/actions
page-type: web-api-instance-property
browser-compat: api.Notification.actions
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`actions`** read-only property of the {{domxref("Notification")}} interface provides the actions available for users to select when interacting with the notification.

## Value

A read-only array of actions.
Each element in the array is an object with the following members:

- `action`
  - : A string identifying a user action to be displayed on the notification.
- `title`
  - : A string containing action text to be shown to the user.
- `icon`
  - : A string containing the URL of an icon to display with the action.
- `navigate` {{optional_inline}} {{experimental_inline}}
  - : A string containing a URL to navigate to when the user activates this action.
    When set, the user agent navigates to this URL instead of firing the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event
    See {{domxref("Notification.navigate")}} for more information.

## Description

Notification actions are buttons or controls that appear within [persistent notifications](/en-US/docs/Web/API/Notifications_API#persistent_and_non-persistent_notifications).
They are set using the [`actions`](/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#actions) option of the second argument of the {{DOMxref("ServiceWorkerRegistration.showNotification", "showNotification()")}} method.
Note that actions are not available for non-persistent notifications: a `TypeError` is thrown if you pass an options object with a non-`null` actions property to the {{domxref("Notification/Notification", "Notification()")}} constructor.

Clicking the button associated with an action navigates to the URL set in the [`navigate`](#navigate) option if one is specified.
Otherwise it fires a [`notificationclick`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) event on the service worker that includes the action that was selected (and the associated `Notification` instance), so the worker can handle it without the user ever switching to your page.

> [!NOTE]
> Browsers typically limit the maximum number of actions they will display for a particular notification.
> Check the static {{DOMxref("Notification.maxActions_static", "Notification.maxActions")}} property to determine the limit.

## Examples

### Basic usage

The following code shows how a service worker might listen for the `notificationclick` event and use it to get both the clicked action and all the actions.

```js
// sw.js
self.addEventListener("notificationclick", (event) => {
  const clickedAction = event.action; // e.g. "reply" or "" if body was clicked

  // Read all defined actions
  const notification = event.notification; // the Notification object
  console.log(notification.actions); // full array of action objects

  notification.close();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxref("Notification.maxActions_static", "Notification.maxActions")}}
