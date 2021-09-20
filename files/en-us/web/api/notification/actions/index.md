---
title: Notification.actions
slug: Web/API/Notification/actions
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - actions
browser-compat: api.Notification.actions
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`actions`** read-only property
of the {{domxref("Notification")}} interface returns the list of
{{domxref("NotificationAction")}} objects set using the `actions` option
when creating the notification using the
{{domxref("Notification.Notification","Notification()")}} constructor.

This is
a list of the application-defined actions the user can choose to take immediately within
the context of a notification.

> **Note:** Device and User Agent might be able to display only a limited
> number of actions (due to, e.g., limited screen space). This limit can be infered from
> {{DOMxRef("Notification.maxActions")}}.

## Syntax

```js
var actions[] = Notification.actions;
```

### Value

A read-only array of {{domxref("NotificationAction")}} objects, each describing a
single action the user can choose within a notification.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{DOMxRef("Notification.maxActions")}}
