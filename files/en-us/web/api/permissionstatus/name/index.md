---
title: PermissionStatus.name
slug: Web/API/PermissionStatus/name
tags:
  - API
  - Event Handler
  - Experimental
  - PermissionStatus
  - Permissions
  - Permissions API
  - Property
  - Reference
  - status
browser-compat: api.PermissionStatus.name
---
{{APIRef("Permissions API")}}{{SeeCompatTable}}

The **`name`** read-only property of the {{domxref("PermissionStatus")}} interface returns the name of a requested permission.

## Value

A read-only value that is identical to the `name` argument passed to {{domxref("Permissions.query", "navigator.permissions.query()")}}.

## Example

```js
function stateChangeListener() {
  console.log(this.name, 'permission status changed to', this.state);
}
function queryAndTrackPermission(permissionName) {
  navigator.permissions.query({name: permissionName}).then(function(permissionStatus) {
    console.log(permissionName, 'permission state is', permissionStatus.state);
    permissionStatus.onchange = stateChangeListener;
  });
};
queryAndTrackPermission('geolocation');
queryAndTrackPermission('midi');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
