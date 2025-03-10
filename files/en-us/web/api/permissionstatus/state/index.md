---
title: "PermissionStatus: state property"
short-title: state
slug: Web/API/PermissionStatus/state
page-type: web-api-instance-property
browser-compat: api.PermissionStatus.state
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

The **`state`** read-only property of the
{{domxref("PermissionStatus")}} interface returns the state of a requested permission.
This property returns one of `'granted'`, `'denied'`, or
`'prompt'`.

## Value

One of the following:

- `'granted'`
  - : The user, or the user agent on the user's behalf, has given express permission to use a [powerful feature](https://w3c.github.io/permissions/#dfn-powerful-feature). The caller can use the feature possibly without having the user agent ask the user's permission.
- `'denied'`
  - : The user, or the user agent on the user's behalf, has denied access to this [powerful feature](https://w3c.github.io/permissions/#dfn-powerful-feature). The caller can't use the feature.
- `'prompt'`
  - : The user has not given express permission to use the feature (_i.e., it's the same as denied_). It also means that if a caller attempts to use the feature, the user agent will either be prompting the user for permission or access to the feature will be denied.

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
