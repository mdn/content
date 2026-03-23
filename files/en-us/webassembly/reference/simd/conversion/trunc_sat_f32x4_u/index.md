---
title: "trunc_sat_f32x4_u: Wasm SIMD conversion instruction"
short-title: trunc_sat_f32x4_u
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f32x4_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.trunc_sat_f32x4_u
sidebar: webassemblysidebar
---

The **`trunc_sat_f32x4_u`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) performs a saturating conversion of the lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f32x4` value interpretation into an unsigned `i32x4` value interpretation.

If any input lane is a {{jsxref("NaN")}}, the resulting output lane is set to `0`. If the rounded integer value of a lane is outside the range of the destination type, the result is saturated to the nearest representable integer value.

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
