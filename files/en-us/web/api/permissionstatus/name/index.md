---
title: "PermissionStatus: name property"
short-title: name
slug: Web/API/PermissionStatus/name
page-type: web-api-instance-property
browser-compat: api.PermissionStatus.name
---

{{APIRef("Permissions API")}}

The **`name`** read-only property of the {{domxref("PermissionStatus")}} interface returns the name of a requested permission.

## Value

A read-only value that is identical to the `name` argument passed to {{domxref("Permissions.query", "navigator.permissions.query()")}}.

## Examples

```js
function stateChangeListener() {
  console.log(`${this.name} permission status changed to ${this.state}`);
}
function queryAndTrackPermission(permissionName) {
  navigator.permissions
    .query({ name: permissionName })
    .then((permissionStatus) => {
      console.log(
        `${permissionName} permission state is ${permissionStatus.state}`,
      );
      permissionStatus.onchange = stateChangeListener;
    });
}
queryAndTrackPermission("geolocation");
queryAndTrackPermission("midi");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
