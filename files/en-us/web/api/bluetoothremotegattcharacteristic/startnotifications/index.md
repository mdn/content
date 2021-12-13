---
title: BluetoothRemoteGATTCharacteristic.startNotifications()
slug: Web/API/BluetoothRemoteGATTCharacteristic/startNotifications
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - startNotifications()
browser-compat: api.BluetoothRemoteGATTCharacteristic.startNotifications
---
{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.startNotifications()`** method
returns a {{jsxref("Promise")}} to the BluetoothRemoteGATTCharacteristic instance when
there is an active notification on it.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.startNotifications().then(function(BluetoothRemoteGATTCharacteristic) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} to the BluetoothRemoteGATTCharacteristic instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
