---
title: SharedArrayBuffer.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
page-type: javascript-instance-method
browser-compat: javascript.builtins.SharedArrayBuffer.grow
---

{{JSRef}}

The **`grow()`** method of {{jsxref("SharedArrayBuffer")}} instances grows the `SharedArrayBuffer` to the specified size, in bytes.

## Syntax

```js-nolint
grow(newLength)
```

### Parameters

- `newLength`
  - : The new length, in bytes, to resize the `SharedArrayBuffer` to.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `SharedArrayBuffer` is not growable.
- {{jsxref("RangeError")}}
  - : Thrown if `newLength` is larger than the {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} of the `SharedArrayBuffer` or smaller than the {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}.

## Description

The `grow()` method grows a `SharedArrayBuffer` to the size specified by the `newLength` parameter, provided that the `SharedArrayBuffer` is [resizable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable) and the new size is less than or equal to the {{jsxref("SharedArrayBuffer/maxByteLength", "maxByteLength")}} of the `SharedArrayBuffer`. New bytes are initialized to 0.

## Examples

### Using grow()

In this example, we create a 8-byte buffer that is growable to a max length of 16 bytes, then check its {{jsxref("SharedArrayBuffer/growable", "growable")}} property, growing it if `growable` returns `true`:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("SharedArrayBuffer.prototype.growable")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
