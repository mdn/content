---
title: WebAssembly types
slug: WebAssembly/Reference/Types
page-type: landing-page
sidebar: webassemblysidebar
---

This section documents the different WebAssembly types. WebAssembly distinguishes two kinds: **value types**, which classify the values code computes with (what sits on the stack, in a local, or in a [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global)), and **type definitions**, which are user-declared composite types listed in a module's type section and referenced by function definitions and indirect calls.

## Value types

- [`i32`](/en-US/docs/WebAssembly/Reference/Types/i32)
  - : A 32-bit integer. Interpreted as signed or unsigned per instruction.
- [`i64`](/en-US/docs/WebAssembly/Reference/Types/i64)
  - : A 64-bit integer. Interpreted as signed or unsigned per instruction.
- [`f32`](/en-US/docs/WebAssembly/Reference/Types/f32)
  - : A 32-bit IEEE 754 single-precision floating-point value.
- [`f64`](/en-US/docs/WebAssembly/Reference/Types/f64)
  - : A 64-bit IEEE 754 double-precision floating-point value.
- [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128)
  - : A 128-bit vector of packed integer or floating-point data, manipulated by [SIMD instructions](/en-US/docs/WebAssembly/Reference/SIMD).
- [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)
  - : A reference to a function defined in Wasm, allowing higher-order functions across the Wasm and JavaScript language boundaries.
- [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref)
  - : A reference to a host value (for example a JavaScript object), opaque to Wasm code.

## Type definitions

- [`func`](/en-US/docs/WebAssembly/Reference/Types/func)
  - : A function signature: parameter types and result types.
