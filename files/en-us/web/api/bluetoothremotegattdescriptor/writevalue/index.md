---
title: BluetoothRemoteGATTDescriptor.writeValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
tags:
  - API
  - Bluetooth
  - BluetoothGattDescriptor
  - BluetoothRemoteGATTDescriptor
  - Experimental
  - Property
  - Reference
  - Web Bluetooth API
  - writeValue()
browser-compat: api.BluetoothRemoteGATTDescriptor.writeValue
---
{{APIRef("Web Bluetooth API")}}{{SeeCompatTable}}

The **`BluetoothRemoteGATTDescriptor.writeValue()`**
method sets the value property to the bytes contained in
an {{jsxref("ArrayBuffer")}} and returns a {{jsxref("Promise")}}.

## Syntax

```js
BluetoothRemoteGATTDescriptor.writeValue(array[]).then(function() { /* ... */ })
```

### Parameters

- array
  - : Sets the value with the bytes contained in the array.

### Returns

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
