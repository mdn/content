---
title: "demote_f64x2_zero: Wasm SIMD conversion instruction"
short-title: demote_f64x2_zero
slug: WebAssembly/Reference/SIMD/conversion/demote_f64x2_zero
page-type: webassembly-instruction
browser-compat: webassembly.simd.demote_f64x2_zero
sidebar: webassemblysidebar
---

The **`demote_f64x2_zero`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts the lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f64x2` value interpretation into an `f32x4` value interpretation. The two higher lanes of the result are initialized to zero.

{{InteractiveExample("Wat Demo: demote_f64x2_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f64x2 0x3 0x3a

    f32x4.demote_f64x2_zero
    f32x4.extract_lane 1
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
value_type.demote_f64x2_zero
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `demote_f64x2_zero`:
    - `f32x4`
- `demote_f64x2_zero`
  - : The `demote_f64x2_zero` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `f64x2` value interpretation.
- `output`
  - : The output `v128` `f32x4` value interpretation.

### Binary encoding

| Instruction               | Binary format | Example text => binary                   |
| ------------------------- | ------------- | ---------------------------------------- |
| `f32x4.demote_f64x2_zero` | `0xfd 94:u32` | `f32x4.demote_f64x2_zero` => `0xfd 0x5e` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
