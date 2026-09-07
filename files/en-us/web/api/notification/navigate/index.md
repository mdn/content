---
title: "Notification: navigate property"
short-title: navigate
slug: Web/API/Notification/navigate
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Notification.navigate
---

{{APIRef("Web Notifications")}}{{securecontext_header}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`navigate`** read-only property of the {{domxref("Notification")}} interface contains the URL the user agent will navigate to when the user activates the notification.

This is the resolved value of the URL, if any, that was specified in the `navigate` option of the {{domxref("Notification.Notification", "Notification()")}} constructor or {{domxref("ServiceWorkerRegistration.showNotification()")}}.

Normally, activating a non-persistent notification fires the {{domxref("Notification.click_event", "click")}} event on its {{domxref("Notification")}} object, and activating a persistent notification fires the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event on the {{domxref("ServiceWorkerGlobalScope")}}.

When a notification with a navigation URL is activated by the user, the user agent navigates to the specified URL instead of firing either of these events. This allows notifications to direct users to a specific page without requiring an event handler.

## Value

A string containing a {{glossary("URL")}}, or an empty string if no navigation URL has been set.

## Examples

### Reading the navigate property value

The `navigate` property returns the resolved URL string when a navigation URL has been set, or an empty string otherwise.

```js
const notification = new Notification("New message from Alice", {
  body: "Hey, are you free for lunch?",
  navigate: "/messages/alice",
});

// The property contains the resolved absolute URL
console.log(notification.navigate); // e.g. "https://example.com/messages/alice"

// Without a navigate option, the property is an empty string
const basic = new Notification("Hello!");
console.log(basic.navigate); // ""
```

### Using navigate with a service worker

When using persistent notifications through a service worker, the `navigate` option allows the notification to open a page when activated, without needing to handle the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

```js
// Inside a service worker
self.registration.showNotification("Order shipped!", {
  body: "Your order #1234 has been shipped.",
  navigate: "/orders/1234",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.Notification", "Notification()")}} constructor
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
