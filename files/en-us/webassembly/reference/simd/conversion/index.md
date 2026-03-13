---
title: WebAssembly SIMD conversion instructions
short-title: Conversion instructions
slug: WebAssembly/Reference/SIMD/conversion
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly SIMD conversion instructions.

## Convert between types

- [`convert_low_i32x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_s)
  - : Converts the lanes of a `v128` `f64x2` value interpretation into signed `i32x4` values.
- [`convert_low_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u)
  - : Converts the lanes of a `v128` `f64x2` value interpretation into unsigned `i32x4` values.
- [`convert_i32x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_s)
  - : Converts the lanes of a `v128` `f32x4` value interpretation into signed `i32x4` values.
- [`convert_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_u)
  - : Converts the lanes of a `v128` `f32x4` value interpretation into unsigned `i32x4` values.

## Value replacement

- [`replace_lane`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
  - : Replaces the specified lane of a `v128` value interpretation with a new value and returns the resulting `v128` value interpretation.
- [`shuffle`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/shuffle)
  - : Returns a new `v128` value interpretation with its lane values selected from two input `v128` values, determined by provided index values.
- [`splat`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/splat)
  - : Copies the same value to all lanes of a `v128` value interpretation.
- [`swizzle`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/swizzle)
  - : Returns a new `v128` value interpretation with its lane values selected from an input `v128` value, determined by indices provided in a second input `v128`.

## Shift values

- [`shl`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/shl)
  - : Shifts the bits in each lane of a `v128` value interpretation to the left by the same specified amount.
- [`shr_s`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/shr_s)
  - : Shifts the bits in each lane of a `v128` value interpretation to the right by the same specified amount, outputting signed values. This is an arithmetic right shift.
- [`shr_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/shr_u)
  - : Shifts the bits in each lane of a `v128` value interpretation to the right by the same specified amount, outputting unsigned values. This is a logical right shift.
