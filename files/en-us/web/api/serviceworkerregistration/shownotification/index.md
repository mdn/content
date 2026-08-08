---
title: "ServiceWorkerRegistration: showNotification() method"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
page-type: web-api-instance-method
browser-compat: api.ServiceWorkerRegistration.showNotification
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`showNotification()`** method of the
{{domxref("ServiceWorkerRegistration")}} interface creates a notification on an active
service worker.

## Syntax

```js-nolint
showNotification(title)
showNotification(title, options)
```

### Parameters

- `title`
  - : Defines a title for the notification, which is shown at the top of the notification window.
- `options` {{optional_inline}}
  - : An options object containing any custom settings that you want to apply to the notification.
    The possible options are:
    - `actions` {{optional_inline}} {{experimental_inline}}
      - : An array of actions to display in the notification, for which the default is an empty array.
        Each element in the array can be an object with the following members:
        - `action`
          - : A string that uniquely identifies this particular action within the array of actions.

            When an action button without a `navigate` URL is clicked, you can determine which button was selected by checking `event.action` inside your {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event listener.

        - `title`
          - : A string containing action text to be shown to the user.
        - `icon` {{optional_inline}}
          - : A string containing the URL of an icon to display with the action.
        - `navigate` {{optional_inline}} {{experimental_inline}}
          - : A string containing a URL to navigate to when the user activates this action.
            When set, the user agent navigates to this URL instead of firing the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event
            See {{domxref("Notification.navigate")}} for more information.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : A string containing the URL of a small icon representing the web application itself.
        The badge is used by the platform when there is not enough space to display the full notification —
        for example, in a status bar. It should have less visual priority than the `icon` and `image` options.
        On Android, the badge should accommodate up to 4x display resolution (about 96×96px),
        and the image will be automatically masked to a monochrome silhouette.
    - `body` {{optional_inline}}
      - : A string representing the body text of the notification, which is displayed below the title.
        The default is the empty string.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Arbitrary data that you want associated with the notification.
        This can be of any [structured-clonable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) data type.
        The default is `null`.
    - `dir` {{optional_inline}}
      - : The direction in which to display the notification.
        It defaults to `auto`, which just adopts the browser's language setting behavior, but you can override that behavior by setting values of `ltr` and `rtl` (although most browsers seem to ignore these settings.)
    - `icon` {{optional_inline}}
      - : A string containing the URL of a small image that reinforces the notification — for example,
        an app logo or a photo of the message sender. It is displayed alongside the notification title and body.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : A string containing the URL of a large image displayed as part of the notification's content body —
        for example, a news photo or product thumbnail. It has the highest visual priority of the three image options
        (`image`, `icon`, `badge`).

    > [!NOTE]
    > The three image options serve distinct purposes and appear in different locations:
    > `image` is a large content picture inside the notification body (highest priority),
    > `icon` is a small reinforcing image next to the title,
    > and `badge` is a tiny monochrome app icon for constrained UI surfaces like status bars (lowest priority).
    - `lang` {{optional_inline}}
      - : The notification's language, as specified using a string representing a {{glossary("BCP 47 language tag")}}.
        The default is the empty string.
    - `navigate` {{optional_inline}} {{experimental_inline}}
      - : A string containing a URL to navigate to when the user activates the notification.
        When set, the user agent navigates to this URL instead of firing the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.
        The value is parsed relative to the base URL of the service worker.
        See {{domxref("Notification.navigate")}} for more information.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : A boolean value specifying whether the user should be notified after a new notification replaces an old one.
        The default is `false`, which means they won't be notified.
        If `true`, then `tag` also must be set.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.
        The default value is `false`.
    - `silent` {{optional_inline}}
      - : A boolean value specifying whether the notification is silent (no sounds or vibrations issued), regardless of the device settings.
        The default, `null`, means to respect device defaults.
        If `true`, then `vibrate` must not be present.
    - `tag` {{optional_inline}}
      - : A string representing an identifying tag for the notification.
        The default is the empty string.
    - `timestamp` {{optional_inline}}
      - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, representing the time associated with the notification.
        This could be in the past when a notification is used for a message that couldn't immediately be delivered because the device was offline, or in the future for a meeting that is about to start.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : A [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns) for the device's vibration hardware to emit with the notification.
        If specified, `silent` must not be `true`.

### Return value

A {{jsxref('Promise')}} that resolves to `undefined`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - The current service worker's state is not `activating` or `activated`.
    - The user has explicitly denied the browser's permission request to use the API.
    - The `silent` option is `true` and the `vibrate` option is specified.
    - The `renotify` option is `true` but the `tag` option is empty.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if serializing the `data` option failed for some reason.

## Examples

### Basic usage

This example shows a function running in a service worker that displays a notification after first requesting, and being granted, permission.
Code to actually call the function is not shown.

```js
navigator.serviceWorker.register("sw.js");

async function showNotification() {
  const result = await Notification.requestPermission();

  if (result === "granted") {
    const registration = await navigator.serviceWorker.ready;

    registration.showNotification("Vibration Sample", {
      body: "Buzz! Buzz!",
      icon: "../images/touch/chrome-touch-icon-192x192.png",
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: "vibration-sample",
    });
  }
}
```

The following code shows how you might listen to the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event in order to handle user interaction with this particular notification.

```js
self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;

  // Close notification if we don't need it any more.
  notification.close();

  // Process our particular notification
  if (notification.tag === "vibration-sample") {
    // Use event.waitUntil to keep the service worker alive until the promise resolves
    event
      .waitUntil
      // Code to handle the particular event.
      ();
  }
});
```

You can also retrieve details of the {{domxref("Notification")}}s that have been fired from the current service worker using {{domxref("ServiceWorkerRegistration.getNotifications()")}}.

### Notifications with actions and action handlers

This example shows how you might display a persistent notification, which might be triggered by a push message when an email is received, for example.

The code to generate the notification includes two `actions` that will be displayed on the notification: one to reply to the message, and the other to dismiss the notification.
Each action includes a `title`, which is usually rendered as button text on the notification, and an `action`, which is used to identify the action that was selected if a user interacts with the notification.

```js
registration.showNotification("New Message", {
  body: "You've got mail.",
  icon: "/images/icon.png",
  actions: [
    { action: "reply", title: "Reply" },
    { action: "dismiss", title: "Dismiss" },
  ],
});
```

The following code shows how you can listen for `notificationclick` events from the notification, and then use the value of the `event.action` property to determine which action was selected.
Note that if the user clicks the notification body instead of an action button, `event.action` will be an empty string.

```js
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "reply") {
    // handle reply
  } else if (event.action === "dismiss") {
    // handle dismiss
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
