---
title: "Notification: silent property"
short-title: silent
slug: Web/API/Notification/silent
page-type: web-api-instance-property
browser-compat: api.Notification.silent
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}

The **`silent`** read-only property of the
{{domxref("Notification")}} interface specifies whether the notification should be
silent, i.e., no sounds or vibrations should be issued, regardless of the device
settings. This is specified in the `silent` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A boolean value. `false` is the default; `true` makes
the notification silent.

## Examples

The following snippet is intended to fire a silent notification; a simple
`options` object is created, and then the notification is fired using the
{{DOMxRef("Notification.Notification","Notification()")}} constructor.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  silent: true,
};

const n = new Notification("New review activity", options);

console.log(n.silent); // "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
