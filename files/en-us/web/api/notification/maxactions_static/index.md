---
title: "Notification: maxActions static property"
short-title: maxActions
slug: Web/API/Notification/maxActions_static
page-type: web-api-static-property
status:
  - experimental
browser-compat: api.Notification.maxActions_static
---

{{APIRef("Web Notifications")}}{{SecureContext_Header}}{{SeeCompatTable}} {{AvailableInWorkers}}

The **`maxActions`** read-only static property of the
{{domxref("Notification")}} interface returns the maximum number of actions supported by
the device and the User Agent. Effectively, this is the maximum number of elements in
{{domxref("Notification.actions")}} array which will be respected by the User Agent.

## Value

An integer number which indicates the largest number of notification
actions that can be presented to the user by the User Agent and the device.

## Examples

The following snippet logs the maximum number of supported actions.

```js
const maxActions = Notification.maxActions;
console.log(
  `This device can display at most ${maxActions} actions on each notification.`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
