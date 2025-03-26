---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithoutResponse() method"
short-title: writeValueWithoutResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object's `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, [writes the characteristic value without response](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

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
