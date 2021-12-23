---
title: BluetoothRemoteGATTCharacteristic.writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - writeValueWithResponse
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithResponse
---
The **`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object’s `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"required"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.writeValueWithResponse(value).then(function() { /* ... */ })
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
