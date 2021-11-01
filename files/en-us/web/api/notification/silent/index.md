---
title: Notification.silent
slug: Web/API/Notification/silent
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - silent
browser-compat: api.Notification.silent
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`silent`** read-only property of the
{{domxref("Notification")}} interface specifies whether the notification should be
silent, i.e., no sounds or vibrations should be issued, regardless of the device
settings. This is specified in the `silent` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## Syntax

```js
var silent = Notification.silent;
```

### Value

A boolean value. `false` is the default; `true` makes
the notification silent.

## Examples

The following snippet is intended to fire a silent notification; a simple
`options` object is created, and then the notification is fired using the
{{DOMxRef("Notification.Notification","Notification()")}} constructor.

```js
var options = {
  body: 'Do you like my body?',
  silent: true
}

var n = new Notification('Test notification', options);

console.log(n.silent) // should log true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
