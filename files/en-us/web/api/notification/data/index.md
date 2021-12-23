---
title: Notification.data
slug: Web/API/Notification/data
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - data
browser-compat: api.Notification.data
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`data`** read-only property of the
{{domxref("Notification")}} interface returns a structured clone of the notification's
data, as specified in the `data` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

The notification's data can be any arbitrary data that you want associated with the
notification.

## Syntax

```js
var data = Notification.data;
```

### Value

A structured clone.

## Examples

The following snippet fires a notification; a simple `options` object is
created, then the notification is fired using the `Notification()`
constructor.

```js
var options = {
  body: 'Do you like my body?',
  data: 'I like peas.'
}

var n = new Notification('Test notification',options);

console.log(n.data) // should return 'I like peas.'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
