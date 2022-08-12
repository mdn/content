---
title: Notification.title
slug: Web/API/Notification/title
page-type: web-api-instance-property
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - Title
browser-compat: api.Notification.title
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`title`** read-only property of the
{{domxref("Notification")}} interface indicates the title of the notification, as
specified in the `title` parameter of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A string.

## Examples

```js
function spawnNotification(theBody,theIcon,theTitle) {
  const options = {
      body: theBody,
      icon: theIcon
  }

  const n = new Notification(theTitle,options);

  console.log(n.title)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
