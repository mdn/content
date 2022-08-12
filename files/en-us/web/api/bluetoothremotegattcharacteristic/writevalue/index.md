---
title: BluetoothRemoteGATTCharacteristic.writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
page-type: web-api-instance-method
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Method
  - Reference
  - Web Bluetooth API
  - writeValue
  - Deprecated
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValue
---
{{APIRef("Bluetooth API")}}{{Deprecated_header}}

Use {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()")}} and {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}} instead.

The **`BluetoothRemoteGATTCharacteristic.writeValue()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object's `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"optional"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js
writeValue(value)
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
