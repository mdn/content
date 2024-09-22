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
  - : Defines a title for the notification, which is shown at the top of the notification window.
- `options` {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the notification. The possible options are:

    - `actions` {{optional_inline}} {{experimental_inline}}

      - : An array of actions to display in the notification, for which the default is an empty array. Each element in the array can be an object with the following members:

        - `action`
          - : A string identifying a user action to be displayed on the notification.
        - `title`
          - : A string containing action text to be shown to the user.
        - `icon` {{optional_inline}}
          - : A string containing the URL of an icon to display with the action.

        Appropriate responses are built using `event.action` within the {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} event.

    - `badge` {{optional_inline}} {{experimental_inline}}
      - : A string containing the URL of the image used to represent the notification when there isn't enough space to display the notification itself; for example, the Android Notification Bar. On Android devices, the badge should accommodate devices up to 4x resolution, about 96x96px, and the image will be automatically masked.
    - `body` {{optional_inline}}
      - : A string representing the body text of the notification, which is displayed below the title. The default is the empty string.
    - `data` {{optional_inline}} {{experimental_inline}}
      - : Arbitrary data that you want associated with the notification. This can be of any [structured-clonable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) data type. The default is `null`.
    - `dir` {{optional_inline}}
      - : The direction in which to display the notification. It defaults to `auto`, which just adopts the browser's language setting behavior, but you can override that behavior by setting values of `ltr` and `rtl` (although most browsers seem to ignore these settings.)
    - `icon` {{optional_inline}}
      - : A string containing the URL of an icon to be displayed in the notification.
    - `image` {{optional_inline}} {{experimental_inline}}
      - : A string containing the URL of an image to be displayed in the notification.
    - `lang` {{optional_inline}}
      - : The notification's language, as specified using a string representing a language tag according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. See the Sitepoint [ISO 2 letter language codes](https://www.sitepoint.com/iso-2-letter-language-codes/) page for a simple reference. The default is the empty string.
    - `renotify` {{optional_inline}} {{experimental_inline}}
      - : A boolean value specifying whether the user should be notified after a new notification replaces an old one. The default is `false`, which means they won't be notified. If `true`, then `tag` also must be set.
    - `requireInteraction` {{optional_inline}} {{experimental_inline}}
      - : Indicates that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. The default value is `false`.
    - `silent` {{optional_inline}}
      - : A boolean value specifying whether the notification is silent (no sounds or vibrations issued), regardless of the device settings. The default, `null`, means to respect device defaults. If `true`, then `vibrate` must not be present.
    - `tag` {{optional_inline}}
      - : A string representing an identifying tag for the notification. The default is the empty string.
    - `timestamp` {{optional_inline}}
      - : A timestamp, given as {{glossary("Unix time")}} in milliseconds, representing the time associated with the notification. This could be in the past when a notification is used for a message that couldn't immediately be delivered because the device was offline, or in the future for a meeting that is about to start.
    - `vibrate` {{optional_inline}} {{experimental_inline}}
      - : A [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns) for the device's vibration hardware to emit with the notification. If specified, `silent` must not be `true`.

### Return value

A {{jsxref('Promise')}} that resolves to `undefined`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - The current service worker's state is not `activating` or `activated`.
    - The user has explicitly denied the browser's permission request to use the API.
    - The `silent` option is `true` and the `vibrate` option is specified.
    - The `renotify` option is `true` but the `tag` option is empty.
- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if serializing the `data` option failed for some reason.

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
