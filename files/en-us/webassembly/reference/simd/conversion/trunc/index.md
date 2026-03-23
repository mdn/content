---
title: "trunc: Wasm SIMD conversion instruction"
short-title: trunc
slug: WebAssembly/Reference/SIMD/conversion/trunc
page-type: webassembly-instruction
browser-compat: webassembly.simd.trunc
sidebar: webassemblysidebar
---

The **`trunc`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) rounds the value in each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation to the nearest integer towards zero with a magnitude not larger than the input.

{{InteractiveExample("Wat Demo: trunc", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f32x4 0.5 4.9 34.3 33.5

    f32x4.trunc
    f32x4.extract_lane 3
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
value_type.trunc
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `trunc`:
    - `f32x4`
    - `f64x2`
- `trunc`
  - : The `trunc` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction   | Binary format  | Example text => binary       |
| ------------- | -------------- | ---------------------------- |
| `f32x4.trunc` | `0xfd 105:u32` | `f32x4.trunc` => `0xfd 0x69` |
| `f64x2.trunc` | `0xfd 122:u32` | `f64x2.trunc` => `0xfd 0x7a` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
