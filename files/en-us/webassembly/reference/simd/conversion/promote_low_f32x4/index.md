---
title: "promote_low_f32x4: Wasm SIMD conversion instruction"
short-title: promote_low_f32x4
slug: WebAssembly/Reference/SIMD/conversion/promote_low_f32x4
page-type: webassembly-instruction
browser-compat: webassembly.simd.promote_low_f32x4
sidebar: webassemblysidebar
---

The **`promote_low_f32x4`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts the first two lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `f32x4` value interpretation into an `f64x2` value interpretation.

{{InteractiveExample("Wat Demo: promote_low_f32x4", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const f32x4 0x3 0x3a 0x4b 0x5a

    f64x2.promote_low_f32x4
    f64x2.extract_lane 1
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
value_type.promote_low_f32x4
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `promote_low_f32x4`:
    - `f64x2`
- `promote_low_f32x4`
  - : The `promote_low_f32x4` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `f32x4` value interpretation.
- `output`
  - : The output `v128` `f64x2` value interpretation.

### Binary encoding

| Instruction               | Binary format | Example text => binary                   |
| ------------------------- | ------------- | ---------------------------------------- |
| `f64x2.promote_low_f32x4` | `0xfd 95:u32` | `f64x2.promote_low_f32x4` => `0xfd 0x5f` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
