---
title: BluetoothUUID.getService()
slug: Web/API/BluetoothUUID/getService
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - getService
  - Experimental
  - BluetoothUUID
browser-compat: api.BluetoothUUID.getService
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`getService()`**  method of the {{domxref("BluetoothUUID")}} interface returns a UUID representing a registered service when passed a name or the 16- or 32-bit UUID alias.

## Syntax

```js
getService(name)
```

### Parameters

- `name`
  - : A string containing the name of the service.

### Return value

A 128-bit UUID.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `name` does not appear in the registry.

## Examples

In the following example the UUID representing the service named `device_information` is returned and printed to the console.

```js
let result = BluetoothUUID.getService('device_information');
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
