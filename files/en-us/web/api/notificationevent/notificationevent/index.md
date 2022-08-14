---
title: NotificationEvent()
slug: Web/API/NotificationEvent/NotificationEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - NotificationEvent
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.NotificationEvent.NotificationEvent
---
{{APIRef("Web Notifications")}}

The **`NotificationEvent()`** constructor creates a new {{domxref("NotificationEvent")}} object.

## Syntax

```js
new NotificationEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `notificationclick` or `notificationclose`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, can have the following properties:
    - `notification`
      - : A {{domxref("Notification")}} object to be used as the notification the event is dispatched on.
    - `action` {{optional_inline}}
      - : An action associated with the notification. It defaults to `""`.

### Return value

A new {{domxref("NotificationEvent()")}} object.

## Examples

```js
const n = new Notification('Hello');
const myNotificationEvent = new NotificationEvent(type, { notification: n });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
