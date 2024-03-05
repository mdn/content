---
title: "Bluetooth: getAvailability() method"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Bluetooth.getAvailability
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Bluetooth API")}}

The **`getAvailability()`** method of the {{DOMxRef("Bluetooth")}} interface _nominally_ returns `true` if the user-agent the ability to support Bluetooth (because the device has a Bluetooth adapter), and `false` otherwise.

The word "nominally" is used because if permission to use the Web Bluetooth API is disallowed by the [`Permissions-Policy: bluetooth`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) permission, the method will always return `false`.
In addition, a user can configure their browser to resolve with a particular value, which might not match whether or not a Bluetooth adapter is present, and this setting value be used if access is not blocked by the permission.

Even if `getAvailability()` returns `true` and the device actually has a Bluetooth adaptor, this does not necessarily mean that calling {{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} will resolve with a {{DOMxRef("BluetoothDevice")}}.
The presence of an adaptor does not necessarily indicate that the device is powered, and a user might not allow use of the API even if `getAvailability()` returns `true`.

## Syntax

```js-nolint
getAvailability()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that resolves with a {{JSxRef("Boolean")}}.

The {{JSxRef("Promise")}} will resolve with a value of `false` if access is disallowed by [`Permissions-Policy: bluetooth`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth), if the user has configured the browser to always resolve with `false`, or if the device does not have a Bluetooth adapter (and the user has not configured the browser to resolve with `true`).
Otherwise it will resolve with `true`.

## Exceptions

None.

## Examples

The following snippet prints out a message in the console specifying whether or not Bluetooth is supported by the device:

```js
navigator.bluetooth.getAvailability().then((available) => {
  if (available) {
    console.log("This device supports Bluetooth!");
  } else {
    console.log("Doh! Bluetooth is not supported");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
