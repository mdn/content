---
title: WebAssembly value types
slug: WebAssembly/Reference/Value_types
page-type: landing-page
sidebar: webassemblysidebar
---

Value types classify the values used in computation.

- [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
  - : A 32-bit integer. Interpreted as signed or unsigned per instruction.
- [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
  - : A 64-bit integer. Interpreted as signed or unsigned per instruction.
- [`f32`](/en-US/docs/WebAssembly/Reference/Value_types/f32)
  - : A 32-bit single-precision floating-point value.
- [`f64`](/en-US/docs/WebAssembly/Reference/Value_types/f64)
  - : A 64-bit double-precision floating-point value.
- [`v128`](/en-US/docs/WebAssembly/Reference/Value_types/v128)
  - : A 128-bit vector of packed integer or floating-point data, manipulated by [SIMD instructions](/en-US/docs/WebAssembly/Reference/SIMD).
- [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref)
  - : A reference to a function defined in Wasm, allowing higher-order functions to be called across the Wasm and JavaScript language boundaries.
- [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref)
  - : Represents a thrown exception in a Wasm module, allowing it to be rethrown.
- [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref)
  - : A reference to a host value (for example a JavaScript object), opaque to Wasm code.
