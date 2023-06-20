---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.SharedArrayBuffer.growable
---

{{JSRef}}

The **`growable`** accessor property of {{jsxref("SharedArrayBuffer")}} instances returns whether this `SharedArrayBuffer` can be grow or not.

## Syntax

### Return value

The getter for `growable` returns a boolean value, which is `true` if the `maxByteLength` option was set in the constructor, and `false` otherwise.

There is no setter for `growable`, so you cannot change this property's value using assignment.

## Examples

### Using growable

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
- {{jsxref("SharedArrayBuffer.prototype.grow()")}}
- {{jsxref("SharedArrayBuffer.prototype.maxByteLength")}}
