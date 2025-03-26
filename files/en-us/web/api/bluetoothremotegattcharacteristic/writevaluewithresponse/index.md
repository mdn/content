---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithResponse() method"
short-title: writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValueWithResponse
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object's `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, [writes the characteristic value with required response](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js-nolint
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
