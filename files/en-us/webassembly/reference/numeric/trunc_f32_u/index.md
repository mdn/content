---
title: "trunc_f32_u: Wasm text instruction"
short-title: trunc_f32_u
slug: WebAssembly/Reference/Numeric/trunc_f32_u
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`trunc_f32_u`** instruction removes the fractional part of an `f32` value and outputs it as an unsigned integer.

This is a separate instruction, [`trunc`](/en-US/docs/WebAssembly/Reference/Numeric/trunc), which removes the fractional part of a float and outputs a float.

There are also other truncate integer conversion instructions:

- [`trunc_f32_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f64_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_u)

{{InteractiveExample("Wat Demo: trunc_f32_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    f32.const 2344.8 ;; load a number onto the stack
    i32.trunc_f32_u ;; discard decimal part and return unsigned integer
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
value_type.trunc_f32_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `trunc_f32_u`:
    - `i32`
    - `i64`
- `trunc_f32_u`
  - : The `trunc_f32_u` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `i32.trunc_f32_u` | `0xa9`        | `i32.trunc_f32_u` => `0xa9` |
| `i64.trunc_f32_u` | `0xaf`        | `i64.trunc_f32_u` => `0xaf` |

## See also

- [`trunc`](/en-US/docs/WebAssembly/Reference/Numeric/trunc)
- [`trunc_f32_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f32_s)
- [`trunc_f64_s`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_s)
- [`trunc_f64_u`](/en-US/docs/WebAssembly/Reference/Numeric/trunc_f64_u)
