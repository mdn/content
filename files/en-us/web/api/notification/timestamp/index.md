---
title: Notification.timestamp
slug: Web/API/Notification/timestamp
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - timeStamp
browser-compat: api.Notification.timestamp
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`timestamp`** read-only property of the
{{domxref("Notification")}} interface returns a {{domxref("DOMTimeStamp")}}, as
specified in the `timestamp` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The notification's timestamp can represent the time, in milliseconds since 00:00:00 UTC
on 1 January 1970, of the event for which the notification was created, or it can be an
arbitrary timestamp that you want associated with the notification. For example, a
timestamp for an upcoming meeting could be set in the future, whereas a timestamp for a
missed message could be set in the past.

## Syntax

```js
var timestamp = Notification.timestamp;
```

### Value

A {{domxref("DOMTimeStamp")}}.

## Examples

The following snippet fires a notification; a simple `options` object is
created, then the notification is fired using the `Notification()`
constructor.

```js
var dts = Math.floor(Date.now());

var options = {
  body: 'Do you like my body?',
  timestamp: dts
}

var n = new Notification('Test notification',options);

console.log(n.timestamp) // should log original timestamp
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
