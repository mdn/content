---
title: WebAssembly numeric instructions
slug: WebAssembly/Reference/Numeric
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly numeric instructions.

## Constants

- [`const`](/en-US/docs/WebAssembly/Reference/Numeric/const)
  - : Declare a constant numbers.

## Comparison

- [`eq`](/en-US/docs/WebAssembly/Reference/Numeric/eq)
  - : Check if two numbers are equal.
- [`ne`](/en-US/docs/WebAssembly/Reference/Numeric/ne)
  - : Check if two numbers are not equal.
- [`gt`](/en-US/docs/WebAssembly/Reference/Numeric/gt)
  - : Check if a number is greater than another number.
- [`lt`](/en-US/docs/WebAssembly/Reference/Numeric/lt)
  - : Check if a number is less than another number.
- [`ge`](/en-US/docs/WebAssembly/Reference/Numeric/ge)
  - : Check if a number is greater than or equal to another number.
- [`le`](/en-US/docs/WebAssembly/Reference/Numeric/le)
  - : Check if a number is less than or equal to another number.

## Arithmetic

- [`add`](/en-US/docs/WebAssembly/Reference/Numeric/add)
  - : Add up two numbers.
- [`sub`](/en-US/docs/WebAssembly/Reference/Numeric/sub)
  - : Subtract one number from another number.
- [`mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul)
  - : Multiply one number by another number.
- [`div`](/en-US/docs/WebAssembly/Reference/Numeric/div)
  - : Divide one number by another number.
- [`rem`](/en-US/docs/WebAssembly/Reference/Numeric/rem)
  - : Calculate the remainder left over when one integer is divided by another integer.

## Conversion

- [`extend`](/en-US/docs/WebAssembly/Reference/Numeric/extend)
  - : Convert (extend) `i32` to `i64`.
- [`wrap`](/en-US/docs/WebAssembly/Reference/Numeric/wrap)
  - : Convert (wrap) `i64` to `i32`.
- [`promote`](/en-US/docs/WebAssembly/Reference/Numeric/promote)
  - : Convert (promote) `f32` to `f64`.
- [`demote`](/en-US/docs/WebAssembly/Reference/Numeric/demote)
  - : Convert (demote) `f64` to `f32`.
- [`convert`](/en-US/docs/WebAssembly/Reference/Numeric/convert)
  - : Convert integers to floating points.
- [`trunc` (to int)](/en-US/docs/WebAssembly/Reference/Numeric/trunc_int)
  - : Convert (truncate fractional part) floating points to integers.
- [`reinterpret`](/en-US/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Reinterpret the bytes of integers as floating points and vice versa.

## Floating point specific instructions

- [`min`](/en-US/docs/WebAssembly/Reference/Numeric/min)
  - : Get the lower of two numbers.
- [`max`](/en-US/docs/WebAssembly/Reference/Numeric/max)
  - : Get the higher of two numbers.
- [`nearest`](/en-US/docs/WebAssembly/Reference/Numeric/nearest)
  - : Round a number to the nearest integer.
- [`ceil`](/en-US/docs/WebAssembly/Reference/Numeric/ceil)
  - : Round up a number.
- [`floor`](/en-US/docs/WebAssembly/Reference/Numeric/floor)
  - : Round down a number.
- [`trunc` (to float)](/en-US/docs/WebAssembly/Reference/Numeric/trunc_float)
  - : Discard the fractional part of a number.
- [`abs`](/en-US/docs/WebAssembly/Reference/Numeric/abs)
  - : Get the absolute value of a number.
- [`neg`](/en-US/docs/WebAssembly/Reference/Numeric/neg)
  - : Negate a number.
- [`sqrt`](/en-US/docs/WebAssembly/Reference/Numeric/sqrt)
  - : Get the square root of a number.
- [`copysign`](/en-US/docs/WebAssembly/Reference/Numeric/copysign)
  - : Copy just the sign bit from one number to another.

## Bitwise

- [`and`](/en-US/docs/WebAssembly/Reference/Numeric/and)
  - : Used for performing a bitwise AND.
- [`or`](/en-US/docs/WebAssembly/Reference/Numeric/or)
  - : Used for performing a bitwise OR.
- [`xor`](/en-US/docs/WebAssembly/Reference/Numeric/xor)
  - : Used for performing a bitwise XOR.
- [`shl`](/en-US/docs/WebAssembly/Reference/Numeric/shl)
  - : Used for performing a bitwise left-shift.
- [`shr`](/en-US/docs/WebAssembly/Reference/Numeric/shr)
  - : Used for performing a bitwise right-shift.
- [`rotl`](/en-US/docs/WebAssembly/Reference/Numeric/rotl)
  - : Used for performing a bitwise left-rotate.
- [`rotr`](/en-US/docs/WebAssembly/Reference/Numeric/rotr)
  - : Used for performing a bitwise right-rotate.
- [`clz`](/en-US/docs/WebAssembly/Reference/Numeric/clz)
  - : Count the amount of leading zeros in a numbers binary representation.
- [`ctz`](/en-US/docs/WebAssembly/Reference/Numeric/ctz)
  - : Count the amount of trailing zeros in a numbers binary representation.
- [`popcnt`](/en-US/docs/WebAssembly/Reference/Numeric/popcnt)
  - : Count the total amount of 1s in a numbers binary representation.
