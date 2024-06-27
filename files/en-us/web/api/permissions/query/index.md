---
title: "Permissions: query() method"
short-title: query()
slug: Web/API/Permissions/query
page-type: web-api-instance-method
browser-compat: api.Permissions.query
---

{{APIRef("Permissions API")}}{{AvailableInWorkers}}

The **`query()`** method of the {{domxref("Permissions")}} interface returns the state of a user permission on the global scope.

## Syntax

```js-nolint
query(permissionDescriptor)
```

### Parameters

- `permissionDescriptor`

  - : An object that sets options for the `query` operation consisting of a comma-separated list of name-value pairs. The available options are:

    - `name`
      - : The name of the API whose permissions you want to query. Each browser supports a different set of values. You'll find Firefox values [there](https://searchfox.org/mozilla-central/source/dom/webidl/Permissions.webidl#10), Chromium values [there](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/modules/permissions/permission_descriptor.idl), and WebKit values [there](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/Modules/permissions/PermissionName.idl).
    - `userVisibleOnly`
      - : (Push only, not supported in Firefox — see the Browser Support section below) Indicates whether you want to show a notification for every message or be able to send silent push notifications. The default is `false`.
    - `sysex` (MIDI only)
      - : Indicates whether you need and/or receive system exclusive messages. The default is `false`.

> **Note:** As of Firefox 44, the permissions for [Notifications](/en-US/docs/Web/API/Notifications_API) and [Push](/en-US/docs/Web/API/Push_API) have been merged. If permission is granted (e.g. by the user, in the relevant permissions dialog), `navigator.permissions.query()` will return `true` for both `notifications` and `push`.

> **Note:** The `persistent-storage` permission allows an origin to use a persistent box (i.e., [persistent storage](https://storage.spec.whatwg.org/#persistence)) for its storage, as per the [Storage API](https://storage.spec.whatwg.org/).

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("PermissionStatus")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `query()` method is invoked in the browsing context and its associated document is not fully active.
- {{jsxref("TypeError")}}
  - : Thrown if retrieving the `PermissionDescriptor` information failed in some way, or the permission doesn't exist or is unsupported by the user agent.

## Examples

### Display news based on geolocation permission

This example shows how you might display news related to the current location if the `geolocation` permission is granted, and otherwise prompt the user to enable granting access to the location.

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

### Test support for various permissions

This example shows the result of querying each of the permissions.

The code uses `navigator.permissions.query()` to query each permission, logging either the permission status or the fact that the permission is not supported on the browser.
Note that the `query()` is called inside a `try...catch` block because the associated `Promise` will reject if the permission is not supported.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
// Array of permissions
const permissions = [
  "accelerometer",
  "accessibility-events",
  "ambient-light-sensor",
  "background-sync",
  "camera",
  "clipboard-read",
  "clipboard-write",
  "geolocation",
  "gyroscope",
  "local-fonts",
  "magnetometer",
  "microphone",
  "midi",
  "notifications",
  "payment-handler",
  "persistent-storage",
  "push",
  "screen-wake-lock",
  "storage-access",
  "top-level-storage-access",
  "window-management",
];

processPermissions();

// Iterate through the permissions and log the result
async function processPermissions() {
  for (const permission of permissions) {
    const result = await getPermission(permission);
    log(result);
  }
}

// Query a single permission in a try...catch block and return result
async function getPermission(permission) {
  try {
    const result = await navigator.permissions.query({ name: permission });
    return `${permission}: ${result.state}`;
  } catch (error) {
    return `${permission} (not supported)`;
  }
}
```

The log from running the code is shown below:

{{EmbedLiveSample('Test support for various permissions',"100%", "370px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
