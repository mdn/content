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

The **`navigate`** read-only property of the {{domxref("Notification")}} interface contains the URL the user agent will navigate to when the user activates the notification, as specified in the `navigate` option of the {{domxref("Notification.Notification", "Notification()")}} constructor or {{domxref("ServiceWorkerRegistration.showNotification()")}}.

When a notification with a navigation URL is activated, the user agent navigates to the specified URL instead of firing the {{domxref("Notification.click_event", "click")}} event or the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event. This allows notifications to direct users to a specific page without requiring a click event handler.

## Value

A string containing a {{glossary("URL")}}, or an empty string if no navigation URL has been set.

## Examples

### Creating a notification with a navigation URL

This example creates a notification that, when activated by the user, navigates to a specific page rather than firing a click event. Note that {{domxref("Notification.requestPermission_static", "Notification.requestPermission()")}} must be called from a user gesture such as a button click.

```html
<button id="notify">Notify me!</button>
```

```js
document.getElementById("notify").addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const notification = new Notification("New message from Alice", {
        body: "Hey, are you coming to the party tonight?",
        navigate: "/messages/alice",
      });

      // The navigate property reflects the resolved URL
      console.log(notification.navigate);
    }
  });
});
```

### Using navigate with a service worker

When using persistent notifications through a service worker, the `navigate` option allows the notification to open a page without needing to handle the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

```js
// Inside a service worker
self.registration.showNotification("Order shipped!", {
  body: "Your order #1234 has been shipped.",
  navigate: "/orders/1234",
});
```

### Checking the navigate property value

The `navigate` property returns an empty string when no navigation URL has been set, and a resolved URL string otherwise.

```html
<button id="notify">Notify me!</button>
```

```js
const button = document.getElementById("notify");

button.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    const withNav = new Notification("With navigation", {
      navigate: "/inbox",
    });
    console.log(withNav.navigate); // A resolved absolute URL, e.g. "https://example.com/inbox"

    const withoutNav = new Notification("Without navigation");
    console.log(withoutNav.navigate); // ""
  }
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
