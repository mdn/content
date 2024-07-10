---
title: Permissions
slug: Web/API/Permissions
page-type: web-api-interface
browser-compat: api.Permissions
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

The **`Permissions`** interface of the [Permissions API](/en-US/docs/Web/API/Permissions_API) provides the core Permission API functionality, such as methods for querying and revoking permissions

## Instance methods

- {{domxref("Permissions.query","Permissions.query()")}}
  - : Returns the user permission status for a given API.
- {{domxref("Permissions.revoke","Permissions.revoke()")}} {{Deprecated_Inline}}
  - : Revokes the permission currently set on a given API.

## Example

```js
navigator.permissions.query({ name: "geolocation" }).then((result) => {
  if (result.state === "granted") {
    showLocalNewsWithGeolocation();
  } else if (result.state === "prompt") {
    showButtonToEnableLocalNews();
  }
  // Don't do anything if the permission was denied.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
