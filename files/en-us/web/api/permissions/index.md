---
title: Permissions
slug: Web/API/Permissions
tags:
  - API
  - Experimental
  - Interface
  - Permissions
  - Permissions API
  - Reference
browser-compat: api.Permissions
---
{{APIRef("Permissions API")}}{{SeeCompatTable}}

The Permissions interface of the [Permissions API](Permissions_API) provides the core Permission API functionality, such as methods for querying and revoking permissions

## Methods

- {{domxref("Permissions.query","Permissions.query()")}}
  - : Returns the user permission status for a given API.
- {{domxref("Permissions.request","Permissions.request()")}}
  - : Requests permission to use a given API. This is not currently supported in any browser.
- {{domxref("Permissions.requestAll","Permissions.requestAll()")}}
  - : Requests permission to use a given set of APIs. This is not currently supported in any browser.
- {{domxref("Permissions.revoke","Permissions.revoke()")}}
  - : Revokes the permission currently set on a given API.

## Example

```js
navigator.permissions.query({name:'geolocation'}).then(function(result) {
  if (result.state === 'granted') {
    showLocalNewsWithGeolocation();
  } else if (result.state === 'prompt') {
    showButtonToEnableLocalNews();
  }
  // Don't do anything if the permission was denied.
});
```

## Specifications

{{Specifications}}

## Browser Support

{{Compat}}
