---
title: "Permissions: revoke() method"
short-title: revoke()
slug: Web/API/Permissions/revoke
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Permissions.revoke
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}{{deprecated_header}}

The **`revoke()`** method of the {{domxref("Permissions")}} interface reverts a currently set permission back to its default state, which is usually `prompt`.
This method is called on the global {{domxref("Permissions")}} object {{domxref("navigator.permissions")}}.

This method is removed from the main permissions API specification because its use case is unclear.
Permissions are managed by the browser and the current permission model does not involve the site developer being able to imperatively request or revoke permissions. Browsers have shipped this API behind preferences but it's unlikely to reach the standards track.
For more context, see the [original discussion to remove `permissions.revoke()`](https://github.com/w3c/permissions/issues/46).

## Syntax

```js-nolint
revoke(permissionDescriptor)
```

### Parameters

- `permissionDescriptor`

  - : An object that sets options for the `revoke` operation.
    The available options for this descriptor depend on the permission type.

    All permissions have a name:

    - `name`
      - : A string containing the name of the API whose permissions you want to query.
        The returned {{jsxref("Promise")}} will reject with a {{jsxref("TypeError")}} if the permission name is not supported by the browser.

    For the `push` permissions you can also specify:

    - `userVisibleOnly` {{optional_inline}}
      - : (Push only, not supported in Firefox — see the Browser Support section below) Indicates whether you want to show a notification for every message or be able to send silent push notifications.
        The default is `false`.

    For the `midi` permission you can also specify:

    - `sysex` {{optional_inline}}
      - : Indicates whether you need and/or receive system exclusive messages.
        The default is `false`.

### Return value

A {{jsxref("Promise")}} that calls its fulfillment handler with a {{domxref("PermissionStatus")}} object indicating the result of the request.

### Exceptions

- {{jsxref("TypeError")}}
  - : Retrieving the `PermissionDescriptor` information failed in some way, or the permission doesn't exist or is currently unsupported (e.g. `midi`, or `push` with `userVisibleOnly`).

## Examples

This function can be used by an app to request that its own Geolocation API permission be revoked.

```js
function revokePermission() {
  navigator.permissions.revoke({ name: "geolocation" }).then((result) => {
    report(result.state);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
