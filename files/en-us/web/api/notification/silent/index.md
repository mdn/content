---
title: "Notification: silent property"
short-title: silent
slug: Web/API/Notification/silent
page-type: web-api-instance-property
browser-compat: api.Notification.silent
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}} {{AvailableInWorkers}}

The **`silent`** read-only property of the
{{domxref("Notification")}} interface specifies whether the notification should be
silent, i.e., no sounds or vibrations should be issued regardless of the device
settings. This is controlled via the `silent` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A boolean value or `null`. If set to `true`, the notification is silent; if set to `null` (the default value), the device's default settings are respected.

## Examples

The following snippet fires a silent notification. An
`options` object is created, and the notification is fired in response to a button click using the
{{DOMxRef("Notification.Notification","Notification()")}} constructor. The code also includes rudimentary permissions handling, requesting permission from the user to fire notifications if it has not already been granted.

```js
const btn = document.querySelector("button");

const options = {
  body: "No annoying pings or vibrations?",
  silent: true,
};

function requestSilentNotification() {
  const n = new Notification("Silent notification", options);
  console.log(n.silent); // should return true
}

btn.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    requestSilentNotification();
  } else {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        requestSilentNotification();
      } else {
        console.log("Notification permission was not granted");
      }
    });
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
