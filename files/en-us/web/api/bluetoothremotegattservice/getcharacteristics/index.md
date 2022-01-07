---
title: BluetoothRemoteGATTService.getCharacteristics()
slug: Web/API/BluetoothRemoteGATTService/getCharacteristics
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTService
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - getCharacteristics()
browser-compat: api.BluetoothRemoteGATTService.getCharacteristics
---
{{SeeCompatTable}}

The **`BluetoothGATTService.getCharacteristics()`** method
returns a {{jsxref("Promise")}} to a list of {{domxref("BluetoothRemoteGATTCharacteristic")}}
instances for a given universally unique identifier (UUID).

## Syntax

```js
bluetoothGATTServiceInstance.getCharacteristics(characteristics).then(function(BluetoothGATTCharacteristic[]) { /* ... */ } )
```

### Returns

A {{jsxref("Promise")}} to an
{{jsxref("Array")}} of {{domxref("BluetoothRemoteGATTCharacteristic")}} instances.

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
