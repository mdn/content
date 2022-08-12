---
title: 'Notification: close event'
slug: Web/API/Notification/close_event
page-type: web-api-event
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Event
  - Reference
  - close
browser-compat: api.Notification.close_event
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`close`** event of the {{domxref("Notification")}} interface fires when a {{domxref("Notification")}} is closed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('close', (event) => { });

onclose = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
