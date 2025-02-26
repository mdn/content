---
title: "BluetoothUUID: getDescriptor() static method"
short-title: getDescriptor()
slug: Web/API/BluetoothUUID/getDescriptor_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.BluetoothUUID.getDescriptor_static
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`getDescriptor()`** static method of the {{domxref("BluetoothUUID")}} interface returns a UUID representing a registered descriptor when passed a name or the 16- or 32-bit UUID alias.

## Syntax

```js-nolint
BluetoothUUID.getDescriptor(name)
```

### Parameters

- `name`
  - : A string containing the name of the descriptor.

### Return value

A 128-bit UUID.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `name` does not appear in the registry.

## Examples

In the following example the UUID representing the descriptor named `time_trigger_setting` is returned and printed to the console.

```js
let result = BluetoothUUID.getDescriptor("time_trigger_setting");
console.log(result); // "0000290e-0000-1000-8000-00805f9b34fb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
