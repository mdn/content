---
title: "Notification: icon property"
short-title: icon
slug: Web/API/Notification/icon
page-type: web-api-instance-property
browser-compat: api.Notification.icon
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`icon`** read-only property of the {{domxref("Notification")}} interface returns a string containing the URL of a small image that reinforces the notification — for example, an app logo or a photo of the message sender. It is displayed alongside the notification title and body.

See [Notifications with different images](/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification#notifications_with_different_images) for a comparison of the three image options.

## Value

A string.

## Examples

In our [To-do list app](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view the app running live](https://mdn.github.io/dom-examples/to-do-notifications/)), we use the {{domxref("Notification.Notification","Notification()")}}
constructor to fire a notification, passing it arguments to specify the body, icon and
title we want.

```js
const notification = new Notification("To do list", {
  body: text,
  icon: img,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
