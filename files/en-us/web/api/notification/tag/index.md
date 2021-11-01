---
title: Notification.tag
slug: Web/API/Notification/tag
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - tag
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

## Syntax

```js
var tag = Notification.tag;
```

### Value

A {{domxref("DOMString")}}.

## Examples

Our [Using
the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API#Dealing_with_repeated_notifications) article has a good example of tag usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
