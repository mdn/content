---
title: "trunc_sat_f64x2_s_zero: Wasm SIMD conversion instruction"
short-title: trunc_sat_f64x2_s_zero
slug: WebAssembly/Reference/SIMD/conversion/trunc_sat_f64x2_s_zero
page-type: webassembly-instruction
browser-compat: webassembly.simd.trunc_sat_f64x2_s_zero
sidebar: webassemblysidebar
---

The **`trunc_sat_f64x2_s_zero`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) performs a saturating conversion of the lanes of a `v128` `f64x2` value interpretation into a signed `i32x4` value interpretation. The two higher lanes of the result are initialized to zero.

If any input lane is a {{jsxref("NaN")}}, the resulting output lane is set to `0`. If the rounded integer value of a lane is outside the range of the destination type, the result is saturated to the nearest representable integer value.

{{InteractiveExample("Wat Demo: trunc_sat_f64x2_s_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    (v128.const f64x2 1300.5 1345400000.9)

    i32x4.trunc_sat_f64x2_s_zero
    f64x2.extract_lane 0
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
value_type.trunc_sat_f64x2_s_zero
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `trunc_sat_f64x2_s_zero`:
    - `i32x4`
- `trunc_sat_f64x2_s_zero`
  - : The `trunc_sat_f64x2_s_zero` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The `v128` value interpretation you want to convert.
- `output`
  - : The output `v128` value interpretation. The input float values are rounded to their nearest integer values.

### Binary encoding

| Instruction                    | Binary equivalent | Example text => binary                             |
| ------------------------------ | ----------------- | -------------------------------------------------- |
| `i32x4.trunc_sat_f64x2_s_zero` | `0xfd 0xfc 0x01`  | `i32x4.trunc_sat_f64x2_s_zero` => `0xfd 0xfc 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
