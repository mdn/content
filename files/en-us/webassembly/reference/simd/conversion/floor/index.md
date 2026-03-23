---
title: "floor: Wasm SIMD conversion instruction"
short-title: floor
slug: WebAssembly/Reference/SIMD/conversion/floor
page-type: webassembly-instruction
browser-compat: webassembly.simd.floor
sidebar: webassemblysidebar
---

The **`floor`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) rounds the value in each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation down to the nearest integer below.

{{InteractiveExample("Wat Demo: floor", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f32x4 1.9 2.5 0.5 12.1

    f32x4.floor
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
value_type.floor
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `floor`:
    - `f32x4`
    - `f64x2`
- `floor`
  - : The `floor` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `f32x4.floor` | `0xfd 104:u32` | `f32x4.floor` => `0xfd 0x68` |
| `f64x2.floor` | `0xfd 117:u32` | `f64x2.floor` => `0xfd 0x75` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
