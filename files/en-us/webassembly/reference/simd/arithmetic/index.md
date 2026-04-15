---
title: WebAssembly SIMD-specific arithmetic instructions
short-title: Arithmetic instructions
slug: WebAssembly/Reference/SIMD/arithmetic
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly SIMD-specific arithmetic instructions.

## Min and max

- [`max_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
  - : Compares two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) signed integer value interpretations and returns a new interpretation with each lane set to the greater of that lane index's value on the two inputs.
- [`max_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
  - : Compares two `v128` unsigned integer value interpretations and returns a new interpretation with each lane set to the greater of that lane index's value on the two inputs.
- [`min_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
  - : Compares two `v128` signed integer value interpretations and returns a new interpretation with each lane set to the lower of that lane index's value on the two inputs.
- [`min_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
  - : Compares two `v128` unsigned integer value interpretations and returns a new interpretation with each lane set to the lower of that lane index's value on the two inputs.

## See also

- [WebAssembly numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
