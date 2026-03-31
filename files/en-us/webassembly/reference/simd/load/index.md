---
title: WebAssembly SIMD load instructions
slug: WebAssembly/Reference/SIMD/load
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly SIMD load instructions.

## Load and load lane

- [`load`](/en-US/docs/WebAssembly/Reference/SIMD/load/load)
  - : Loads all lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation with the value at a given memory address.
- [`load8_lane`](/en-US/docs/WebAssembly/Reference/SIMD/load/load8_lane)
  - : Loads a single value from a given memory address into the specified lane of a `v128` `i8x16` value interpretation.
- [`load16_lane`](/en-US/docs/WebAssembly/Reference/SIMD/load/load16_lane)
  - : Loads a single value from a given memory address into the specified lane of a `v128` `i16x8` value interpretation.
- [`load32_lane`](/en-US/docs/WebAssembly/Reference/SIMD/load/load32_lane)
  - : Loads a single value from a given memory address into the specified lane of a `v128` `i32x4` value interpretation.
- [`load64_lane`](/en-US/docs/WebAssembly/Reference/SIMD/load/load64_lane)
  - : Loads a single value from a given memory address into the specified lane of a `v128` `i64x2` value interpretation.

## Load and extend

- [`load8x8_s`](/en-US/docs/WebAssembly/Reference/SIMD/load/load8x8_s)
  - : Loads eight 8-bit integers from a given memory address and sign extends each one to a 16-bit lane, outputting a `v128` `i16x8` value interpretation.
- [`load8x8_u`](/en-US/docs/WebAssembly/Reference/SIMD/load/load8x8_u)
  - : Loads eight 8-bit integers from a given memory address and zero extends each one to a 16-bit lane, outputting a `v128` `i16x8` value interpretation.
- [`load16x4_s`](/en-US/docs/WebAssembly/Reference/SIMD/load/load16x4_s)
  - : Loads four 16-bit integers from a given memory address and sign extends each one to a 32-bit lane, outputting a `v128` `i32x4` value interpretation.
- [`load16x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/load/load16x4_u)
  - : Loads four 16-bit integers from a given memory address and zero extends each one to a 32-bit lane, outputting a `v128` `i32x4` value interpretation.
- [`load32x2_s`](/en-US/docs/WebAssembly/Reference/SIMD/load/load32x2_s)
  - : Loads two 32-bit integers from a given memory address and sign extends each one to a 64-bit lane, outputting a `v128` `i64x2` value interpretation.
- [`load32x2_u`](/en-US/docs/WebAssembly/Reference/SIMD/load/load32x2_u)
  - : Loads two 32-bit integers from a given memory address and zero extends each one to a 64-bit lane, outputting a `v128` `i64x2` value interpretation.

## Load and splat

- [`load8_splat`](/en-US/docs/WebAssembly/Reference/SIMD/load/load8_splat)
  - : Loads a single value from a given memory address into all lanes of a `v128` `i8x16` value interpretation.
- [`load16_splat`](/en-US/docs/WebAssembly/Reference/SIMD/load/load16_splat)
  - : Loads a single value from a given memory address into all lanes of a `v128` `i16x8` value interpretation.
- [`load32_splat`](/en-US/docs/WebAssembly/Reference/SIMD/load/load32_splat)
  - : Loads a single value from a given memory address into all lanes of a `v128` `i32x4` value interpretation.
- [`load64_splat`](/en-US/docs/WebAssembly/Reference/SIMD/load/load64_splat)
  - : Loads a single value from a given memory address into all lanes of a `v128` `i64x2` value interpretation.

## Load and zero-pad

- [`load32_zero`](/en-US/docs/WebAssembly/Reference/SIMD/load/load32_zero)
  - : Loads a single value from a given memory address into the first lane of a `v128` `i32x4` value interpretation, and initializes the other lanes to `0`.
- [`load64_zero`](/en-US/docs/WebAssembly/Reference/SIMD/load/load64_zero)
  - : Loads a single value from a given memory address into the first lane of a `v128` `i64x2` value interpretation, and initializes the other lane to `0`.
