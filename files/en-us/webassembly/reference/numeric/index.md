---
title: WebAssembly numeric instructions
slug: WebAssembly/Reference/Numeric
---

{{WebAssemblySidebar}}

WebAssembly numeric instructions.

## Constants

- [`Const`](/en-US/docs/WebAssembly/Reference/Numeric/Const)
  - : Declare a constant numbers.

## Comparison

- [`Equal`](/en-US/docs/WebAssembly/Reference/Numeric/Equal)
  - : Check if two numbers are equal.
- [`Not equal`](/en-US/docs/WebAssembly/Reference/Numeric/Not_equal)
  - : Check if two numbers are not equal.
- [`Greater than`](/en-US/docs/WebAssembly/Reference/Numeric/Greater_than)
  - : Check if a number is greater than another number.
- [`Less than`](/en-US/docs/WebAssembly/Reference/Numeric/Less_than)
  - : Check if a number is less than another number.
- [`Greater or equal`](/en-US/docs/WebAssembly/Reference/Numeric/Greater_or_equal)
  - : Check if a number is greater than or equal to another number.
- [`Less or equal`](/en-US/docs/WebAssembly/Reference/Numeric/Less_or_equal)
  - : Check if a number is less than or equal to another number.

## Arithmetic

- [`Addition`](/en-US/docs/WebAssembly/Reference/Numeric/Addition)
  - : Add up two numbers.
- [`Subtraction`](/en-US/docs/WebAssembly/Reference/Numeric/Subtraction)
  - : Subtract one number from another number.
- [`Multiplication`](/en-US/docs/WebAssembly/Reference/Numeric/Multiplication)
  - : Multiply one number by another number.
- [`Division`](/en-US/docs/WebAssembly/Reference/Numeric/Division)
  - : Divide one number by another number.
- [`Remainder`](/en-US/docs/WebAssembly/Reference/Numeric/Remainder)
  - : Calculate the remainder left over when one integer is divided by another integer.

## Conversion

- [`Extend`](/en-US/docs/WebAssembly/Reference/Numeric/Extend)
  - : Convert (extend) `i32` to `i64`.
- [`Wrap`](/en-US/docs/WebAssembly/Reference/Numeric/Wrap)
  - : Convert (wrap) `i64` to `i32`.
- [`Promote`](/en-US/docs/WebAssembly/Reference/Numeric/Promote)
  - : Convert (promote) `f32` to `f64`.
- [`Demote`](/en-US/docs/WebAssembly/Reference/Numeric/Demote)
  - : Convert (demote) `f64` to `f32`.
- [`Convert`](/en-US/docs/WebAssembly/Reference/Numeric/Convert)
  - : Convert integers to floating points.
- [`Truncate (float to int)`](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int)
  - : Convert (truncate fractional part) floating points to integers.
- [`Reinterpret`](/en-US/docs/WebAssembly/Reference/Numeric/Reinterpret)
  - : Reinterpret the bytes of integers as floating points and vice versa.

## Floating point specific instructions

- [`Min`](/en-US/docs/WebAssembly/Reference/Numeric/Min)
  - : Get the lower of two numbers.
- [`Max`](/en-US/docs/WebAssembly/Reference/Numeric/Max)
  - : Get the higher of two numbers.
- [`Nearest`](/en-US/docs/WebAssembly/Reference/Numeric/Nearest)
  - : Round a number to the nearest integer.
- [`Ceil`](/en-US/docs/WebAssembly/Reference/Numeric/Ceil)
  - : Round up a number.
- [`Floor`](/en-US/docs/WebAssembly/Reference/Numeric/Floor)
  - : Round down a number.
- [`Truncate (float to float)`](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_float)
  - : Discard the fractional part of a number.
- [`Absolute`](/en-US/docs/WebAssembly/Reference/Numeric/Absolute)
  - : Get the absolute value of a number.
- [`Negate`](/en-US/docs/WebAssembly/Reference/Numeric/Negate)
  - : Negate a number.
- [`Square root`](/en-US/docs/WebAssembly/Reference/Numeric/Square_root)
  - : Get the square root of a number.
- [`Copy sign`](/en-US/docs/WebAssembly/Reference/Numeric/Copy_sign)
  - : Copy just the sign bit from one number to another.

## Bitwise

- [`AND`](/en-US/docs/WebAssembly/Reference/Numeric/AND)
  - : Used for performing a bitwise AND.
- [`OR`](/en-US/docs/WebAssembly/Reference/Numeric/OR)
  - : Used for performing a bitwise OR.
- [`XOR`](/en-US/docs/WebAssembly/Reference/Numeric/XOR)
  - : Used for performing a bitwise XOR.
- [`Left shift`](/en-US/docs/WebAssembly/Reference/Numeric/Left_shift)
  - : Used for performing a bitwise left-shift.
- [`Right shift`](/en-US/docs/WebAssembly/Reference/Numeric/Right_shift)
  - : Used for performing a bitwise left-shift.
- [`Left rotate`](/en-US/docs/WebAssembly/Reference/Numeric/Left_rotate)
  - : Used for performing a bitwise left-rotate.
- [`Right rotate`](/en-US/docs/WebAssembly/Reference/Numeric/Right_rotate)
  - : Used for performing a bitwise right-rotate.
- [`Count leading zeros`](/en-US/docs/WebAssembly/Reference/Numeric/Count_leading_zeros)
  - : Count the amount of leading zeros in a numbers binary representation.
- [`Count trailing zeros`](/en-US/docs/WebAssembly/Reference/Numeric/Count_trailing_zeros)
  - : Count the amount of trailing zeros in a numbers binary representation.
- [`Population count`](/en-US/docs/WebAssembly/Reference/Numeric/Population_count)
  - : Count the total amount of 1s in a numbers binary representation.
