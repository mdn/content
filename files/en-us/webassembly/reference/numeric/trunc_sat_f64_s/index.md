---
title: "trunc_sat_f64_s: Wasm numeric instruction"
short-title: trunc_sat_f64_s
slug: WebAssembly/Reference/Numeric/trunc_sat_f64_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.trunc_sat_f64_s
sidebar: webassemblysidebar
---

The **`trunc_sat_f64_s`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) performs a [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) conversion of an [`f64`](/en-US/docs/WebAssembly/Reference/Value_types/f64) value into a signed integer, clamping the output to the range allowed by the value type.

{{InteractiveExample("Wat Demo: trunc_sat_f64_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    f64.const 12000456678.889234

    i64.trunc_sat_f64_s
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Saturation means that the output values are clamped to the upper and lower values allowed by the value interpretation. Allowed output values are:

- `−2,147,483,648` to `2,147,483,647` for an `i32` output (the full range of a signed 32-bit integer).
- `-9,223,372,036,854,775,808` to `9,223,372,036,854,775,807`, or `-2⁶³` to `2⁶³ - 1`, for an `i64` output (the full range of a signed 64-bit integer).

{{jsxref("NaN")}} values are converted to `0`.

## Syntax

```plain
value_type.trunc_sat_f64_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following value types support `trunc_sat_f64_s`:
    - [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- `trunc_sat_f64_s`
  - : The `trunc_sat_f64_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `f64` value.
- `output`
  - : The output value.

### Binary encoding

| Instruction           | Binary format | Example text => binary               |
| --------------------- | ------------- | ------------------------------------ |
| `i32.trunc_sat_f64_s` | `0xfc 2:u32`  | `i32.trunc_sat_f64_s` => `0xfc 0x02` |
| `i64.trunc_sat_f64_s` | `0xfc 6:u32`  | `i64.trunc_sat_f64_s` => `0xfc 0x06` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
