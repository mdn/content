---
title: notifications.update()
slug: Mozilla/Add-ons/WebExtensions/API/notifications/update
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Notifications
  - Reference
  - Update
  - WebExtensions
browser-compat: webextensions.api.notifications.update
---
{{AddonSidebar()}}

Updates a notification, given its ID.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var updating = browser.notifications.update(
  id,                            // string
  options                        // NotificationOptions
)
```

### Parameters

- `id`
  - : `string`. The ID of the notification to update. This is the same as the ID passed into {{WebExtAPIRef('notifications.create()')}}'s callback.
- `options`
  - : {{WebExtAPIRef('notifications.NotificationOptions')}}. Defines the notification's new content and behavior.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a boolean: `true` if the notification was updated, or `false` if it was not (for example, because the notification referenced by `id` did not exist).

## Browser compatibility

{{Compat}}

## Examples

This example uses `update()` to update a progress notification. Clicking the browser action shows the notification and starts an {{WebExtAPIRef("alarms", "alarm")}}, which we use to update the notification's progress indicator.

Note that you'll need the "alarms" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) to create alarms (as well as the "notifications" permission to create notifications). Also note that Firefox does not support the `progress` attribute.

```js
var cakeNotification = "cake-notification";

/*

CAKE_INTERVAL is set to 0.3 seconds in this example.
Such a short period is chosen to make the extension's behavior
more obvious, but this is not recommended in real life.
Note that in Chrome, alarms cannot be set for less than
a minute.

*/
var CAKE_PREP_INTERVAL = 0.005;

var progress = 0;

browser.alarms.onAlarm.addListener(function(alarm) {
  progress = progress + 10;
  if (progress > 100) {
    browser.notifications.clear(cakeNotification);
    browser.alarms.clear("cake-progress");
  } else {
    browser.notifications.update(cakeNotification, {
      "progress": progress
    });
  }
});

browser.browserAction.onClicked.addListener(function () {
  browser.notifications.getAll((all) => {
    if (all.length > 0) {
      browser.notifications.clear(cakeNotification);
      return;
    }
    progress = 0;
    browser.notifications.create(cakeNotification, {
      "type": "progress",
      "iconUrl": browser.extension.getURL("icons/cake-48.png"),
      "title": "Your cake is being prepared...",
      "message": "Something something cake",
      "progress": progress
    });
    browser.alarms.create(
      "cake-progress",
      {periodInMinutes: CAKE_PREP_INTERVAL}
    );
  });
});
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/extensions/notifications) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
