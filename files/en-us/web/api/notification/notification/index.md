---
title: Notification()
slug: Web/API/Notification/Notification
tags:
  - API
  - Constructor
  - Notification
  - Notifications
  - Notifications API
  - Reference
browser-compat: api.Notification.Notification
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`Notification()`** constructor creates a new
{{domxref("Notification")}} object instance, which represents a user notification.

## Syntax

```js
var notification = new Notification(title, options);
```

### Parameters

- `title`
  - : Defines a title for the notification, which is shown at the top of the notification
    window.
- `options` {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the
    notification. The possible options are:

    - `dir`: The direction in which to display the notification. It
      defaults to `auto`, which just adopts the browser's language setting
      behavior, but you can override that behavior by setting values of `ltr`
      and `rtl` (although most browsers seem to ignore these settings.)
    - `lang`: The notification's language, as specified using a
      {{domxref("DOMString")}} representing a language tag
      according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
      See the Sitepoint [ISO
      2 letter language codes](https://www.sitepoint.com/web-foundations/iso-2-letter-language-codes/) page for a simple reference.
    - `badge`: A {{domxref("USVString")}} containing the URL of the image
      used to represent the notification when there isn't enough space to display the
      notification itself.
    - `body`: A {{domxref("DOMString")}} representing the body text of the
      notification, which is displayed below the title.
    - `tag`: A {{domxref("DOMString")}} representing an identifying tag for
      the notification.
    - `icon`: A {{domxref("USVString")}} containing the URL of an icon to
      be displayed in the notification.
    - `image`: a {{domxref("USVString")}} containing the URL of an image to
      be displayed in the notification.
    - `data`: Arbitrary data that you want associated with the
      notification. This can be of any data type.
    - `vibrate`: A [vibration
      pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns) for the device's vibration hardware to emit with the notification.
    - `renotify`: A boolean value specifying whether the user
      should be notified after a new notification replaces an old one. The default is
      `false`, which means they won't be notified.
    - `requireInteraction`: Indicates that a notification should remain
      active until the user clicks or dismisses it, rather than closing automatically.
      The default value is `false`.
    - `actions`: An array of {{domxref("NotificationAction")}}s
      representing the actions available to the user when the notification is presented.
      These are options the user can choose among in order to act on the action within
      the context of the notification itself. The action's name is sent to the service
      worker notification handler to let it know the action was selected by the user.
    - `silent`: A boolean value specifying whether the
      notification is silent (no sounds or vibrations issued), regardless of the device
      settings. The default is `false`, which means it won't be silent.

## Example

In our
[`Emogotchi demo`](https://chrisdavidmills.github.io/emogotchi/)
([see source code](https://github.com/mdn/emogotchi)), we run a
`spawnNotification()` function when we want to trigger a notification. The
function is passed parameters to specify the body, icon, and title we want, and then it
creates the necessary `options` object and triggers the notification by using
the `Notification()` constructor.

```js
function spawnNotification(body, icon, title) {
  var options = {
      body: body,
      icon: icon
  }
  var notification = new Notification(title, options);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Chrome notes

Starting in Chrome 49, notifications don't work in incognito mode.

Chrome for Android will throw a `TypeError` when calling the
`Notification` constructor. It only supports creating
notifications from a service worker. See the
[Chromium issue tracker](https://bugs.chromium.org/p/chromium/issues/detail?id=481856) for more details.

### Internet Explorer notes

Version 38.14352 and higher of MS Edge Notification API is supported. [Wikipedia - MS
Edge](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history)

IE 11 and lower isn't supported.

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
