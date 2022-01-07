---
title: BluetoothRemoteGATTCharacteristic.getDescriptors()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptors
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - getDescriptors()
browser-compat: api.BluetoothRemoteGATTCharacteristic.getDescriptors
---
{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.getDescriptors()`** method
returns a {{jsxref("Promise")}} that resolves to an {{jsxref("Array")}} of all
{{domxref("BluetoothRemoteGATTDescriptor")}} objects for a given descriptor UUID.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.getDescriptors(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptors[]) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to an {{jsxref("Array")}}
of {{domxref("BluetoothRemoteGATTDescriptor")}} objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
