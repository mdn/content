---
title: SharedArrayBuffer.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
page-type: javascript-instance-method
tags:
  - Experimental
  - JavaScript
  - Method
  - Prototype
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer.grow
---

{{JSRef}}

The **`grow()`** method grows the `SharedArrayBuffer` to the specified size, in bytes.

## Syntax

```js-nolint
grow(newLength)
```

### Parameters

- `newLength`
  - : The new length, in bytes, to resize the `SharedArrayBuffer` to.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `grow()` method grows a `SharedArrayBuffer` to the size specified in the `newLength` parameter, provided it was constructed with a `maxByteLength` option specified and `newLength` is less than that value.

A `TypeError` is thrown if you attempt to:

- Grow a non-growable `SharedArrayBuffer`.
- Grow a growable `SharedArrayBuffer` to a size larger than its {{jsxref("Global_Objects/SharedArrayBuffer.maxByteLength", "maxByteLength")}}.
- Set `newLength` to a size smaller than the `SharedArrayBuffer`'s current {{jsxref("Global_Objects/SharedArrayBuffer.byteLength", "byteLength")}}.

## Examples

### Using grow()

In this example, we create a 8-byte buffer that is growable to a max length of 16 bytes then check its {{jsxref("Global_Objects/SharedArrayBuffer.growable", "growable")}} property, growing it if `growable` returns `true`:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 } );

if(buffer.growable) {
  console.log('SAB is growable!');
  buffer.grow(12);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("SharedArrayBuffer")}}
