---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - onClicked
browser-compat: webextensions.api.notifications.onClicked
---
{{AddonSidebar()}}

Fired when the user clicks a notification, but not on any of the notification's buttons (for that, see {{WebExtAPIRef("notifications.onButtonClicked")}}).

## Syntax

```js
browser.notifications.onClicked.addListener(callback)
browser.notifications.onClicked.removeListener(listener)
browser.notifications.onClicked.hasListener(listener)
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
      - : `string`. ID of the notification that the user clicked.

## Browser compatibility

{{Compat}}

## Examples

In this simple example we add a listener to the {{WebExtAPIRef("notifications.onClicked")}} event to listen for system notifications being clicked. When this occurs, we log an appropriate message to the console.

```js
browser.notifications.onClicked.addListener((notificationId) => {
  console.log(`Notification ${notificationId} was clicked by the user`);
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
