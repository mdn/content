---
title: BluetoothUUID.canonicalUUID()
slug: Web/API/BluetoothUUID/canonicalUUID
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Experimental
  - canonicalUUID()
  - BluetoothUUID
browser-compat: api.BluetoothUUID.canonicalUUID
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`canonicalUUID()`**  method of the {{domxref("BluetoothUUID")}} interface returns the 128-bit UUID when passed a 16- or 32-bit UUID alias.

## Syntax

```js
canonicalUUID(alias)
```

### Parameters

- `alias`
  - : A string containing a 16-bit or 32-bit UUID alias.

### Return value

A 128-bit UUID.

## Examples

In the following example the UUID represented by the alias `0x110A` is returned and printed to the console.

```js
let result = BluetoothUUID.canonicalUUID('0x110A');
console.log(result); // "0000110a-0000-1000-8000-00805f9b34fb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
