---
title: notifications.NotificationOptions
slug: Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions
page-type: webextension-api-type
browser-compat: webextensions.api.notifications.NotificationOptions
---

{{AddonSidebar()}}

This type contains all the data needed to:

- create a notification using {{WebExtAPIRef("notifications.create()")}},
- update an existing notification using {{WebExtAPIRef("notifications.update()")}}.

## Type

Values of this type are objects. They contain the properties listed below.

The first three properties - `type`, `title`, `message` - are mandatory in {{WebExtAPIRef("notifications.create()")}}, but optional in {{WebExtAPIRef("notifications.update()")}}. Firefox currently: only supports the `type`, `title`, `message`, and `iconUrl` properties; and the only supported value for `type` is `'basic'`.

- `type`
  - : {{WebExtAPIRef("notifications.TemplateType")}}. The type of notification you want. Depending on your choice here, certain other properties are either mandatory or are not permitted.
- `message`
  - : `string`. The notification's main content.
- `title`
  - : `string`. The notification's title.
- `iconUrl` {{optional_inline}}
  - : `string`. A URL pointing to an icon to display in the notification. The URL can be: a data URL, a blob URL, a http or https URL, or the [relative URL of a file within the extension](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls). When using an SVG image, ensure that the image includes height and width attributes, for example, `<svg width="96" height="96"…`. Otherwise, the image may not display.
- `contextMessage` {{optional_inline}}
  - : `string`. Supplementary content to display.
- `priority` {{optional_inline}}
  - : `number`. The notification's priority: may be 0, 1, or 2. Defaults to 0 if omitted.
- `eventTime` {{optional_inline}}
  - : `number`. A timestamp for the notification in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).
- `buttons` {{optional_inline}}

  - : `array` of `button`. An array of up to 2 buttons to include in the notification. You can listen for button clicks using {{WebExtAPIRef("notifications.onButtonClicked")}}. Each button is specified as an object with the following properties:

    - `title`
      - : `string`. Title for the button.
    - `iconUrl` {{optional_inline}}
      - : `string`. URL pointing to an icon for the button.

- `imageUrl`

  - : `string`. A URL pointing to an image to use in the notification. The URL can be: a data URL, a blob URL, or the [relative URL](/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#relative_urls) of a file within the extension. When using an SVG image, ensure that the image includes height and width attributes, for example, `<svg width="96" height="96"…`. Otherwise, the image may not display.

    _This property is only permitted if `type` is `"image"`. In this case, it is mandatory if the `NotificationOptions` is used in {{WebExtAPIRef("notifications.create()")}}, and optional if it is used in {{WebExtAPIRef("notifications.update()")}}._

- `items`

  - : `array` of `item`. An array of items to include in the notification. Depending on the settings for the operating system's notification mechanism, some of the items you provide might not be displayed. Each item is specified as an object with the following properties:

    - `title`
      - : `string`. Title to display in the item.
    - `message`
      - : `string`. Message to display in the item.

    _This property is only permitted if `type` is `"list"`. In this case, it is mandatory if the `NotificationOptions` is used in {{WebExtAPIRef("notifications.create()")}}, and optional if it is used in {{WebExtAPIRef("notifications.update()")}}._

- `progress`

  - : `integer`. An integer between 0 and 100, used to represent the current progress in a progress indicator.

    _This property is only permitted if `type` is `"progress"`. In this case, it is mandatory if the `NotificationOptions` is used in {{WebExtAPIRef("notifications.create()")}}, and optional if it is used in {{WebExtAPIRef("notifications.update()")}}._

Note that `appIconMaskUrl` and `isClickable` are not supported.

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.notifications`](https://developer.chrome.com/docs/extensions/reference/notifications/) API.
