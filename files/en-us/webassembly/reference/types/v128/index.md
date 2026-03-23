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

;; Example of general numeric instruction
(v128.const f32x4 0x10 0x11 0x12 0x13)

;; Example of an instruction working on
;; a specific v128 interpretation
i32x4.add
```

## Description

The `v128` type is used to define and manipulate SIMD (single instruction, multiple data) values in Wasm modules, which enable more efficient data processing by allowing single instructions to operate on multiple data points simultaneously.

A `v128` value represents 128-bits of packed integer or floating-point data, which can be interpreted in several different ways by SIMD instructions. Depending on what value structure you specify, the 128-bits of data will be portioned into multiple **lanes**, each one containing a separate value.

You can interpret a `v128` value as:

- `i8x16` : 16 8-bit integer values
- `i16x8` : 8 16-bit integer values
- `i32x4` : 4 32-bit integer values
- `i64x2` : 2 64-bit integer values
- `f32x4` : 4 32-bit float values
- `f64x2` : 2 64-bit float values

For example, the following uses the [`const`](/en-US/docs/WebAssembly/Reference/Numeric/const) instruction to create an `f32x4` value that contains 4 32-bit float values — `65.4`, `780.9`, `1011.1`, and `3.0`.

```wat
v128.const f32x4 65.4 780.9 1011.1 3.0
```

We could then round all four values down to the nearest integer simultaneously using the [`floor`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/floor) instruction:

```wat
f32x4.floor
```

The previous instruction would output a value of `f32x4 65 780 1011 3`.

Note that SIMD lanes are zero-indexed. In the previous output value:

- Lane 0 contains `65`.
- Lane 1 contains `780`.
- Lane 2 contains `1011`.
- Lane 3 contains `3`.

Some instructions operate on the `v128` type itself:

- v128-specific instructions such as [`load`](/en-US/docs/WebAssembly/Reference/SIMD/load) instructions.
- General numeric instructions such as [`const`](/en-US/docs/WebAssembly/Reference/Numeric/const).

Most of the SIMD instructions, however, operate on interpretations of the `v128` type. See the [SIMD instructions](/en-US/docs/WebAssembly/Reference/SIMD) landing page for the full list.

> [!NOTE]
> Wasm SIMD values can only be used inside of Wasm modules. Attempting to use them outside (for example, by passing them into imported JavaScript functions as parameters) will result in an error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly)
