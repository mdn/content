---
title: Math.clz32()
slug: Web/JavaScript/Reference/Global_Objects/Math/clz32
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.clz32
---
{{JSRef}}

The **`Math.clz32()`** function returns the number of leading
zero bits in the 32-bit binary representation of a number.

{{EmbedInteractiveExample("pages/js/math-clz32.html")}}

## Syntax

```js
Math.clz32(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The number of leading zero bits in the 32-bit binary representation of the given number.

## Description

`clz32` is short for **CountLeadingZeroes32**.

If `x` is not a number, then it will be converted to a number first, then converted to a 32-bit unsigned integer.

If the converted 32-bit unsigned integer is `0`, then return `32`, because all bits are `0`.

This function is particularly useful for systems that compile to JS, like [Emscripten](https://emscripten.org).

### Count Leading Ones and beyond

At present, there is no `Math.clon` for "Count Leading Ones" (named "clon",
not "clo", because "clo" and "clz" are too similar especially for non-English-speaking
people). However, a `clon` function can easily be created by inversing the
bits of a number and passing the result to `Math.clz32`. Doing this will work
because the inverse of 1 is 0 and vice-versa. Thus, inversing the bits will inverse the
measured quantity of 0's (from `Math.clz32`), thereby making
`Math.clz32` count the number of ones instead of counting the number of
zeros.

Consider the following 32-bit word:

```js
const a = 32776;   // 00000000000000001000000000001000 (16 leading zeros)
Math.clz32(a);   // 16

const b = ~32776;  // 11111111111111110111111111110111 (32776 inverted, 0 leading zeros)
Math.clz32(b);   // 0 (this is equal to how many leading one's there are in a)
```

Using this logic, a `clon` function can be created as follows:

```js
const clz = Math.clz32;

function clon(integer) {
  return clz(~integer);
}
```

Further, this technique could be extended to create a jumpless "Count Trailing Zeros" function, as seen below. The `ctrz` function below
fills in all the high bits with the lowest filled bit, then negates the bits to erase
all higher set bits so that `clz` can then be used.

```js example-bad
const clz = Math.clz32;

// count trailing zeros
function ctrz(integer) {
  // 1. fill in all the higher bits after the first one
  integer |= integer << 16;
  integer |= integer << 8;
  integer |= integer << 4;
  integer |= integer << 2;
  integer |= integer << 1;
  // 2. Now, inversing the bits reveals the lowest bits
  return 32 - clz(~integer);
}
```

However, a simpler and possibly more efficient algorithm is the following:

```js example-good
function ctrz(integer) {
  integer >>>= 0; // ensures coercion to Uint32
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
// count trailing ones
function ctron(integer) {
  // No shift-filling-in-with-ones operator is available in
  // JavaScript, so the below code is the fastest
  return ctrz(~integer);

  /* Alternate implementation for demonstrational purposes:
      // 1. erase all the higher bits after the first zero
      integer &= (integer << 16) | 0xffff;
      integer &= (integer << 8 ) | 0x00ff;
      integer &= (integer << 4 ) | 0x000f;
      integer &= (integer << 2 ) | 0x0003;
      integer &= (integer << 1 ) | 0x0001;
      // 2. Now, inversing the bits reveals the lowest zeros
      return 32 - clon(~integer);
  */
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
    // 1. fill in all the higher bits after the first one
    // Note: asm.js doesn't have compound assignment operators such as |=
    integer = integer | (integer << 16);
    integer = integer | (integer << 8);
    integer = integer | (integer << 4);
    integer = integer | (integer << 2);
    integer = integer | (integer << 1);
    // 2. Now, inversing the bits reveals the lowest bits
    return 32 - clz(~integer) | 0;
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

## Examples

### Using Math.clz32()

```js
Math.clz32(1);           // 31
Math.clz32(1000);        // 22
Math.clz32();            // 32

const stuff = [NaN, Infinity, -Infinity, 0, -0, false, null, undefined, 'foo', {}, []];
stuff.every((n) => Math.clz32(n) === 32);  // true

Math.clz32(true);        // 31
Math.clz32(3.5);         // 30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.clz32` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math")}}
- {{jsxref("Math.imul")}}
