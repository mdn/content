---
title: "Notification: show event"
short-title: show
slug: Web/API/Notification/show_event
page-type: web-api-event
browser-compat: api.Notification.show_event
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`show`** event of the {{domxref("Notification")}} interface fires when a {{domxref("Notification")}} is displayed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("show", (event) => {});

onshow = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Notification")}}
- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
