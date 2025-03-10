---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "Invalid array length" occurs when specifying an array length that is either negative, a floating number or exceeds the maximum supported by the platform (i.e. when creating an {{jsxref("Array")}} or {{jsxref("ArrayBuffer")}}, or when setting the {{jsxref("Array/length", "length")}} property).

The maximum allowed array length depends on the platform, browser and browser version.
For {{jsxref("Array")}} the maximum length is 2<sup>32</sup>-1.
For {{jsxref("ArrayBuffer")}} the maximum is 2<sup>31</sup>-1 (2GiB-1) on 32-bit systems.
From Firefox version 89 the maximum value of {{jsxref("ArrayBuffer")}} is 2<sup>33</sup> (8GiB) on 64-bit systems.

> **Note:** `Array` and `ArrayBuffer` are independent data structures (the implementation of one does not affect the other).

## Message

```plain
RangeError: invalid array length (V8-based & Firefox)
RangeError: Array size is not a small enough positive integer. (Safari)

RangeError: Invalid array buffer length (V8-based)
RangeError: length too large (Safari)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

The error might appear when attempting to produce an {{jsxref("Array")}} or {{jsxref("ArrayBuffer")}} with an invalid length, which includes:

- Negative length, via the constructor or setting the {{jsxref("Array/length", "length")}} property.
- Non-integer length, via the constructor or setting the {{jsxref("Array/length", "length")}} property. (The `ArrayBuffer` constructor coerces the length to an integer, but the `Array` constructor does not.)
- Exceeding the maximum length supported by the platform. For arrays, the maximum length is 2<sup>32</sup>-1. For `ArrayBuffer`, the maximum length is 2<sup>31</sup>-1 (2GiB-1) on 32-bit systems, or 2<sup>33</sup> (8GiB) on 64-bit systems. This can happen via the constructor, setting the `length` property, or array methods that implicitly set the length property (such as {{jsxref("Array/push", "push")}} and {{jsxref("Array/concat", "concat")}}).

If you are creating an `Array` using the constructor, you probably want to use the literal notation instead, as the first argument is interpreted as the length of the `Array`. Otherwise, you might want to clamp the length before setting the length property, or using it as argument of the constructor.

## Examples

### Invalid cases

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32)); // 32-bit system
new ArrayBuffer(-1);

const a = [];
a.length = a.length - 1; // set the length property to -1

const b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // set the length property to 2^32
b.length = 2.5; // set the length property to a floating-point number

const c = new Array(2.5); // pass a floating-point number

// Concurrent modification that accidentally grows the array infinitely
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
```

### Valid cases

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 31) - 1);
new ArrayBuffer(Math.pow(2, 33)); // 64-bit systems after Firefox 89
new ArrayBuffer(0);

const a = [];
a.length = Math.max(0, a.length - 1);

const b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);
// 0xffffffff is the hexadecimal notation for 2^32 - 1
// which can also be written as (-1 >>> 0)

b.length = 3;

const c = new Array(3);

// Because array methods save the length before iterating, it is safe to grow
// the array during iteration
const arr = [1, 2, 3];
arr.forEach((e) => arr.push(e * 10));
```

## See also

- {{jsxref("Array")}}
- {{jsxref("Array/length", "length")}}
- {{jsxref("ArrayBuffer")}}
