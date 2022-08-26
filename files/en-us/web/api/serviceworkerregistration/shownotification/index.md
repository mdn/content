---
title: ServiceWorkerRegistration.showNotification()
slug: Web/API/ServiceWorkerRegistration/showNotification
page-type: web-api-instance-method
tags:
  - API
  - Method
  - NeedsExample
  - Reference
  - Service Workers
  - ServiceWorker
  - ServiceWorkerRegistration
  - showNotification
browser-compat: api.ServiceWorkerRegistration.showNotification
---
{{APIRef("Service Workers API")}}

The `showNotification()` method of the
{{domxref("ServiceWorkerRegistration")}} interface creates a notification on an active
service worker.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
showNotification(title)
showNotification(title, options)
```

### Parameters

- `title`
  - : The title that must be shown within the notification
- `options` {{optional_inline}}

  - : An object that allows configuring the notification. It can have the following
    properties:

    - `actions` {{experimental_inline}}
      - : An array of actions to display in the notification. Each element in the array is an object with the following members:

        - `action`
          - : A string identifying a user action to be displayed on the notification.
        - `title`
          - : A string containing action text to be shown to the user.
        - `icon`
          - : A string containing the URL of an icon to display with the action.

        Appropriate responses are built using `event.action` within the
        {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

    - `badge` {{experimental_inline}}
      - : a string containing the URL of an image
        to represent the notification when there is not enough space to display the
        notification itself such as for example, the Android Notification Bar. On Android
        devices, the badge should accommodate devices up to 4x resolution, about 96 by 96
        px, and the image will be automatically masked.
    - `body`
      - : A string representing an extra content to display within the
        notification.
    - `data` {{experimental_inline}}
      - : Arbitrary data that you want to be associated with the
        notification. This can be of any data type.
    - `dir`
      - : The direction of the notification; it can be `auto`,  `ltr` or `rtl`.
    - `icon`
      - : a string containing the URL of an image to
        be used as an icon by the notification.
    - `image` {{experimental_inline}}
      - : a string containing the URL of an image to
        be displayed in the notification.
    - `lang`
      - : Specify the lang used within the notification. This string
        must be a valid language tag according to
        {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.
    - `renotify` {{experimental_inline}}
      - : A boolean that indicates whether to suppress vibrations
        and audible alerts when reusing a `tag` value.
        If *options*'s `renotify` is true
        and *options*'s `tag` is the empty string a TypeError will be
        thrown. The default is `false`.
    - `requireInteraction` {{experimental_inline}}
      - : Indicates that on devices with sufficiently
        large screens, a notification should remain active until the user clicks or
        dismisses it. If this value is absent or false, the desktop version of Chrome will
        auto-minimize notifications after approximately twenty seconds. The default value
        is `false`.
    - `silent`
      - : When set indicates that no sounds or vibrations should be
        made. If *options*'s `silent` is true
        and *options*'s `vibrate` is present a TypeError exception
        will be thrown. The default value is `false`.
    - `tag`
      - : An ID for a given notification that allows you to find,
        replace, or remove the notification using a script if necessary.
    - `timestamp`
      - : A {{domxref("DOMTimeStamp")}} representing the time when
        the notification was created. It can be used to indicate the time at which a
        notification is actual. For example, this could be in the past when a notification
        is used for a message that couldn't immediately be delivered because the device
        was offline, or in the future for a meeting that is about to start.
    - `vibrate` {{experimental_inline}}
      - : A vibration pattern to run with the display of the
        notification. A vibration pattern can be an array with as few as one member. The
        values are times in milliseconds where the even indices (0, 2, 4, etc.) indicate
        how long to vibrate and the odd indices indicate how long to pause. For
        example, `[300, 100, 400]` would vibrate 300ms, pause 100ms, then
        vibrate 400ms.

### Return value

A {{jsxref('Promise')}} that resolves to `undefined`.

## Examples

```js
navigator.serviceWorker.register('sw.js');

function showNotification() {
  Notification.requestPermission((result) => {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    }
  });
}
```

To invoke the above function at an appropriate time, you could use the
{{domxref("ServiceWorkerGlobalScope.notificationclick_event", "onnotificationclick")}} event handler.

You can also retrieve details of the {{domxref("Notification")}}s that have been fired
from the current service worker using
{{domxref("ServiceWorkerRegistration.getNotifications()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
