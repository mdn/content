---
title: BluetoothRemoteGATTDescriptor.readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
page-type: web-api-instance-method
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
{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The
**`BluetoothRemoteGATTDescriptor.readValue()`**
method returns a {{jsxref("Promise")}} that resolves to
an {{jsxref("ArrayBuffer")}} holding a duplicate of the `value` property if
it is available and supported. Otherwise it throws an error.

## Syntax

```js
readValue()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to an {{jsxref("ArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
