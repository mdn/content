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

The **`revoke()`** method of the
{{domxref("Permissions")}} interface reverts a currently set permission back to its
default state, which is usually `prompt`.
This method is called on the global {{domxref("Permissions")}} object
{{domxref("navigator.permissions")}}.

This method is removed from the main permissions API specification because its use case is unclear. Permissions are managed by the browser and the current permission model does not involve the site developer being able to imperatively request or revoke permissions. Browsers have shipped this API behind preferences but it's unlikely to reach the standards track. For more context, see the [original discussion to remove `permissions.revoke()`](https://github.com/w3c/permissions/issues/46).

## Syntax

```js-nolint
revoke(descriptor)
```

### Parameters

- `descriptor`

  - : An object based on the `PermissionDescriptor` dictionary that sets
    options for the operation consisting of a comma-separated list of name-value pairs.
    The available options are:

    - `name`
      - : The name of the API whose permissions you want to query. Each browser supports a different set of values. You can consult the [Firefox values](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10), the [Chromium values](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl), and the [WebKit values](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl).
    - `userVisibleOnly`
      - : (Push only, not supported in Firefox — see the
        [Browser compatibility](#browser_compatibility) section below) Indicates whether you want to
        show a notification for every message or be able to send silent push
        notifications. The default is `false`.
    - `sysex` (MIDI only)
      - : Indicates whether you need and/or receive system
        exclusive messages. The default is `false`.

> **Note:** As of Firefox 44, the permissions for [Notifications](/en-US/docs/Web/API/Notifications_API) and [Push](/en-US/docs/Web/API/Push_API) have been merged. If permission is
> granted (e.g. by the user, in the relevant permissions dialog),
> `navigator.permissions.query()` will return `true` for both
> `notifications` and `push`.

> **Note:** The `persistent-storage` permission allows an
> origin to use a persistent box (i.e., [persistent storage](https://storage.spec.whatwg.org/#persistence)) for its
> storage, as per the [Storage API](https://storage.spec.whatwg.org/).

### Return value

A {{jsxref("Promise")}} that calls its fulfillment handler with a
{{domxref("PermissionStatus")}} object indicating the result of the request.

### Exceptions

- {{jsxref("TypeError")}}
  - : Retrieving the `PermissionDescriptor` information failed in some way, or
    the permission doesn't exist or is currently unsupported (e.g. `midi`, or
    `push` with `userVisibleOnly`).

## Examples

This function can be used by an app to request that its own Geolocation API permission
be revoked.

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
