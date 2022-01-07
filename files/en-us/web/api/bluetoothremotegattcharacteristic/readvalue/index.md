---
title: BluetoothRemoteGATTCharacteristic.readValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
tags:
  - API
  - Bluetooth
  - BluetoothRemoteGATTCharacteristic
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - readValue
browser-compat: api.BluetoothRemoteGATTCharacteristic.readValue
---
{{SeeCompatTable}}

The **`BluetoothRemoteGATTCharacteristic.readValue()`** method
returns a {{jsxref("Promise")}} that resolves to a {{jsxref("DataView")}} holding a
duplicate of the `value` property if it is available and supported. Otherwise
it throws an error.

## Syntax

```js
BluetoothRemoteGATTCharacteristic.readValue().then(function(dataView) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to an {{jsxref("DataView")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{APIRef("Web Bluetooth")}}
