---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.clz32
---

{{JSRef}}

The **`Math.clz32()`** static method returns the number of leading zero bits in the 32-bit binary representation of a number.

{{InteractiveExample("JavaScript Demo: Math.clz32()")}}

```js interactive-example
// 00000000000000000000000000000001
console.log(Math.clz32(1));
// Expected output: 31

// 00000000000000000000000000000100
console.log(Math.clz32(4));
// Expected output: 29

// 00000000000000000000001111101000
console.log(Math.clz32(1000));
// Expected output: 22
```

## Syntax

```js-nolint
Math.clz32(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The number of leading zero bits in the 32-bit binary representation of `x`.

## Description

`clz32` is short for **C**ount**L**eading**Z**eros**32**.

If `x` is not a number, it will be converted to a number first, then converted to a 32-bit unsigned integer.

If the converted 32-bit unsigned integer is `0`, `32` is returned, because all bits are `0`. If the most significant bit is `1` (i.e. the number is greater than or equal to 2<sup>31</sup>), `0` is returned.

This function is particularly useful for systems that compile to JS, like [Emscripten](https://emscripten.org/).

## Examples

### Using Math.clz32()

```js
Math.clz32(1); // 31
Math.clz32(1000); // 22
Math.clz32(); // 32

const stuff = [
  NaN,
  Infinity,
  -Infinity,
  0,
  -0,
  false,
  null,
  undefined,
  "foo",
  {},
  [],
];
stuff.every((n) => Math.clz32(n) === 32); // true

Math.clz32(true); // 31
Math.clz32(3.5); // 30
```

### Implementing Count Leading Ones and beyond

At present, there is no `Math.clon` for "Count Leading Ones" (named "clon", not "clo", because "clo" and "clz" are too similar especially for non-English-speaking people). However, a `clon` function can easily be created by inverting the bits of a number and passing the result to `Math.clz32`. Doing this will work because the inverse of 1 is 0 and vice versa. Thus, inverting the bits will inverse the measured quantity of 0's (from `Math.clz32`), thereby making `Math.clz32` count the number of ones instead of counting the number of zeros.

Consider the following 32-bit word:

```js
const a = 32776; // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a); // 16

const b = ~32776; // 11111111111111110111111111110111 (32776 inverted, 0 leading zeros)
Math.clz32(b); // 0 (this is equal to how many leading one's there are in a)
```

Using this logic, a `clon` function can be created as follows:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

Further, this technique could be extended to create a jumpless "Count Trailing Zeros" function, as seen below. The `ctrz` function takes a bitwise AND of the integer with its two's complement. By how two's complement works, all trailing zeros will be converted to ones, and then when adding 1, it would be carried over until the first `0` (which was originally a `1`) is reached. All bits higher than this one stay the same and are inverses of the original integer's bits. Therefore, when doing bitwise AND with the original integer, all higher bits become `0`, which can be counted with `clz`. The number of trailing zeros, plus the first `1` bit, plus the leading bits that were counted by `clz`, total to 32.

```js
function ctrz(integer) {
  integer >>>= 0; // coerce to Uint32
  if (integer === 0) {
    // skipping this step would make it return -1
    return 32;
  }
  integer &= -integer; // equivalent to `int = int & (~int + 1)`
  return 31 - clz(integer);
}
```

Then we can define a "Count Trailing Ones" function like so:

```js
function ctron(integer) {
  return ctrz(~integer);
}
```

These helper functions can be made into an [asm.js](/en-US/docs/Games/Tools/asm.js) module for a potential performance improvement.

```js
const countTrailsMethods = (function (stdlib, foreign, heap) {
  "use asm";
  const clz = stdlib.Math.clz32;

  // count trailing zeros
  function ctrz(integer) {
    integer = integer | 0; // coerce to an integer
    if ((integer | 0) == 0) {
      // skipping this step would make it return -1
      return 32;
    }
    // Note: asm.js doesn't have compound assignment operators such as &=
    integer = integer & -integer; // equivalent to `int = int & (~int + 1)`
    return (31 - clz(integer)) | 0;
  }

  // count trailing ones
  function ctron(integer) {
    integer = integer | 0; // coerce to an integer
    return ctrz(~integer) | 0;
  }

  // asm.js demands plain objects:
  return { ctrz: ctrz, ctron: ctron };
})(window, null, null);

const { ctrz, ctron } = countTrailsMethods;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.clz32` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
