---
title: notifications.clear()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/clear
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - clear
browser-compat: webextensions.api.notifications.clear
---
{{AddonSidebar()}}

Clears a notification, given its ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let clearing = browser.notifications.clear(
  id                            // string
)
```

### Parameters

- `id`
  - : `string`. The ID of the notification to clear. This is the same as the ID passed into {{WebExtAPIRef('notifications.create()')}}'s callback.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a boolean: `true` if the notification was cleared, or `false` if it was not (for example, because the notification referenced by `id` did not exist).

## Browser compatibility

{{Compat}}

## Examples

This example shows a notification when the user clicks a browser action, unless the notification was already being shown, in which case it clears the notification:

```js
let myNotification = "my-notification";

function toggleAlarm(all) {
  if (myNotification in all) {
    browser.notifications.clear(myNotification);
  } else {
    browser.notifications.create(myNotification, {
      "type": "basic",
      "iconUrl": browser.runtime.getURL("icons/cake-48.png"),
      "title": "Am imposing title",
      "message": "Some interesting content"
    });
  }
}

function handleClick() {
  let gettingAll = browser.notifications.getAll();
  gettingAll.then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
