---
title: WorkerNavigator.permissions
slug: Web/API/WorkerNavigator/permissions
tags:
  - API
  - Experimental
  - Permissions
  - Property
  - Reference
  - Web Workers
  - WorkerNavigator
  - Workers
browser-compat: api.WorkerNavigator.permissions
---
{{APIRef("Web Workers API")}}{{SeeCompatTable}}

The **`WorkerNavigator.permissions`** read-only property
returns a {{domxref("Permissions")}} object that can be used to query and update
permission status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).

## Syntax

```js
permissionsObj = navigator.permissions
```

## Value

A {{domxref("Permissions")}} object.

## Examples

```js
navigator.permissions.query({name:'notifications'}).then(function(result) {
  if (result.state === 'granted') {
    showNotification();
  } else if (result.state === 'prompt') {
    requestNotificationPermission()
  }
});
```

## Specifications

{{Specifications}}

## Browser Support

{{Compat}}

## See also

- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- [Web Worker API](/en-US/docs/Web/API/Web_Workers_API)
