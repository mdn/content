---
title: "trunc_sat_f32x4_u: Wasm SIMD conversion instruction"
short-title: trunc_sat_f32x4_u
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.trunc_sat_f32x4_u
sidebar: webassemblysidebar
---

The **`trunc_sat_f32x4_u`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) performs a [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) conversion of the lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f32x4` value interpretation into an unsigned `i32x4` value interpretation, clamping the output to the range allowed by the value type.

{{InteractiveExample("Wat Demo: trunc_sat_f32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 1300.5 60.4 0.5 780000.4

    i32x4.trunc_sat_f32x4_u
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Saturation means that the output values are clamped to the upper and lower values allowed by the value interpretation. Allowed output values are `0` to `4,294,967,295` (the full range of an unsigned 32-bit integer). {{jsxref("NaN")}} values are converted to `0`.

## Syntax

```plain
value_type.trunc_sat_f32x4_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `trunc_sat_f32x4_u`:
    - `i32x4`
- `trunc_sat_f32x4_u`
  - : The `trunc_sat_f32x4_u` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `f32x4` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction               | Binary format  | Example text => binary                        |
| ------------------------- | -------------- | --------------------------------------------- |
| `i32x4.trunc_sat_f32x4_u` | `0xfd 249:u32` | `i32x4.trunc_sat_f32x4_u` => `0xfd 0xf9 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
