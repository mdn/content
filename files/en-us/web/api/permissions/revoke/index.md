---
title: Permissions.revoke()
slug: Web/API/Permissions/revoke
tags:
  - API
  - Experimental
  - Method
  - Permissions
  - Permissions API
  - Reference
  - revoke
browser-compat: api.Permissions.revoke
---
{{APIRef("Permissions API")}}{{deprecated_header}}

The **`Permissions.revoke()`** method of the
{{domxref("Permissions")}} interface reverts a currently set permission back to its
default state, which is usually `prompt`.

## Syntax

This method is called on the global {{domxref("Permissions")}} object
{{domxref("navigator.permissions")}}.

```js
var revokePromise = navigator.permissions.revoke(descriptor);
```

### Parameters

- `descriptor`

  - : An object based on the `PermissionDescriptor` dictionary that sets
    options for the operation consisting of a comma-separated list of name-value pairs.
    The available options are:

    - `name`: The name of the API whose permissions you want to query.
      Valid values are `'geolocation'`, `'midi'`,
      `'notifications'`, and `'push'`.
    - `userVisibleOnly`: (Push only, not supported in Firefox — see the
      {{anch("Browser compatibility")}} section below) Indicates whether you want to
      show a notification for every message or be able to send silent push
      notifications. The default is `false`.
    - `sysex`: (MIDI only) Indicates whether you need and/or receive system
      exclusive messages. The default is `false`.

> **Note:** As of Firefox 44, the permissions for [Notifications](/en-US/docs/Web/API/Notifications_API) and [Push](/en-US/docs/Web/API/Push_API) have been merged. If permission is
> granted (e.g. by the user, in the relevant permissions dialog),
> `navigator.permissions.query()` will return `true` for both
> `notifications` and `push`.

> **Note:** The `persistent-storage` permission allows an
> origin to use a persistent box (i.e [persistent storage](https://storage.spec.whatwg.org/#persistence)) for its
> storage, as per the [Storage API](https://storage.spec.whatwg.org/).

### Returns

A {{jsxref("Promise")}} that calls its fulfillment handler with a
{{domxref("PermissionStatus")}} object indicating the result of the request.

### Exceptions

- `TypeError`
  - : Retrieving the `PermissionDescriptor` information failed in some way, or
    the permission doesn't exist or is currently unsupported (e.g. `midi`, or
    `push` with `userVisibleOnly`).

## Example

This function can be used by an app to request that its own Geolocation API permission
be revoked.

```js
function revokePermission() {
  navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
    report(result.state);
  });
}
```

## Browser compatibility

{{Compat}}
