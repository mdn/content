---
title: "v128: Wasm type"
short-title: v128
slug: WebAssembly/Reference/Types/v128
page-type: webassembly-instruction
browser-compat: webassembly.simd
sidebar: webassemblysidebar
---

The **`v128`** value type is a vector type representing 128-bits of packed integer or floating-point data. A `v128` value can be interpreted in several different ways by [SIMD instructions](/en-US/docs/WebAssembly/Reference/SIMD).

{{InteractiveExample("Wat Demo: v128", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two SIMD values onto the stack
    (v128.const f32x4 0x9 0xa 0xb 0xc)
    (v128.const f32x4 0x10 0x11 0x12 0x13)

    f32x4.add ;; add the two values
    f32x4.extract_lane 0 ;; Extract a float value from the result
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```wat
;; Example of a v128-specific instruction
(v128.load32_splat align=2 (i32.const 0))

;; Example of general numeric instuction
(v128.const f32x4 0x10 0x11 0x12 0x13)

;; Example of an instruction working on
;; a specific v128 interpretation
i32x4.add
```

## Description

The `v128` type is used to define and manipulate SIMD (single instruction, multiple data) values in Wasm modules, which enable more data processing by allowing single instructions to operate on multiple data points simultaneously.

A `v128` value represents 128-bits of packed integer or floating-point data, and can be interpreted in several different ways by SIMD instructions, depending on what value structure you specify. You can interpret a `v128` value as:

- `i8x16` : 16 8-bit integer values
- `i16x8` : 8 16-bit integer values
- `i32x4` : 4 32-bit integer values
- `i64x2` : 2 64-bit integer values
- `f32x4` : 4 32-bit float values
- `f64x2` : 2 64-bit float values

Some instructions operate on the `v128` type itself:

- [`v128-specific instructions`](/en-US/docs/WebAssembly/Reference/SIMD/v128_specific)
- [`General numeric instructions`](/en-US/docs/WebAssembly/Reference/Numeric)

Most of the instructions, however, operate on interpretations of the `v128` type. See the [SIMD instructions](/en-US/docs/WebAssembly/Reference/SIMD) landing page for the full list.

> [!NOTE]
> Wasm SIMD values can only be used inside of Wasm modules. Attempting to use them outside (for example, by passing them into imported JavaScript functions as parameters) will result in an error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly)
