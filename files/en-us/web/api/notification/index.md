---
title: Notification
slug: Web/API/Notification
page-type: web-api-interface
browser-compat: api.Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The `Notification` interface of the [Notifications API](/en-US/docs/Web/API/Notifications_API) is used to configure and display desktop notifications to the user.

These notifications' appearance and specific functionality vary across platforms but generally they provide a way to asynchronously provide information to the user.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Notification.Notification", "Notification()")}}
  - : Creates a new instance of the `Notification` object.

## Static properties

These properties are available only on the `Notification` object itself.

- {{domxref("Notification.permission")}} {{ReadOnlyInline}}

  - : A string representing the current permission to display notifications. Possible values are:

    - `denied` — The user refuses to have notifications displayed.
    - `granted` — The user accepts having notifications displayed.
    - `default` — The user choice is unknown and therefore the browser will act as if the value were denied.

- {{domxref("Notification.maxActions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The maximum number of actions supported by the device and the User Agent.

## Instance properties

These properties are available only on instances of the `Notification` object.

- {{domxref("Notification.actions")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The actions array of the notification as specified in the constructor's `options` parameter.
- {{domxref("Notification.badge")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The URL of the image used to represent the notification when there is not enough space to display the notification itself.
- {{domxref("Notification.body")}} {{ReadOnlyInline}}
  - : The body string of the notification as specified in the constructor's `options` parameter.
- {{domxref("Notification.data")}} {{ReadOnlyInline}}
  - : Returns a structured clone of the notification's data.
- {{domxref("Notification.dir")}} {{ReadOnlyInline}}
  - : The text direction of the notification as specified in the constructor's `options` parameter.
- {{domxref("Notification.lang")}} {{ReadOnlyInline}}
  - : The language code of the notification as specified in the constructor's `options` parameter.
- {{domxref("Notification.tag")}} {{ReadOnlyInline}}
  - : The ID of the notification (if any) as specified in the constructor's `options` parameter.
- {{domxref("Notification.icon")}} {{ReadOnlyInline}}
  - : The URL of the image used as an icon of the notification as specified in the constructor's `options` parameter.
- {{domxref("Notification.image")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The URL of an image to be displayed as part of the notification, as specified in the constructor's `options` parameter.
- {{domxref("Notification.renotify")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Specifies whether the user should be notified after a new notification replaces an old one.
- {{domxref("Notification.requireInteraction")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A boolean value indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.
- {{domxref("Notification.silent")}} {{ReadOnlyInline}}
  - : Specifies whether the notification should be silent — i.e., no sounds or vibrations should be issued, regardless of the device settings.
- {{domxref("Notification.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Specifies the time at which a notification is created or applicable (past, present, or future).
- {{domxref("Notification.title")}} {{ReadOnlyInline}}
  - : The title of the notification as specified in the first parameter of the constructor.
- {{domxref("Notification.vibrate")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Specifies a vibration pattern for devices with vibration hardware to emit.

## Static methods

These methods are available only on the `Notification` object itself.

- {{domxref("Notification.requestPermission()")}}
  - : Requests permission from the user to display notifications.

## Instance methods

These properties are available only on an instance of the `Notification` object or through its [`prototype`](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). The `Notification` object also inherits from the {{domxref("EventTarget")}} interface.

- {{domxref("Notification.close()")}}
  - : Programmatically closes a notification instance.

## Events

- {{domxref("Notification.click_event", "click")}}
  - : Fires when the user clicks the notification.
- {{domxref("Notification.close_event", "close")}}
  - : Fires when the user closes the notification.
- {{domxref("Notification.error_event", "error")}}
  - : Fires when the notification encounters an error.
- {{domxref("Notification.show_event", "show")}}
  - : Fires when the notification is displayed.

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
