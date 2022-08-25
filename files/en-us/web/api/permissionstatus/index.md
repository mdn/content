---
title: PermissionStatus
slug: Web/API/PermissionStatus
page-type: web-api-interface
tags:
  - API
  - Interface
  - PermissionStatus
  - Permissions
  - Permissions API
  - Reference
browser-compat: api.PermissionStatus
---
{{APIRef("Permissions API")}}

The **`PermissionStatus`** interface of the [Permissions API](Permissions_API) provides the state of an object and an event handler for monitoring changes to said state.

{{InheritanceDiagram}}

## Properties

- {{domxref("PermissionStatus.name")}} {{ReadOnlyInline}}
  - : Returns the name of a requested permission, identical to the `name` passed to {{domxref("Permissions.query")}}.
- {{domxref("PermissionStatus.state")}} {{ReadOnlyInline}}
  - : Returns the state of a requested permission; one of `'granted'`, `'denied'`, or `'prompt'`.
- `PermissionStatus.status` {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns the state of a requested permission; one of `'granted'`, `'denied'`, or `'prompt'`. Later versions of the specification replace this with {{domxref("PermissionStatus.state")}}.

### Events

- {{domxref("PermissionStatus.change_event", "change")}}
  - : An event called whenever `PermissionStatus.status` changes.

## Example

```js
navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
  console.log(`geolocation permission status is ${permissionStatus.state}`);
  permissionStatus.onchange = () => {
    console.log(`geolocation permission status has changed to ${permissionStatus.state}`);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
