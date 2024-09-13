---
title: "BluetoothRemoteGATTService: getCharacteristic() method"
short-title: getCharacteristic()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristic
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTService.getCharacteristic
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothGATTService.getCharacteristic()`** method
returns a {{jsxref("Promise")}} to an instance of
{{domxref("BluetoothRemoteGATTCharacteristic")}} for a given universally unique identifier
(UUID).

## Syntax

```js-nolint
getCharacteristic(characteristic)
```

### Parameters

- `characteristic`
  - : The UUID of a characteristic, for
    example `'00002a37-0000-1000-8000-00805f9b34fb'` for the Heart Rate
    Measurement characteristic.

### Return value

A {{jsxref("Promise")}} to an instance of {{domxref("BluetoothRemoteGATTCharacteristic")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
