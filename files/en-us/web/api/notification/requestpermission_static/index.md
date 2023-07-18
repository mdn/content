---
title: "Notification: requestPermission() static method"
short-title: requestPermission()
slug: Web/API/Notification/requestPermission_static
page-type: web-api-static-method
browser-compat: api.Notification.requestPermission_static
---

{{APIRef("Web Notifications")}}{{securecontext_header}}

The **`requestPermission()`** static method of the {{domxref("Notification")}} interface requests permission from the user for the current origin to display notifications.

## Syntax

```js-nolint
// The latest spec has updated this method to a promise-based syntax that works like this:
Notification.requestPermission()

// Previously, the syntax was based on a simple callback; this version is now deprecated:
Notification.requestPermission(callback)
```

### Parameters

- `callback` {{optional_inline}} {{deprecated_inline}}
  - : An optional callback function that is called with the permission value. Deprecated in favor of the promise return value.

### Return value

A {{jsxref("Promise")}} that resolves to a string with the permission picked by the user. Possible values for this string are:

- `granted`
- `denied`
- `default`

## Examples

Assume this basic HTML:

```html
<button onclick="notifyMe()">Notify me!</button>
```

It's possible to send a notification as follows — here we present a fairly verbose and complete set of code you could use if you wanted to first check whether notifications are supported, then check if permission has been granted for the current origin to send notifications, then request permission if required, before then sending a notification.

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

> **Note:** In the above example we spawn notifications in response to a user gesture (clicking a button). This is not only best practice — you should not be spamming users with notifications they didn't agree to — but going forward browsers will explicitly disallow notifications not triggered in response to a user gesture. Firefox is already doing this from version 72, for example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
