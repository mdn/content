---
title: Notification.body
slug: Web/API/Notification/body
page-type: web-api-instance-property
tags:
  - API
  - BODY
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
browser-compat: api.Notification.body
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`body`** read-only property of the
{{domxref("Notification")}} interface indicates the body string of the notification, as
specified in the `body` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A string.

## Examples

```js
function spawnNotification(theBody, theIcon, theTitle) {
  const options = {
      body: theBody,
      icon: theIcon
  }
  const n = new Notification(theTitle, options);

  console.log(n.body);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
