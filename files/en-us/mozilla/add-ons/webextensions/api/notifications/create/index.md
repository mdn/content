---
title: notifications.create()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/create
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Method
  - Non-standard
  - Notifications
  - Reference
  - WebExtensions
browser-compat: webextensions.api.notifications.create
---
{{AddonSidebar()}}

Creates and displays a notification.

Pass a {{WebExtAPIRef("notifications.NotificationOptions")}} to define the notification's content and behavior.

You can optionally provide an ID for the notification. If you omit the ID, an ID will be generated. You can use the ID to {{WebExtAPIRef("notifications.update()", "update")}} or {{WebExtAPIRef("notifications.clear()", "clear")}} the notification.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> **Warning:** If you call `notifications.create()` more than once in rapid succession, Firefox may end up not displaying any notification at all.

## Syntax

```js
let creating = browser.notifications.create(
  id,                   // optional string
  options               // NotificationOptions
)
```

### Parameters

- `id` {{optional_inline}}
  - : `string`. This is used to refer to this notification in {{WebExtAPIRef("notifications.update()")}}, {{WebExtAPIRef("notifications.clear()")}}, and event listeners. If you omit this argument or pass an empty string, then a new ID will be generated for this notification. If the ID you provide matches the ID of an existing notification from this extension, then the other notification will be cleared.
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}. Defines the notification's content and behavior.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled when the notification is created and the display process has been started, which is before the notification is actually displayed to the user. It is fulfilled with a string representing the notification's ID.

## Examples

This example displays a notification periodically, using {{WebExtAPIRef("alarms", "alarm")}}. Clicking the browser action dismisses the notification. You need the "alarms" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) to create alarms (as well as the "notifications" permission to create notifications).

```js
let cakeNotification = "cake-notification"

/*

CAKE_INTERVAL is set to 6 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less
than a minute.

*/
let CAKE_INTERVAL = 0.1;

browser.alarms.create("", {periodInMinutes: CAKE_INTERVAL});

browser.alarms.onAlarm.addListener((alarm) => {
  browser.notifications.create(cakeNotification, {
    "type": "basic",
    "iconUrl": browser.runtime.getURL("icons/cake-96.png"),
    "title": "Time for cake!",
    "message": "Something something cake"
  });
});

browser.browserAction.onClicked.addListener(() => {
  const clearing = browser.notifications.clear(cakeNotification);
  clearing.then(() => {
    console.log("cleared");
  });
});
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/#method-create) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
