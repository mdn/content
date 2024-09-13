---
title: "ServiceWorkerRegistration: showNotification() method"
short-title: showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
page-type: web-api-instance-method
browser-compat: api.ServiceWorkerRegistration.showNotification
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`showNotification()`** method of the
{{domxref("ServiceWorkerRegistration")}} interface creates a notification on an active
service worker.

## Syntax

```js-nolint
showNotification(title)
showNotification(title, options)
```

### Parameters

- `title`
  - : The title that must be shown within the notification.
- `options` {{optional_inline}}

  - : An object that allows configuring the notification. It can have the following
    properties:

    - `actions` {{optional_inline}} {{experimental_inline}}

      - : An array of actions to display in the notification. Each element in the array is an object with the following members:

        - `action`
          - : A string identifying a user action to be displayed on the notification.
        - `title`
          - : A string containing action text to be shown to the user.
        - `icon` {{optional_inline}}
          - : A string containing the URL of an icon to display with the action.

        Appropriate responses are built using `event.action` within the
        {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : A string containing the URL of an image
        to represent the notification when there is not enough space to display the
        notification itself such as for example, the Android Notification Bar. On Android
        devices, the badge should accommodate devices up to 4x resolution, about 96 by 96
        px, and the image will be automatically masked.
    - `body` {{optional_inline}}
      - : A string representing an extra content to display within the
        notification.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Arbitrary data that you want to be associated with the
        notification. This can be of any data type.
    - `dir` {{optional_inline}}
      - : The direction of the notification; it can be `auto`, `ltr` or `rtl`.
    - `icon` {{optional_inline}}
      - : A string containing the URL of an image to
        be used as an icon by the notification.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : A string containing the URL of an image to
        be displayed in the notification.
    - `lang` {{optional_inline}}
      - : Specify the lang used within the notification. This string
        must be a valid language tag according to
        {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : A boolean that indicates whether to suppress vibrations
        and audible alerts when reusing a `tag` value.
        If _options_'s `renotify` is `true`
        and _options_'s `tag` is the empty string a `TypeError` will be
        thrown. The default is `false`.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Indicates that on devices with sufficiently
        large screens, a notification should remain active until the user clicks or
        dismisses it. If this value is absent or `false`, the desktop version of Chrome will
        auto-minimize notifications after approximately twenty seconds. The default value
        is `false`.
    - `silent` {{optional_inline}}
      - : When set indicates that no sounds or vibrations should be
        made. If _options_'s `silent` is `true`
        and _options_'s `vibrate` is present a `TypeError` exception
        will be thrown. The default value is `false`.
    - `tag` {{optional_inline}}
      - : An ID for a given notification that allows you to find,
        replace, or remove the notification using a script if necessary.
    - `timestamp` {{optional_inline}}
      - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, representing the time associated with the notification. This could be in the past when a notification is used for a message that couldn't immediately be delivered because the device was offline, or in the future for a meeting that is about to start.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : A vibration pattern to run with the display of the
        notification. A vibration pattern can be an array with as few as one member. The
        values are times in milliseconds where the even indices (0, 2, 4, etc.) indicate
        how long to vibrate and the odd indices indicate how long to pause. For
        example, `[300, 100, 400]` would vibrate 300ms, pause 100ms, then
        vibrate 400ms.

### Return value

A {{jsxref('Promise')}} that resolves to `undefined`.

### Exceptions

- `TypeError`
  - : Thrown if current service worker's state is not `activating` or `activated`, or if the user has explicitly denied the browser's permission request to use the API.

## Examples

```js
navigator.serviceWorker.register("sw.js");

function showNotification() {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon: "../images/touch/chrome-touch-icon-192x192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}
```

To invoke the above function at an appropriate time, you could listen to the
{{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

You can also retrieve details of the {{domxref("Notification")}}s that have been fired
from the current service worker using
{{domxref("ServiceWorkerRegistration.getNotifications()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
