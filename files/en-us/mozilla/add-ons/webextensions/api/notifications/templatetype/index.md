---
title: notifications.TemplateType
slug: Mozilla/Add-ons/WebExtensions/API/notifications/TemplateType
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Notifications
  - Reference
  - TemplateType
  - Type
  - WebExtensions
browser-compat: webextensions.api.notifications.TemplateType
---
{{AddonSidebar()}}

This is a string, and represents the type of notification to create. There are four types of notification: "basic", "image", "list", "progress".

This is passed into {{WebExtAPIRef("notifications.create()")}} and {{WebExtAPIRef("notifications.update()")}} as the `type` property of {{WebExtAPIRef("notifications.NotificationOptions", "NotificationOptions")}}.

## Type

Values of this type are strings. Possible values are:

- `"basic"`: the notification includes:

  - a title (`NotificationOptions.title`)
  - a message (`NotificationOptions.message`)
  - an icon (`NotificationOptions.iconUrl`){{optional_inline}}
  - an extra message (`NotificationOptions.contextMessage`){{optional_inline}}
  - up to two buttons (`NotificationOptions.buttons`){{optional_inline}}

- `"image"`: everything in `"basic"` and also:

  - an image (`NotificationOptions.imageUrl`)

- `"list"`: everything in `"basic"` and also:

  - a list of items (`NotificationOptions.items`)

- `"progress"`: everything in `"basic"` and also:

  - a progress indicator (`NotificationOptions.progress`)

Currently Firefox only supports "basic" here.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/extensions/notifications) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.
