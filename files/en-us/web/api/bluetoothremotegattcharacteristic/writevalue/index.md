---
title: "BluetoothRemoteGATTCharacteristic: writeValue() method"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.BluetoothRemoteGATTCharacteristic.writeValue
---

{{APIRef("Bluetooth API")}}{{Deprecated_header}}{{SecureContext_Header}}

Use {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()")}} and {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}} instead.

The **`BluetoothRemoteGATTCharacteristic.writeValue()`** method sets a {{domxref("BluetoothRemoteGATTCharacteristic")}} object's `value` property to the bytes contained in a given {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}}, [writes the characteristic value with optional response](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.

## Syntax

```js-nolint
writeValue(buffer)
```

### Parameters

- `value`
  - : An {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}}.

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
