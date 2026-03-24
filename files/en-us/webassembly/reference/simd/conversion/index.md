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
  - : Converts the lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f64x2` value interpretation into a signed `i32x4` value interpretation.
- [`convert_low_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u)
  - : Converts the lanes of a `v128` `f64x2` value interpretation into an unsigned `i32x4` value interpretation.
- [`convert_i32x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_s)
  - : Converts the lanes of a `v128` `f32x4` value interpretation into a signed `i32x4` value interpretation.
- [`convert_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/convert_i32x4_u)
  - : Converts the lanes of a `v128` `f32x4` value interpretation into an unsigned `i32x4` value interpretation.
- [`demote_f64x2_zero`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero)
  - : Converts the lanes of a `v128` `f64x2` value interpretation into an `f32x4` value interpretation. The two higher lanes of the result are initialized to zero.
- [`promote_low_f32x4`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/promote_low_f32x4)
  - : Converts the first two lanes of a `v128` `f32x4` value interpretation into an `f64x2` value interpretation.

## Value replacement

- [`replace_lane`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/replace_lane)
  - : Replaces the specified lane of a `v128` value interpretation with a new value and returns the resulting `v128` value interpretation.
- [`shuffle`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/shuffle)
  - : Returns a new `v128` value interpretation with its lane values selected from two input `v128` values, determined by provided index values.
- [`splat`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/splat)
  - : Copies the same value to all lanes of a `v128` value interpretation.
- [`swizzle`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/swizzle)
  - : Returns a new `v128` value interpretation with its lane values selected from an input `v128` value, determined by indices provided in a second input `v128`.

## Round values

- [`ceil`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/ceil)
  - : Rounds the value in each lane of a `v128` value interpretation up to the nearest integer above.
- [`floor`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/floor)
  - : Rounds the value in each lane of a `v128` value interpretation down to the nearest integer below.
- [`trunc`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/trunc)
  - : Rounds the value in each lane of a `v128` value interpretation to the nearest integer towards zero.
- [`trunc_sat_f32x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s)
  - : Performs a saturating conversion of the lanes of a `v128` `f32x4` value interpretation into a signed `i32x4` value interpretation.
- [`trunc_sat_f32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u)
  - : Performs a saturating conversion of the lanes of a `v128` `f32x4` value interpretation into an unsigned `i32x4` value interpretation.
- [`trunc_sat_f64x2_s_zero`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero)
  - : Performs a saturating conversion of the lanes of a `v128` `f64x2` value interpretation into a signed `i32x4` value interpretation. The two higher lanes of the result are initialized to zero.
- [`trunc_sat_f64x2_u_zero`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero)
  - : Performs a saturating conversion of the lanes of a `v128` `f64x2` value interpretation into an unsigned `i32x4` value interpretation. The two higher lanes of the result are initialized to zero.
