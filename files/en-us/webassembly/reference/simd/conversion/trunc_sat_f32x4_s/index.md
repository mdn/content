---
title: "trunc_sat_f32x4_s: Wasm SIMD conversion instruction"
short-title: trunc_sat_f32x4_s
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.trunc_sat_f32x4_s
sidebar: webassemblysidebar
---

The **`trunc_sat_f32x4_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) performs a [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) conversion of the lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f32x4` value interpretation into a signed `i32x4` value interpretation, clamping the output to the range allowed by the value type.

{{InteractiveExample("Wat Demo: trunc_sat_f32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 1300.5 60.4 0.5 780000.4

    i32x4.trunc_sat_f32x4_s
    i32x4.extract_lane 2
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Saturation means that the output values are clamped to the upper and lower values allowed by the value interpretation. Allowed output values are `−2,147,483,648` to `2,147,483,647` (the full range of a signed 32-bit integer). {{jsxref("NaN")}} values are converted to `0`.

## Syntax

```plain
value_type.trunc_sat_f32x4_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `trunc_sat_f32x4_s`:
    - `i32x4`
- `trunc_sat_f32x4_s`
  - : The `trunc_sat_f32x4_s` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `i32x4.trunc_sat_f32x4_s` | `0xfd 248:u32` | `i32x4.trunc_sat_f32x4_s` => `0xfd 0xf8 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
