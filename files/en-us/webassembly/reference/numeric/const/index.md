---
title: "const: Wasm text instruction"
short-title: const
slug: WebAssembly/Reference/Numeric/const
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`const`** [WebAssembly numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) is used to declare numbers.

{{InteractiveExample("Wat Demo: const", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 10 ;; load a number onto the stack
    call $log ;; log the number

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.const
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `const`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - `v128`
- `const`
  - : The `const` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[value] -> []
```

- `value`
  - : The value being pushed onto the stack:
    - For a non-SIMD `value_type`, this will be a basic numeric value such as `3` or `3.5`.
    - For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `value_type`, this will be a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation followed by a SIMD value, for example `f32x4 0x9 0xa 0xb 0xc`.

### Binary encoding

| Instruction  | Binary equivalent      | Example text => binary                                                                                                            |
| ------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `i32.const`  | `0x41 i:leb128`        | `i32.const 2` => `0x41 0x02`                                                                                                      |
| `i64.const`  | `0x42 i:leb128`        | `i64.const 1` => `0x42 0x01`                                                                                                      |
| `f32.const`  | `0x43 f:float32`       | `f32.const 2.0` => `0x43 0x00 0x00 0x00 0x40`                                                                                     |
| `f64.const`  | `0x44 f:float64`       | `f64.const 1.0` => `0x44 0x00 0x00 0x00 0x00 0x00 0x00 0xF0 0x3F`                                                                 |
| `v128.const` | `0xFD 0x0C (b:byte)¹⁶` | `v128.const f32x4 0x9 0xa 0xb 0xc` => `0xFD 0x0C 0x00 0x00 0x10 0x41 0x00 0x00 0x20 0x41 0x00 0x00 0x30 0x41 0x00 0x00 0x40 0x41` |
