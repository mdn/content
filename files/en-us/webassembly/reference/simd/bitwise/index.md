---
title: WebAssembly SIMD-specific bitwise instructions
short-title: Bitwise instructions
slug: WebAssembly/Reference/SIMD/bitwise
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly SIMD-specific bitwise instructions.

## Bitwise logic

- [`andnot`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/andnot)
  - : Takes two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) input values. It performs a bitwise AND on the first value and a second value equal to the result of performing a bitwise NOT on each byte of the second original value. It returns a new `v128` value containing the result.
- [`any_true`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/andnot)
  - : Tests whether a `v128` input value contains any non-zero bits.
- [`bitmask`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/bitmask)
  - : Inspects the **most significant bit** (MSB) — bit 7 — of each byte of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation. This is the sign bit if the value is treated as signed. The instruction's output value is equal to all of those bits collected into a single `i32`.
- [`bitselect`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/bitselect)
  - : Takes three [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) values as inputs — two inputs and a mask value — and returns a new `v128` value with each byte calculated using the formula `output = (input1 AND mask) OR (input2 AND NOT mask)`.
- [`not`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/not)
  - : Performs a bitwise NOT on each byte of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value and returns a new `v128` value containing the result.

## See also

- [WebAssembly numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
