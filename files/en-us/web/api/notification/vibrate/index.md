---
title: Notification.vibrate
slug: Web/API/Notification/vibrate
page-type: web-api-instance-property
tags:
  - API
  - Device
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - vibrate
  - Experimental
browser-compat: api.Notification.vibrate
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{SecureContext_Header}}{{SeeCompatTable}}

The `vibrate` read-only property of the {{domxref("Notification")}}
interface specifies a [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns)
for the device's vibration hardware to emit when the notification fires. This is
specified in the `vibrate` option of the
{{domxref("Notification.Notification","Notification()")}} constructor.

## Value

A [vibration pattern](/en-US/docs/Web/API/Vibration_API#vibration_patterns), as specified in the [Vibration API spec](https://w3c.github.io/vibration/).

## Examples

The following snippet is intended to create a notification that also triggers a device
vibration; a simple `options` object is created, and then the notification is
fired using the `Notification()` constructor.

```js
const options = {
  body: 'Do you like my body?',
  vibrate: [200, 100, 200]
}

const n = new Notification('Test notification',options);

console.log(n.vibrate) // should log [200,100,200]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
