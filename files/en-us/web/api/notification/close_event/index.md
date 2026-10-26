---
title: "Notification: close event"
short-title: close
slug: Web/API/Notification/close_event
page-type: web-api-event
browser-compat: api.Notification.close_event
---

{{APIRef("Web Notifications")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`close`** event of the {{domxref("Notification")}} interface fires when a {{domxref("Notification")}} is closed.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("close", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onclose = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
