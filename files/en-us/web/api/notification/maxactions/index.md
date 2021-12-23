---
title: Notification.maxActions
slug: Web/API/Notification/maxActions
tags:
  - API
  - Notification
  - Notifications
  - Notifications API
  - Property
  - Reference
  - actions
browser-compat: api.Notification.maxActions
---
{{APIRef("Web Notifications")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`maxActions`** attribute of the
{{domxref("Notification")}} interface returns the maximum number of actions supported by
the device and the User Agent. Effectively, this is the maximum number of elements in
{{domxref("Notification.actions")}} array which will be respected by the User Agent.

## Syntax

```js
Notification.maxActions
```

### Value

An integer {{JSxRef("Number")}} which indicates the largest number of notification
actions that can be presented to the user by the User Agent and the device.

## Examples

The following snippet logs the maximum number of supported actions.

```js
const maxActions = Notification.maxActions;
console.log('This device can display at most ' + maxActions + ' actions on each notification.');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using
  the Notifications API](/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API)
- {{domxref("Notification.actions")}}
