---
title: PermissionStatus.state
slug: Web/API/PermissionStatus/state
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
browser-compat: api.PermissionStatus.state
---
{{APIRef("Permissions API")}}{{SeeCompatTable}}

The **`state`** read-only property of the
{{domxref("PermissionStatus")}} interface returns the state of a requested permission.
This property returns one of `'granted'`, `'denied'`, or
`'prompt'`.

## Syntax

```js
var permission = PermissionStatus.state;
```

## Example

```js
navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
  console.log('geolocation permission state is ', permissionStatus.state);
  permissionStatus.onchange = function() {
    console.log('geolocation permission status has changed to ', this.state);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
