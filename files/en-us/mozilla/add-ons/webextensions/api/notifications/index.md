---
title: notifications
slug: Mozilla/Add-ons/WebExtensions/API/notifications
page-type: webextension-api
browser-compat: webextensions.api.notifications
---

{{AddonSidebar}}

Display notifications to the user, using the underlying operating system's notification mechanism. Because this API uses the operating system's notification mechanism, the details of how notifications appear and behave may differ according to the operating system and the user's settings.

On macOS, the notification looks something like this:

![Example notification on macOS, located below the system clock, with a bold title reading "Click notification" followed by regular text reading "You clicked https://developer.mozilla.org/en-US/docs/MDN". The notification has the Firefox Nightly logo on the left side, and a link icon on the right.](notification-macos.png)

On Windows, the notification persists in the Action Center until the browser is closed. The notification looks something like this:

![Example notification on Windows 10, located above the system clock, with a bold title reading "Click notification" followed by regular text reading "You clicked https://developer.mozilla.org/en-US/docs/MDN". The notification has a small Firefox logo in the top left corner that is followed by "Mozilla Firefox", and a link icon to the left of the primary notification text.](notification-windows.png)

To use this API, you need to have the "notifications" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Types

- {{WebExtAPIRef("notifications.NotificationOptions")}}
  - : Defines the content of a notification.
- {{WebExtAPIRef("notifications.TemplateType")}}
  - : The type of notification. For example, this defines whether the notification can contain an image.

## Functions

- {{WebExtAPIRef("notifications.clear()")}}
  - : Clear a specific notification, given its ID.
- {{WebExtAPIRef("notifications.create()")}}
  - : Create and display a new notification.
- {{WebExtAPIRef("notifications.getAll()")}}
  - : Get all notifications.
- {{WebExtAPIRef("notifications.update()")}}
  - : Update a notification.

## Events

- {{WebExtAPIRef("notifications.onButtonClicked")}}
  - : Fired when the user clicked a button in the notification.
- {{WebExtAPIRef("notifications.onClicked")}}
  - : Fired when the user clicked the notification, but not on a button.
- {{WebExtAPIRef("notifications.onClosed")}}
  - : Fired when a notification closed, either by the system or because the user dismissed it.
- {{WebExtAPIRef("notifications.onShown")}}
  - : Fired immediately after a notification has been shown.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/api/notifications) API.
