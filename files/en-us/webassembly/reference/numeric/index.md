---
title: WebAssembly numeric instructions
slug: WebAssembly/Reference/Numeric
page-type: landing-page
---

{{WebAssemblySidebar}}

WebAssembly numeric instructions.

## Constants

- [`const`](/en-US/docs/WebAssembly/Reference/Numeric/const)
  - : Declare a constant number.

## Comparison

- [`eq`](/en-US/docs/WebAssembly/Reference/Numeric/eq)
  - : Check if two numbers are equal.
- [`gt`](/en-US/docs/WebAssembly/Reference/Numeric/gt)
  - : Check if a number is greater than another number.
- [`ge`](/en-US/docs/WebAssembly/Reference/Numeric/ge)
  - : Check if a number is greater than or equal to another number.
- [`le`](/en-US/docs/WebAssembly/Reference/Numeric/le)
  - : Check if a number is less than or equal to another number.
- [`lt`](/en-US/docs/WebAssembly/Reference/Numeric/lt)
  - : Check if a number is less than another number.
- [`ne`](/en-US/docs/WebAssembly/Reference/Numeric/ne)
  - : Check if two numbers are not equal.

## Arithmetic

- [`add`](/en-US/docs/WebAssembly/Reference/Numeric/add)
  - : Add two numbers.
- [`div`](/en-US/docs/WebAssembly/Reference/Numeric/div)
  - : Divide one number by another number.
- [`mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul)
  - : Multiply one number by another number.
- [`remainder`](/en-US/docs/WebAssembly/Reference/Numeric/remainder)
  - : Calculate the remainder left over when one integer is divided by another integer.
- [`sub`](/en-US/docs/WebAssembly/Reference/Numeric/sub)
  - : Subtract one number from another number.

## Conversion

- [`convert`](/en-US/docs/WebAssembly/Reference/Numeric/convert)
  - : Convert integers to floating points.
- [`demote`](/en-US/docs/WebAssembly/Reference/Numeric/demote)
  - : Convert `f64` to `f32`.
- [`extend`](/en-US/docs/WebAssembly/Reference/Numeric/Extend)
  - : Convert `i32` to `i64`.
- [`promote`](/en-US/docs/WebAssembly/Reference/Numeric/promote)
  - : Convert `f32` to `f64`.
- [`reinterpret`](/en-US/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Reinterpret the bytes of integers as floating points and vice versa.
- [`trunc` (float to int)](/en-US/docs/WebAssembly/Reference/Numeric/trunc_float_to_int)
  - : Convert (truncate fractional part) floating points to integers.
- [`wrap`](/en-US/docs/WebAssembly/Reference/Numeric/wrap)
  - : Convert (wrap) `i64` to `i32`.

## Floating point specific instructions

- [`abs`](/en-US/docs/WebAssembly/Reference/Numeric/abs)
  - : Get the absolute value of a number.
- [`ceil`](/en-US/docs/WebAssembly/Reference/Numeric/ceil)
  - : Round up a number.
- [`copysign`](/en-US/docs/WebAssembly/Reference/Numeric/copysign)
  - : Copy just the sign bit from one number to another.
- [`floor`](/en-US/docs/WebAssembly/Reference/Numeric/floor)
  - : Round down a number.
- [`trunc` (float to float)](WebAssembly/Reference/Numeric/trunc_float_to_float)
  - : Discard the fractional part of a number.
- [`min`](/en-US/docs/WebAssembly/Reference/Numeric/min)
  - : Get the lower of two numbers.
- [`max`](/en-US/docs/WebAssembly/Reference/Numeric/max)
  - : Get the higher of two numbers.
- [`nearest`](/en-US/docs/WebAssembly/Reference/Numeric/nearest)
  - : Round a number to the nearest integer.
- [`neg`](/en-US/docs/WebAssembly/Reference/Numeric/neg)
  - : Negate a number.
- [`sqrt`](/en-US/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Get the square root of a number.

## Bitwise

- [`and`](/en-US/docs/WebAssembly/Reference/Numeric/and)
  - : Bitwise AND of two numbers.
- [`or`](/en-US/docs/WebAssembly/Reference/Numeric/OR)
  - : Bitwise OR of two numbers.
- [`xor`](/en-US/docs/WebAssembly/Reference/Numeric/XOR)
  - : Bitwise XOR of two numbers.
- [`shl`](/en-US/docs/WebAssembly/Reference/Numeric/shl)
  - : Bitwise left-shift.
- [`shr`](/en-US/docs/WebAssembly/Reference/Numeric/shr)
  - : Bitwise right-shift.
- [`rotl`](/en-US/docs/WebAssembly/Reference/Numeric/rotl)
  - : Bitwise left-rotate.
- [`rotr`](/en-US/docs/WebAssembly/Reference/Numeric/rotr)
  - : Bitwise right-rotate.
- [`clz`](/en-US/docs/WebAssembly/Reference/Numeric/clz)
  - : Count the number of leading zeros in a number's binary representation.
- [`ctz`](/en-US/docs/WebAssembly/Reference/Numeric/ctz)
  - : Count the number of trailing zeros in a number's binary representation.
- [`popcnt`](/en-US/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Count the total number of 1s in a number's binary representation.
