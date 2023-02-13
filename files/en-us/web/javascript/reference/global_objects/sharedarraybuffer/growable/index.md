---
title: SharedArrayBuffer.prototype.growable
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable
page-type: javascript-instance-accessor-property
tags:
  - Experimental
  - JavaScript
  - Property
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer.growable
---

{{JSRef}}{{seecompattable}}

The **`growable`** accessor property represents a boolean value; it returns `true` if the {{jsxref("SharedArrayBuffer")}} can be grown, or `false` if not.

## Description

The `growable` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property; The value cannot be changed. The value is established when the array is constructed. If a `maxByteLength` option was set in the constructor, `growable` will return `true`; if not, it will return `false`.

## Examples

### Using growable

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
