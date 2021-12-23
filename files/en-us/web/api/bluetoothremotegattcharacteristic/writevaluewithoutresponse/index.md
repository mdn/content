---
title: BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - writeValueWithoutResponse
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse
---
The **`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object’s `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"never"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse(value).then(function() { /* ... */ })
```

### Returns

A {{jsxref("Promise")}}.

### Parameters

- value
  - : An {{jsxref("ArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
