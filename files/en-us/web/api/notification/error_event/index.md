---
title: "Notification: error event"
short-title: error
slug: Web/API/Notification/error_event
page-type: web-api-event
browser-compat: api.Notification.error_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`error`** event of the {{domxref("Notification")}} interface fires when something goes wrong with a {{domxref("Notification")}} (in many cases an error preventing the notification from being displayed.)

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
