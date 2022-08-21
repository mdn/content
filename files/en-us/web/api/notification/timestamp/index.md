---
title: Notification.timestamp
slug: Web/API/Notification/timestamp
page-type: web-api-instance-property
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - timeStamp
  - Experimental
browser-compat: api.Notification.timestamp
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`timestamp`** read-only property of the
{{domxref("Notification")}} interface returns a {{domxref("DOMTimeStamp")}}, as
specified in the `timestamp` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The notification's timestamp can represent the time, in milliseconds since 00:00:00 UTC
on 1 January 1970, of the event for which the notification was created, or it can be an
arbitrary timestamp that you want associated with the notification. For example, a
timestamp for an upcoming meeting could be set in the future, whereas a timestamp for a
missed message could be set in the past.

## Value

A {{domxref("DOMTimeStamp")}}.

## Examples

The following snippet fires a notification; a simple `options` object is
created, then the notification is fired using the `Notification()`
constructor.

```js
const dts = Math.floor(Date.now());

const options = {
  body: 'Do you like my body?',
  timestamp: dts
}

const n = new Notification('Test notification',options);

console.log(n.timestamp) // should log original timestamp
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
