---
title: WebAssembly SIMD-specific arithmetic instructions
short-title: Arithmetic instructions
slug: WebAssembly/Reference/SIMD/arithmetic
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly SIMD-specific arithmetic instructions.

## Add adjacent pairs

- [`extadd_pairwise_i8x16_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_s)
  - : Adds each adjacent pair of lanes of a signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i8x16` value interpretation, outputting the results into an `i16x8` value interpretation.
- [`extadd_pairwise_i8x16_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u)
  - : Adds each adjacent pair of lanes of an unsigned `v128` `i8x16` value interpretation, outputting the results into an `i16x8` value interpretation.
- [`extadd_pairwise_i16x8_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_s)
  - : Adds each adjacent pair of lanes of a signed `v128` `i16x8` value interpretation, outputting the results into an `i32x4` value interpretation.
- [`extadd_pairwise_i16x8_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_u)
  - : Adds each adjacent pair of lanes of an unsigned `v128` `i16x8` value interpretation, outputting the results into an `i32x4` value interpretation.

## Integer dot product

- [`dot_i16x8_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/dot_i16x8_s)
  - : Performs a dot product calculation on two signed `v128` `i16x8` value interpretations. The corresponding lanes of the input values are multiplied together, then each adjacent pair of products are added together. The four results of these additions are output as an `i32x4` value interpretation.

## Lane-wise rounding average

- [`avgr_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/avgr_u)
  - : Performs a rounding average of two unsigned `v128` value interpretations. Each lane of the output value is `(a + b + 1) / 2`, rounded up (ceiling division).

## Lane-wise saturating rounding multiplication

- [`q15mulr_sat_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/q15mulr_sat_s)
  - : performs a lane-wise [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) rounding multiplication in Q15 format on two signed `v128` `i16x8` value interpretations — clamping the output to the range allowed by the value type (a single `i16x8` value interpretation).

## Min and max

- [`max_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
  - : Compares two `v128` signed integer value interpretations and returns a new interpretation with each lane set to the greater of that lane index's value on the two inputs.
- [`max_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
  - : Compares two `v128` unsigned integer value interpretations and returns a new interpretation with each lane set to the greater of that lane index's value on the two inputs.
- [`min_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
  - : Compares two `v128` signed integer value interpretations and returns a new interpretation with each lane set to the lower of that lane index's value on the two inputs.
- [`min_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
  - : Compares two `v128` unsigned integer value interpretations and returns a new interpretation with each lane set to the lower of that lane index's value on the two inputs.
- [`pmax`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/pmax)
  - : Compares two `v128` floating point value interpretations and returns a new interpretation with each output lane set to the larger of the corresponding input lanes.
- [`pmin`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/pmin)
  - : Compares two `v128` floating point value interpretations and returns a new interpretation with each output lane set to the smaller of the corresponding input lanes.

## Multiply and extend

- [`extmul_low_i8x16_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_s)
  - : Takes lanes 0–7 of two signed `v128` `i8x16` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i16x8` value interpretation.
- [`extmul_high_i8x16_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_s)
  - : Takes lanes 8–15 of two signed `v128` `i8x16` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i16x8` value interpretation.
- [`extmul_low_i8x16_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_u)
  - : Takes lanes 0–7 of two unsigned `v128` `i8x16` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i16x8` value interpretation.
- [`extmul_high_i8x16_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i8x16_u)
  - : Takes lanes 8–15 of two unsigned `v128` `i8x16` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i16x8` value interpretation.
- [`extmul_low_i16x8_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_s)
  - : Takes lanes 0–3 of two signed `v128` `i16x8` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i32x4` value interpretation.
- [`extmul_high_i16x8_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_s)
  - : Takes lanes 4–7 of two signed `v128` `i16x8` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i32x4` value interpretation.
- [`extmul_low_i16x8_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i16x8_u)
  - : Takes lanes 0–3 of two unsigned `v128` `i16x8` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i32x4` value interpretation.
- [`extmul_high_i16x8_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_u)
  - : Takes lanes 4–7 of two unsigned `v128` `i16x8` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i32x4` value interpretation.
- [`extmul_low_i32x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_s)
  - : Takes lanes 0–1 of two signed `v128` `i32x4` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i64x2` value interpretation.
- [`extmul_high_i32x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_s)
  - : Takes lanes 2–3 of two signed `v128` `i32x4` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i64x2` value interpretation.
- [`extmul_low_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_low_i32x4_u)
  - : Takes lanes 0–1 of two unsigned `v128` `i32x4` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i64x2` value interpretation.
- [`extmul_high_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_u)
  - : Takes lanes 2–3 of two unsigned `v128` `i32x4` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i64x2` value interpretation.

## Saturated addition and subtraction

- [`add_sat_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/add_sat_s)
  - : Performs a [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) addition of two signed `v128` value interpretations — clamping the output to the range allowed by the value type. Each lane of the output value is the result of adding the corresponding lanes of the input value.
- [`add_sat_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/add_sat_u)
  - : Performs a saturating addition of two unsigned `v128` value interpretations — clamping the output to the range allowed by the value type. Each lane of the output value is the result of adding the corresponding lanes of the input value.
- [`sub_sat_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/sub_sat_s)
  - : Performs a saturating subtraction of two signed `v128` value interpretations — clamping the output to the range allowed by the value type. Each lane of the output value is the result of subtracting the corresponding lane of the second input from the corresponding lane of the first input.
- [`sub_sat_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/sub_sat_u)
  - : performs a saturating subtraction of two unsigned `v128` value interpretations — clamping the output to the range allowed by the value type. Each lane of the output value is the result of subtracting the corresponding lane of the second input from the corresponding lane of the first input.

## See also

- [WebAssembly numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
