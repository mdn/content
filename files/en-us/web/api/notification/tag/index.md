---
title: "Notification: tag property"
short-title: tag
slug: Web/API/Notification/tag
page-type: web-api-instance-property
browser-compat: api.Notification.tag
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`tag`** read-only property of the
{{domxref("Notification")}} interface signifies an identifying tag for the notification,
as specified in the `tag` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The idea of notification tags is that more than one notification can share the same
tag, linking them together. One notification can then be programmatically replaced with
another to avoid the users' screen being filled up with a huge number of similar
notifications.

## Value

A string.

## Examples

Our [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API#replacing_existing_notifications) article has a good example of tag usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
