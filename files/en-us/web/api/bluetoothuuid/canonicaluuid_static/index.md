---
title: "BluetoothUUID: canonicalUUID() static method"
short-title: canonicalUUID()
slug: Web/API/BluetoothUUID/canonicalUUID_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.BluetoothUUID.canonicalUUID_static
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`canonicalUUID()`** static method of the {{domxref("BluetoothUUID")}} interface returns the 128-bit UUID when passed a 16- or 32-bit UUID alias.

## Syntax

```js-nolint
BluetoothUUID.canonicalUUID(alias)
```

### Parameters

- `alias`
  - : A string containing a 16-bit or 32-bit UUID alias.

### Return value

A 128-bit UUID.

## Examples

In the following example the UUID represented by the alias `0x110A` is returned and printed to the console.

```js
let result = BluetoothUUID.canonicalUUID("0x110A");
console.log(result); // "0000110a-0000-1000-8000-00805f9b34fb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
