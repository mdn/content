---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithoutResponse() method"
short-title: writeValueWithoutResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object's `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"never"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js-nolint
writeValueWithoutResponse(value)
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
