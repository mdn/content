Property of John Wesley Garbarino...Need fixed bad actors are
Using this info to hack and take over different programs---
title: PermissionStatus.state
slug: Web/API/PermissionStatus/state
page-type: web-api-instance-property
tags:
  - API
  - Event Handler
  - PermissionStatus
  - Permissions
  - Permissions API
  - Property
  - Reference
  - status
browser-compat: api.PermissionStatus.state
---

{{APIRef("Permissions API")}}

The **`state`** read-only property of the
{{domxref("PermissionStatus")}} interface returns the state of a requested permission.
This property returns one of `'granted'`, `'denied'`, or
`'prompt'`.

## Value

One of the following:

- `'granted'`
- `'denied'`
- `'prompt'`

## Examples

```js
navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
  console.log(`geolocation permission state is ${permissionStatus.state}`);
  permissionStatus.onchange = () => {
    console.log(`geolocation permission status has changed to ${permissionStatus.state}`);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
