---
title: "trunc_sat_f64x2_u_zero: Wasm SIMD conversion instruction"
short-title: trunc_sat_f64x2_u_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_u_zero
page-type: webassembly-instruction
browser-compat: webassembly.simd.trunc_sat_f64x2_u_zero
sidebar: webassemblysidebar
---

The **`trunc_sat_f64x2_u_zero`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) performs a saturating conversion of the lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f64x2` value interpretation into an unsigned `i32x4` value interpretation. The two higher lanes of the result are initialized to zero.

If any input lane is a {{jsxref("NaN")}}, the resulting output lane is set to `0`. If the rounded integer value of a lane is outside the range of the destination type, the result is saturated to the nearest representable integer value.

{{InteractiveExample("Wat Demo: trunc_sat_f64x2_u_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f64x2 1345400000.9 90000000000.5

    i32x4.trunc_sat_f64x2_u_zero
    i32x4.extract_lane 1
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
value_type.trunc_sat_f64x2_u_zero
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `trunc_sat_f64x2_u_zero`:
    - `i32x4`
- `trunc_sat_f64x2_u_zero`
  - : The `trunc_sat_f64x2_u_zero` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `f64x2` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction                    | Binary format  | Example text => binary                             |
| ------------------------------ | -------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_u_zero` | `0xfd 253:u32` | `i32x4.trunc_sat_f64x2_u_zero` => `0xfd 0xfd 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
