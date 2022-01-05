---
title: BluetoothRemoteGATTCharacteristic.stopNotifications()
slug: Web/API/BluetoothRemoteGATTCharacteristic/stopNotifications
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - stopNotifications
browser-compat: api.BluetoothRemoteGATTCharacteristic.stopNotifications
---
{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.stopNotifications()`** method
returns a {{jsxref("Promise")}} to the BluetoothRemoteGATTCharacteristic instance when
there is no longer an active notification on it.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.stopNotifications().then(function(BluetoothRemoteGATTCharacteristic) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
