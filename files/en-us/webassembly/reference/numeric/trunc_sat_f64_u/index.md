---
title: "trunc_sat_f64_u: Wasm numeric instruction"
short-title: trunc_sat_f64_u
slug: WebAssembly/Reference/Numeric/trunc_sat_f64_u
page-type: webassembly-instruction
browser-compat: webassembly.instructions.trunc_sat_f64_u
sidebar: webassemblysidebar
---

The **`trunc_sat_f64_u`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) performs a [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) conversion of an [`f64`](/en-US/docs/WebAssembly/Reference/Value_types/f64) value into an unsigned integer, clamping the output to the range allowed by the value type.

{{InteractiveExample("Wat Demo: trunc_sat_f64_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    f64.const 12000456678.889234

    i32.trunc_sat_f64_u
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Saturation means that the output values are clamped to the upper and lower values allowed by the value interpretation. Allowed output values are:

- `0` to `4,294,967,295` for an `i32` output (the full range of an unsigned 32-bit integer).
- `0` to `18,446,744,073,709,551,615`, or `0` to `2⁶⁴ - 1`, for an `i64` output (the full range of an unsigned 64-bit integer).

{{jsxref("NaN")}} values are converted to `0`.

## Syntax

```plain
value_type.trunc_sat_f64_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following value types support `trunc_sat_f64_u`:
    - [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- `trunc_sat_f64_u`
  - : The `trunc_sat_f64_u` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `i32.trunc_sat_f64_u` | `0xfc 3:u32`  | `i32.trunc_sat_f64_u` => `0xfc 0x03` |
| `i64.trunc_sat_f64_u` | `0xfc 7:u32`  | `i64.trunc_sat_f64_u` => `0xfc 0x07` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
