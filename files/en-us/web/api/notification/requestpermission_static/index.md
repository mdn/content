---
title: "Notification: requestPermission() static method"
short-title: requestPermission()
slug: Web/API/Notification/requestPermission_static
page-type: web-api-static-method
browser-compat: api.Notification.requestPermission_static
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

The **`requestPermission()`** static method of the {{domxref("Notification")}} interface requests permission from the user for the current origin to display notifications.

The method returns a {{jsxref("Promise")}} that fulfills with a string indicating whether permission was granted or denied.

## Syntax

```js-nolint
Notification.requestPermission()

// Deprecated syntax using a callback
Notification.requestPermission(callback)
```

### Parameters

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : An optional callback function that is called with the permission value.
    Deprecated in favor of the {{jsxref("Promise")}} return value.

### Return value

A {{jsxref("Promise")}} that resolves to a string with the permission picked by the user.
Possible values for this string are:

- `granted`
  - : The user has explicitly granted permission for the current origin to display system notifications.
- `denied`
  - : The user has explicitly denied permission for the current origin to display system notifications.
- `default`
  - : The user decision is unknown; in this case the application will act as if permission was `denied`.

The deprecated version of the method returns `undefined`.

## Examples

Assume this basic HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

It's possible to send a notification as follows — here we present a fairly verbose and complete set of code you could use if you wanted to first check whether notifications are supported, then check if permission has been granted for the current origin to send notifications, then request permission if required, before then sending a notification.

Note that the request should be made in response to user interaction: below, the method is called in the click event handler.

```js
function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
```

We no longer show a live sample on this page, as Chrome and Firefox no longer allow notification permissions to be requested from cross-origin {{htmlelement("iframe")}}s, with other browsers to follow. To see an example in action, check out our [To-do list example](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) (also see [the app running live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
