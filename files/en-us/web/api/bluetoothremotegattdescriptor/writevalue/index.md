---
title: "BluetoothRemoteGATTDescriptor: writeValue() method"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTDescriptor.writeValue
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`BluetoothRemoteGATTDescriptor.writeValue()`**
method sets the value property to the bytes contained in
an {{jsxref("ArrayBuffer")}} and returns a {{jsxref("Promise")}}.

## Syntax

```js-nolint
writeValue(array)
```

### Parameters

- `array`
  - : Sets the value with the bytes contained in the array.

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
