---
title: BluetoothRemoteGATTDescriptor.readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
tags:
  - API
  - Bluetooth
  - BluetoothGattDescriptor
  - BluetoothRemoteGATTDescriptor
  - Experimental
  - Method
  - Reference
  - Web Bluetooth API
  - readValue()
browser-compat: api.BluetoothRemoteGATTDescriptor.readValue
---
{{APIRef("Web Bluetooth API")}}{{SeeCompatTable}}

The
**`BluetoothRemoteGATTDescriptor.readValue()`**
method returns a {{jsxref("Promise")}} that resolves to
an {{jsxref("ArrayBuffer")}} holding a duplicate  of the `value` property if
it is available and supported. Otherwise it throws an error.

## Syntax

```js
BluetoothRemoteGATTDescriptor.readValue().then(function(value[]) { /* ... */ })
```

### Returns

A {{jsxref("Promise")}} that resolves to an {{jsxref("ArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
