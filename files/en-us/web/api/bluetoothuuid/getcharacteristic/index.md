---
title: BluetoothUUID.getCharacteristic()
slug: Web/API/BluetoothUUID/getCharacteristic
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Experimental
  - getCharacteristic
  - BluetoothUUID
browser-compat: api.BluetoothUUID.getCharacteristic
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`getCharacteristic()`**  method of the {{domxref("BluetoothUUID")}} interface returns a UUID representing a registered characteristic when passed a name or the 16- or 32-bit UUID alias.

## Syntax

```js
getCharacteristic(name)
```

### Parameters

- `name`
  - : A string containing the name of the characteristic.

### Return value

A 128-bit UUID.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `name` does not appear in the registry.

## Examples

In the following example the UUID representing the characteristic named `apparent_wind_direction` is returned and printed to the console.

```js
let result = BluetoothUUID.getCharacteristic('apparent_wind_direction');
console.log(result); // "00002a73-0000-1000-8000-00805f9b34fb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
