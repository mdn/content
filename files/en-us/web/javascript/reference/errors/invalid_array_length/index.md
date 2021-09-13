---
title: 'RangeError: invalid array length'
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
tags:
  - Error
  - Errors
  - JavaScript
  - RangeError
---
{{jsSidebar("Errors")}}

The JavaScript exception "Invalid array length" occurs when specifying an array length that is either negative or exceeds the maximum supported by the platform (i.e. when creating an {{jsxref("Array")}} or {{jsxref("ArrayBuffer")}}, or when setting the {{jsxref("Array.length")}} property).

The maximum allowed array length depends on the platform, browser and browser version.
For {{jsxref("Array")}} the maximum length is 4GB-1 (2^32-1).
For {{jsxref("ArrayBuffer")}} the maximum is 2GB-1 on 32-bit systems (2^31-1).
From Firefox version 89 the maximum value of {{jsxref("ArrayBuffer")}} is 8GB on 64-bit systems (2^33).

> **Note:** `Array` and `ArrayBuffer` are independent data structures (the implementation of one does not affect the other).

## Message

```js
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chromium-based)
RangeError: Array buffer allocation failed (Chromium-based)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

An invalid array length might appear in these situations:

- Creating an {{jsxref("Array")}} or {{jsxref("ArrayBuffer")}} with a negative length, or setting a negative value for the {{jsxref("Array.length")}} property.
- Creating an {{jsxref("Array")}} or setting the {{jsxref("Array.length")}} property greater than 2GB-1 (2^32-1).
- Creating an {{jsxref("ArrayBuffer")}} that is bigger than 2GB-1 (2^32-1) on a 32-bit system or 8GB (2^33) on a 64-bit system.
- Before Firefox 89: Creating an {{jsxref("ArrayBuffer")}} that is bigger than 2GB-1 (2^32-1).

If you are creating an `Array`, using the constructor, you probably want to
use the literal notation instead, as the first argument is interpreted as the length of
the `Array`.

Otherwise, you might want to clamp the length before setting the length property, or
using it as argument of the constructor.

## Examples

### Invalid cases

```js example-bad
new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32)) //32-bit system
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // set -1 to the length property

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // set 2^32 to the length property
```

### Valid cases

```js example-good
[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(Math.pow(2, 33))  // 64-bit systems after Firefox 89
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff is the hexadecimal notation for 2^32 - 1
// which can also be written as (-1 >>> 0)
```

## See also

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
