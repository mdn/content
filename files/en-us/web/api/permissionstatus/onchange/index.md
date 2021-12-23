---
title: PermissionStatus.onchange
slug: Web/API/PermissionStatus/onchange
tags:
  - API
  - Event Handler
  - Experimental
  - PermissionStatus
  - Permissions
  - Property
  - Reference
  - onchange
browser-compat: api.PermissionStatus.onchange
---
{{APIRef("Permissions API")}}{{SeeCompatTable}}

The **`onchange`** event handler of the {{domxref("PermissionStatus")}} interface is called whenever the {{domxref("PermissionStatus.state")}} property changes.

## Syntax

```js
PermissionStatus.onchange = function() { /* ... */ }
PermissionStatus.addEventListener('change', function() { /* ... */ })
```

## Example

```js
navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
  console.log('geolocation permission state is ', permissionStatus.state);
  permissionStatus.onchange = function() {
    console.log('geolocation permission state has changed to ', this.state);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
