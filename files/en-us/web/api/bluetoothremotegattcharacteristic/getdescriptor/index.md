---
title: BluetoothRemoteGATTCharacteristic.getDescriptor()
slug: Web/API/BluetoothRemoteGATTCharacteristic/getDescriptor
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - getDescriptor()
browser-compat: api.BluetoothRemoteGATTCharacteristic.getDescriptor
---
{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.getDescriptor()`** method
returns a {{jsxref("Promise")}} that resolves to the
first {{domxref("BluetoothRemoteGATTDescriptor")}} for a given descriptor UUID.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.getDescriptor(bluetoothDescriptorUUID).then(function(bluetoothGATTDescriptor) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to the
first {{domxref("BluetoothRemoteGATTDescriptor")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
