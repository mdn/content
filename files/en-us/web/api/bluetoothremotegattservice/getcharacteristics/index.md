---
title: "BluetoothRemoteGATTService: getCharacteristics() method"
short-title: getCharacteristics()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristics
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTService.getCharacteristics
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothGATTService.getCharacteristics()`** method
returns a {{jsxref("Promise")}} to a list of {{domxref("BluetoothRemoteGATTCharacteristic")}}
instances for a given universally unique identifier (UUID).

## Syntax

```js-nolint
getCharacteristics(characteristics)
```

### Parameters

- `characteristics`
  - : The UUID of a characteristic, for
    example `'00002a37-0000-1000-8000-00805f9b34fb'` for the Heart Rate
    Measurement characteristic.

### Return value

A {{jsxref("Promise")}} to an
{{jsxref("Array")}} of {{domxref("BluetoothRemoteGATTCharacteristic")}} instances.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
