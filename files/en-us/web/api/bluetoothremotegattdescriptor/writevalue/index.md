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
an {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, or {{jsxref("DataView")}} and returns a {{jsxref("Promise")}}.

## Syntax

```js-nolint
writeValue(buffer)
```

### Parameters

- `buffer`
  - : Sets the value with the bytes contained in the buffer.

### Return value

A {{jsxref("Promise")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
