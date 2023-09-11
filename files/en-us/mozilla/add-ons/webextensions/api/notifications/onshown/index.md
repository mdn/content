---
title: notifications.onShown
slug: Mozilla/Add-ons/WebExtensions/API/notifications/onShown
page-type: webextension-api-event
browser-compat: webextensions.api.notifications.onShown
---

{{AddonSidebar()}}

Fired immediately after a notification has been shown.

## Syntax

```js-nolint
browser.notifications.onShown.addListener(listener)
browser.notifications.onShown.removeListener(listener)
browser.notifications.onShown.hasListener(listener)
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
      - : `string`. ID of the notification that has been shown.

## Browser compatibility

{{Compat}}

## Examples

Add a listener to the {{WebExtAPIRef("notifications.onShown")}} event and log its details:

```js
function logShown(itemId) {
  console.log(`shown: ${itemId}`);
  browser.notifications.getAll().then((all) => {
    console.log(all[itemId]);
  });
}

browser.notifications.onShown.addListener(logShown);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/) API.
