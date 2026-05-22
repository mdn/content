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
- [`eqz`](/en-US/docs/WebAssembly/Reference/Numeric/eqz)
  - : Check if a number is equal to `0`.
- [`ne`](/en-US/docs/WebAssembly/Reference/Numeric/ne)
  - : Check if two numbers are not equal.
- [`gt`](/en-US/docs/WebAssembly/Reference/Numeric/gt)
  - : Check if a floating point number is greater than another floating point number.
- [`gt_s`](/en-US/docs/WebAssembly/Reference/Numeric/gt_s)
  - : Check if a signed integer is greater than another signed integer.
- [`gt_u`](/en-US/docs/WebAssembly/Reference/Numeric/gt_u)
  - : Check if an unsigned integer is greater than another unsigned integer.
- [`lt`](/en-US/docs/WebAssembly/Reference/Numeric/lt)
  - : Check if a floating point number is less than another floating point number.
- [`lt_s`](/en-US/docs/WebAssembly/Reference/Numeric/lt_s)
  - : Check if a signed integer is less than another signed integer.
- [`lt_u`](/en-US/docs/WebAssembly/Reference/Numeric/lt_u)
  - : Check if an unsigned integer is less than another unsigned integer.
- [`ge`](/en-US/docs/WebAssembly/Reference/Numeric/ge)
  - : Check if a floating point number is greater than or equal to another floating point number.
- [`ge_s`](/en-US/docs/WebAssembly/Reference/Numeric/ge_s)
  - : Check if a signed integer is greater than or equal to another signed integer.
- [`ge_u`](/en-US/docs/WebAssembly/Reference/Numeric/ge_u)
  - : Check if an unsigned integer is greater than or equal to another unsigned integer.
- [`le`](/en-US/docs/WebAssembly/Reference/Numeric/le)
  - : Check if a floating point number is less than or equal to another floating point number.
- [`le_s`](/en-US/docs/WebAssembly/Reference/Numeric/le_s)
  - : Check if a signed integer is less than or equal to another signed integer.
- [`le_u`](/en-US/docs/WebAssembly/Reference/Numeric/le_u)
  - : Check if an unsigned integer is less than or equal to another unsigned integer.

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
- [`wrap_i64`](/en-US/docs/WebAssembly/Reference/Numeric/wrap_i64)
  - : Convert (wrap) `i64` to `i32`.
- [`promote_32`](/en-US/docs/WebAssembly/Reference/Numeric/promote_32)
  - : Convert (promote) `f32` to `f64`.
- [`demote`](/en-US/docs/WebAssembly/Reference/Numeric/demote)
  - : Convert (demote) `f64` to `f32`.
- [`convert`](/en-US/docs/WebAssembly/Reference/Numeric/convert)
  - : Convert integers to floating points.
- [`trunc`](/en-US/docs/WebAssembly/Reference/Numeric/trunc)
  - : Gets the value of a floating point number without its fractional part.
- [`trunc_f32_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
  - : Removes the fractional part of an `f32` value and outputs it as a signed integer.
- [`trunc_f32_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
  - : Removes the fractional part of an `f32` value and outputs it as an unsigned integer.
- [`trunc_f64_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
  - : Removes the fractional part of an `f64` value and outputs it as a signed integer.
- [`trunc_f64_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
  - : Removes the fractional part of an `f64` value and outputs it as an unsigned integer.
- [`reinterpret`](/en-US/docs/WebAssembly/Reference/Numeric/reinterpret)
  - : Reinterpret the bytes of integers as floating points and vice versa.

## Floating point specific instructions

- [`min`](/en-US/docs/WebAssembly/Reference/Numeric/min)
  - : Get the lower of two numbers.
- [`max`](/en-US/docs/WebAssembly/Reference/Numeric/max)
  - : Get the higher of two floating point numbers.
- [`nearest`](/en-US/docs/WebAssembly/Reference/Numeric/nearest)
  - : Round a number to the nearest integer.
- [`ceil`](/en-US/docs/WebAssembly/Reference/Numeric/ceil)
  - : Round up a number.
- [`floor`](/en-US/docs/WebAssembly/Reference/Numeric/floor)
  - : Round down a number.
- [`trunc`](/en-US/docs/WebAssembly/Reference/Numeric/trunc)
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
- [`shr_s`](/en-US/docs/WebAssembly/Reference/Numeric/shr_s)
  - : Used for performing a bitwise right-shift on signed integers.
- [`shr_u`](/en-US/docs/WebAssembly/Reference/Numeric/shr_u)
  - : Used for performing a bitwise right-shift on unsigned integers.
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
