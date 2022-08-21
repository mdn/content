---
title: notifications.onClosed
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClosed
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - onClosed
browser-compat: webextensions.api.notifications.onClosed
---
{{AddonSidebar()}}

Fired when a notification is closed, either by the system or by the user.

## Syntax

```js
browser.notifications.onClosed.addListener(listener)
browser.notifications.onClosed.removeListener(listener)
browser.notifications.onClosed.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `callback`

  - : Function that will be called when this event occurs. The function will be passed the following arguments:

    - `notificationId`
      - : `string`. ID of the notification that closed.
    - `byUser`
      - : `boolean`. `true` if the notification was closed by the user, or `false` if it was closed by the system. This argument is not supported in Firefox.

## Browser compatibility

{{Compat}}

## Examples

In this simple example we add a listener to the {{WebExtAPIRef("notifications.onClosed")}} event to listen for system notifications being closed. When this occurs, we log an appropriate message to the console.

```js
browser.notifications.onClosed.addListener((notificationId) => {
  console.log(`Notification ${notificationId} has closed.`);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
