---
title: "Bluetooth: getAvailability() method"
short-title: getAvailability()
slug: Web/API/Bluetooth/getAvailability
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Bluetooth.getAvailability
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`getAvailability()`** method of the {{DOMxRef("Bluetooth")}} interface _nominally_ returns `true` if the user agent can support Bluetooth (because the device has a Bluetooth adapter), and `false` otherwise.

The word "nominally" is used because if permission to use the Web Bluetooth API is disallowed by the [`Permissions-Policy: bluetooth`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth) permission, the method will always return `false`.
In addition, a user can configure their browser to return `false` from a `getAvailability()` call even if the browser does have an operational Bluetooth adapter, and vice versa. This setting value ignored if access is blocked by the permission.

Even if `getAvailability()` returns `true` and the device actually has a Bluetooth adaptor, this does not necessarily mean that calling {{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} will resolve with a {{DOMxRef("BluetoothDevice")}}.
The Bluetooth adapter may not be powered, and a user might deny permission to use the API when prompted.

## Syntax

```js-nolint
getAvailability()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that resolves with a {{JSxRef("Boolean")}}.

The {{JSxRef("Promise")}} will resolve with a value of `false` if access is disallowed by [`Permissions-Policy: bluetooth`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/bluetooth), if the user has configured the browser to always resolve with `false`, or if the device does not have a Bluetooth adapter.
Otherwise it will resolve with `true`.

### Exceptions

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
