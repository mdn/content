---
title: "PermissionStatus: state property"
short-title: state
slug: Web/API/PermissionStatus/state
page-type: web-api-instance-property
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
navigator.permissions
  .query({ name: "geolocation" })
  .then((permissionStatus) => {
    console.log(`geolocation permission state is ${permissionStatus.state}`);
    permissionStatus.onchange = () => {
      console.log(
        `geolocation permission status has changed to ${permissionStatus.state}`,
      );
    };
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
