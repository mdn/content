---
title: "Notification: Notification() constructor"
short-title: Notification()
slug: Web/API/Notification/Notification
page-type: web-api-constructor
browser-compat: api.Notification.Notification
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`Notification()`** constructor creates a new
{{domxref("Notification")}} object instance, which represents a user notification.

## Syntax

```js-nolint
new Notification(title)
new Notification(title, options)
```

### Parameters

- `title`
  - : Defines a title for the notification, which is shown at the top of the notification
    window.
- `options` {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the
    notification. The possible options are:

    - `dir`
      - : The direction in which to display the notification. It
        defaults to `auto`, which just adopts the browser's language setting
        behavior, but you can override that behavior by setting values of `ltr`
        and `rtl` (although most browsers seem to ignore these settings.)
    - `lang`
      - : The notification's language, as specified using a
        string representing a language tag
        according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
        See the Sitepoint [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) page for a simple reference.
    - `badge`
      - : A string containing the URL of the image
        used to represent the notification when there isn't enough space to display the
        notification itself.
    - `body`
      - : A string representing the body text of the
        notification, which is displayed below the title.
    - `tag`
      - : A string representing an identifying tag for
        the notification. The default is the empty string.
    - `icon`
      - : A string containing the URL of an icon to
        be displayed in the notification.
    - `image`
      - : a string containing the URL of an image to
        be displayed in the notification.
    - `data`
      - : Arbitrary data that you want associated with the
        notification. This can be of any data type.
    - `vibrate`
      - : A [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns) for the device's vibration hardware to emit with the notification. If specified, `silent` must not be `true`.
    - `renotify`
      - : A boolean value specifying whether the user should be notified after a new notification replaces an old one. The default is `false`, which means they won't be notified. If `true`, then `tag` also must be set.
    - `requireInteraction`
      - : Indicates that a notification should remain
        active until the user clicks or dismisses it, rather than closing automatically.
        The default value is `false`.
    - `actions`

      - : An array of actions to display in the notification. Each element in the array is an object with the following members:

        - `action`: A string identifying a user action to be displayed on the notification.
        - `title`: A string containing action text to be shown to the user.
        - `icon`: A string containing the URL of an icon to display with the action.

        Appropriate responses are built using `event.action` within the
        {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

    - `silent`
      - : A boolean value specifying whether the
        notification is silent (no sounds or vibrations issued), regardless of the device
        settings. The default is `false`, which means it won't be silent. If `true`, then `vibrate` must not be present.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if one of the following is true:
    - `options.silent` is `true` and `options.vibrate` is specified.
    - `options.renotify` is `true` but `options.tag` is empty.

## Examples

In our
[`Emogotchi demo`](https://chrisdavidmills.github.io/emogotchi/)
([see source code](https://github.com/chrisdavidmills/emogotchi)), we run a
`spawnNotification()` function when we want to trigger a notification. The
function is passed parameters to specify the body, icon, and title we want, and then it
creates the necessary `options` object and triggers the notification by using
the `Notification()` constructor.

```js
function spawnNotification(body, icon, title) {
  const notification = new Notification(title, { body, icon });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Chrome notes

Starting in Chrome 49, notifications don't work in incognito mode.

Chrome for Android will throw a {{jsxref("TypeError")}} when calling the
`Notification` constructor. It only supports creating
notifications from a service worker. See the
[Chromium issue tracker](https://crbug.com/481856) for more details.

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
