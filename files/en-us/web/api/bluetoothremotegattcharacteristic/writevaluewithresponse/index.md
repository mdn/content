---
title: BluetoothRemoteGATTCharacteristic.writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
page-type: web-api-instance-method
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Method
  - Reference
  - Web Bluetooth API
  - writeValueWithResponse
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithResponse
---
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object's `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"required"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js
writeValueWithResponse(value)
```

### Parameters

- `value`
  - : An {{jsxref("ArrayBuffer")}}.

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
