---
title: "BluetoothRemoteGATTDescriptor: readValue() method"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTDescriptor.readValue
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The
**`BluetoothRemoteGATTDescriptor.readValue()`**
method returns a {{jsxref("Promise")}} that resolves to
an {{jsxref("ArrayBuffer")}} holding a duplicate of the `value` property if
it is available and supported. Otherwise it throws an error.

## Syntax

```js-nolint
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
