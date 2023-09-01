---
title: "BluetoothRemoteGATTCharacteristic: readValue() method"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic.readValue
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.readValue()`** method
returns a {{jsxref("Promise")}} that resolves to a {{jsxref("DataView")}} holding a
duplicate of the `value` property if it is available and supported. Otherwise
it throws an error.

## Syntax

```js-nolint
readValue()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an {{jsxref("DataView")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
