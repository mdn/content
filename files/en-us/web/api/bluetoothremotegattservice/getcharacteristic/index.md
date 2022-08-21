---
title: BluetoothRemoteGATTService.getCharacteristic()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristic
page-type: web-api-instance-method
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTService
  - Experimental
  - Method
  - Reference
  - Web Bluetooth API
  - getCharacteristic()
browser-compat: api.BluetoothRemoteGATTService.getCharacteristic
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothGATTService.getCharacteristic()`** method
returns a {{jsxref("Promise")}} to an instance of
{{domxref("BluetoothRemoteGATTCharacteristic")}} for a given universally unique identifier
(UUID).

## Syntax

```js
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

{{APIRef("Web Bluetooth")}}
