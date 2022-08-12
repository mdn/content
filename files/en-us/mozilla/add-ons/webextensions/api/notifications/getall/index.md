---
title: notifications.getAll()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/getAll
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
  - getAll
browser-compat: webextensions.api.notifications.getAll
---
{{AddonSidebar()}}

Gets all currently active notifications created by the extension.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let gettingAll = browser.notifications.getAll()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an object. Each currently active notification is a property of this object: the name of the property is the ID of the notification, and the value of the property is a {{WebExtAPIRef("notifications.NotificationOptions")}} object describing that notification.

Note that you can define an ID for a notification explicitly by passing it into {{WebExtAPIRef("notifications.create()")}}. If you don't do this, the browser will generate one. Explicitly-specified IDs are strings, but generated IDs are numbers.

## Browser compatibility

{{Compat}}

## Examples

This example shows a notification when the user clicks a browser action, unless the notification was already being shown, in which case it clears the notification. It uses getAll() to figure out whether the notification is being shown:

```js
const myNotification = "my-notification";

function toggleAlarm(all) {
  const ids = Object.keys(all);
  if (ids.includes(myNotification)) {
    browser.notifications.clear(myNotification);
  } else {
    console.log("showing");

    browser.notifications.create(myNotification, {
      type: "basic",
      title: "Am imposing title",
      message: "Some interesting content",
    });
  }
}

function handleClick() {
  console.log("clicked");
  browser.notifications.getAll().then(toggleAlarm);
}

browser.browserAction.onClicked.addListener(handleClick);
```

This example logs the title of all active notifications:

```js
function logNotifications(all) {
  for (const id in all) {
    console.log(`Title: ${all[id].title}`);
  }
}

browser.notifications.getAll().then(logNotifications);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
