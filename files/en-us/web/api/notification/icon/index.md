---
title: "Notification: icon property"
short-title: icon
slug: Web/API/Notification/icon
page-type: web-api-instance-property
browser-compat: api.Notification.icon
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`icon`** read-only property of the
{{domxref("Notification")}} interface contains the URL of an icon to be displayed as
part of the notification, as specified in the `icon` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

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
