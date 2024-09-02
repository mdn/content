---
title: notifications.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onClicked
page-type: webextension-api-event
browser-compat: webextensions.api.notifications.onClicked
---

{{AddonSidebar}}

Fired when the user clicks a notification, but not on any of the notification's buttons (for that, see {{WebExtAPIRef("notifications.onButtonClicked")}}).

## Syntax

```js-nolint
browser.notifications.onClicked.addListener(listener)
browser.notifications.onClicked.removeListener(listener)
browser.notifications.onClicked.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `notificationId`
      - : `string`. ID of the notification that the user clicked.

## Browser compatibility

{{Compat}}

## Examples

In this simple example we add a listener to the `notifications.onClicked` event to listen for system notifications being clicked. When this occurs, we log an appropriate message to the console.

```js
browser.notifications.onClicked.addListener((notificationId) => {
  console.log(`Notification ${notificationId} was clicked by the user`);
});
```

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
