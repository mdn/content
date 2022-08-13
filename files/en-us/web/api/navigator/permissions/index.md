---
title: Navigator.permissions
slug: Web/API/Navigator/permissions
page-type: web-api-instance-property
tags:
  - API
  - Navigator
  - Permissions
  - Property
  - Reference
browser-compat: api.Navigator.permissions
---
{{APIRef("HTML DOM")}}

The **`Navigator.permissions`** read-only property returns a
{{domxref("Permissions")}} object that can be used to query and update permission
status of APIs covered by the [Permissions API](/en-US/docs/Web/API/Permissions_API).

## Value

A {{domxref("Permissions")}} object.

## Examples

```js
navigator.permissions.query({name:'geolocation'}).then((result) => {
  if (result.state === 'granted') {
    showMap();
  } else if (result.state === 'prompt') {
    showButtonToEnableMap();
  }
  // Don't do anything if the permission was denied.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions API](/en-US/docs/Web/API/Permissions_API)
- {{domxref("Navigator")}}
