---
title: "WorkerNavigator: permissions property"
short-title: permissions
slug: Web/API/WorkerNavigator/permissions
page-type: web-api-instance-property
browser-compat: api.WorkerNavigator.permissions
---

{{APIRef("Permissions API")}}{{AvailableInWorkers("worker")}}

The **`permissions`** read-only property of the {{domxref("WorkerNavigator")}} interface
returns a {{domxref("Permissions")}} object that can be used to query and update
permission status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).

## Value

A {{domxref("Permissions")}} object.

## Examples

```js
navigator.permissions.query({ name: "notifications" }).then((result) => {
  if (result.state === "granted") {
    showNotification();
  } else if (result.state === "prompt") {
    requestNotificationPermission();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Web Worker API](/en-US/docs/Web/API/Web_Workers_API)
