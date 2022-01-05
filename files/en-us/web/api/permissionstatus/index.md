---
title: PermissionStatus
slug: Web/API/PermissionStatus
tags:
  - API
  - Experimental
  - Interface
  - PermissionStatus
  - Permissions
  - Permissions API
  - Reference
browser-compat: api.PermissionStatus
---
{{APIRef("Permissions API")}}{{SeeCompatTable}}

The **`PermissionStatus`** interface of the [Permissions API](Permissions_API) provides the state of an object and an event handler for monitoring changes to said state.

## Properties

- {{domxref("PermissionStatus.name")}} {{readonlyinline}}
  - : Returns the name of a requested permission, identical to the `name` passed to {{domxref("Permissions.query")}}.
- {{domxref("PermissionStatus.state")}} {{readonlyinline}}
  - : Returns the state of a requested permission; one of `'granted'`, `'denied'`, or `'prompt'`.
- `PermissionStatus.status`{{readonlyinline}} {{deprecated_inline}}
  - : Returns the state of a requested permission; one of `'granted'`, `'denied'`, or `'prompt'`. Later versions of the specification replace this with {{domxref("PermissionStatus.state")}}.

### Event Handler

- {{domxref("PermissionStatus.onchange")}}
  - : An event called whenever `PermissionStatus.status` changes.

## Example

```js
navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
  console.log('geolocation permission status is ', permissionStatus.state);
  permissionStatus.onchange = function() {
    console.log('geolocation permission status has changed to ', this.state);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
