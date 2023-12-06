---
title: "Notification: renotify property"
short-title: renotify
slug: Web/API/Notification/renotify
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Notification.renotify
---

{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`renotify`** read-only property of the
{{domxref("Notification")}} interface specifies whether the user should be notified
after a new notification replaces an old one, as specified in the `renotify`
option of the {{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A boolean value. `false` is the default; `true` makes
the notification renotify the user.

## Examples

The following snippet is intended to fire a notification that renotifies the user after
it has been replaced; a simple `options` object is created, and then the
notification is fired using the `Notification()` constructor.

```js
const options = {
  body: "Your code submission has received 3 new review comments.",
  renotify: true,
};

const n = new Notification("New review activity", options);

console.log(n.renotify); // "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
