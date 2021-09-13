---
title: Notification.permission
slug: Web/API/Notification/permission
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
browser-compat: api.Notification.permission
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The `permission` read-only property of the {{domxref("Notification")}}
interface indicates the current permission granted by the user for the current origin to
display web notifications.

## Syntax

```js
var permission = Notification.permission;
```

### Value

A {{domxref("DOMString")}} representing the current permission. The value can be:

- `granted`: The user has explicitly granted permission for the current
  origin to display system notifications.
- `denied`: The user has explicitly denied permission for the current
  origin to display system notifications.
- `default`: The user decision is unknown; in this case the application
  will act as if permission was `denied`.

## Examples

The following snippet could be used if you wanted to first check whether notifications
are supported, then check if permission has been granted for the current origin to send
notifications, then request permission if required, before then sending a notification.

```js
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have alredy been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied' || Notification.permission === "default") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Notifications API](/docs/Web/API/Notifications_API)
- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Using the
  Permissions API](/en-US/docs/Web/API/Permissions_API/Using_the_Permissions_API)
