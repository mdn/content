---
title: ArrayBuffer.prototype.detached
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.detached
---

{{JSRef}}

The **`detached`** accessor property of {{jsxref("ArrayBuffer")}} instances returns a boolean indicating whether or not the `ArrayBuffer` has been detached (transferred).

## Description

The `detached` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is `false` when the `ArrayBuffer` is first created, and becomes `true` once the `ArrayBuffer` has been detached by one of the [transfer methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers). Once a buffer becomes detached, it is no longer usable.

## Examples

### Using detached

```js
const buffer = new ArrayBuffer(8);
console.log(buffer.detached); // false
const newBuffer = buffer.transfer();
console.log(buffer.detached); // true
console.log(newBuffer.detached); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
