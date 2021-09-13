---
title: NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
tags:
  - API
  - Constructor
  - Experimental
  - NotificationEvent
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.NotificationEvent.NotificationEvent
---
{{APIRef("Web Notifications")}}{{draft}}

The **`NotificationEvent()`** constructor creates a new
{{domxref("NotificationEvent")}} object.

## Syntax

```js
var myNotificationEvent = new NotificationEvent(type, NotificationEventInit);
```

### Parameters

- `type`
  - : TBD
- `NotificationEventInit` {{optional_inline}}
  - : A dictionary object containing a {{domxref("Notification")}} object to be used as
    the notification the event is dispatched on. In later drafts of the specification,
    this parameter is not optional.

## Example

```js
var n = new Notification('Hello');
var init = { notification: n };
var myNotificationEvent = new NotificationEvent(type, init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
