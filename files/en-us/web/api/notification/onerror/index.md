---
title: Notification.onerror
slug: Web/API/Notification/onerror
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - onerror
browser-compat: api.Notification.onerror
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`onerror`** property of the {{domxref("Notification")}}
interface specifies an event listener to receive {{domxref("Element/error_event", "error")}} events.
These events occur when something goes wrong with a {{domxref("Notification")}}
(in many cases an error preventing the notification from being displayed.)

## Syntax

```js
Notification.onerror = function() { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
