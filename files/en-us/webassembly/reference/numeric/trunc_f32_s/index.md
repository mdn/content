---
title: "trunc_f32_s: Wasm text instruction"
short-title: trunc_f32_s
slug: WebAssembly/Reference/Numeric/trunc_f32_s
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`trunc_f32_s`** instruction removes the fractional part of an `f32` value and outputs it as a signed integer.

This is a separate instruction, [`trunc`](/en-US/docs/WebAssembly/Reference/Numeric/trunc), which removes the fractional part of a float and outputs a float.

There are also other truncate integer conversion instructions:

- [`trunc_f32_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f32_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f32.const 40.9 ;; load a number onto the stack
    i32.trunc_f32_s ;; discard decimal part and return signed integer
    call $log ;; log the result

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
value_type.trunc_f32_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `trunc_f32_s`:
    - `i32`
    - `i64`
- `trunc_f32_s`
  - : The `trunc_f32_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input floating point number.
- `output`
  - : The output integer.

### Binary encoding

| Instruction       | Binary format | Example text => binary      |
| ----------------- | ------------- | --------------------------- |
| `i32.trunc_f32_s` | `0xa8`        | `i32.trunc_f32_s` => `0xa8` |
| `i64.trunc_f32_s` | `0xae`        | `i64.trunc_f32_s` => `0xae` |

## See also

- [`trunc`](/en-US/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f32_u)
- [`trunc_f64_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
