---
title: BluetoothRemoteGATTService.getCharacteristic()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristic
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTService
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - getCharacteristic()
browser-compat: api.BluetoothRemoteGATTService.getCharacteristic
---
{{SeeCompatTable}}

The **`BluetoothGATTService.getCharacteristic()`** method
returns a {{jsxref("Promise")}} to an instance of
{{domxref("BluetoothRemoteGATTCharacteristic")}} for a given universally unique identifier
(UUID).

## Syntax

```js
bluetoothGATTServiceInstance.getCharacteristic(characteristic).then(function(BluetoothGATTCharacteristic) { /* ... */ } )
```

### Returns

A {{jsxref("Promise")}} to an instance of {{domxref("BluetoothRemoteGATTCharacteristic")}}

### Parameters

- characteristic
  - : The UUID of a characteristic, for
    example `'00002a37-0000-1000-8000-00805f9b34fb'` for the Heart Rate
    Measurement characteristic.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
