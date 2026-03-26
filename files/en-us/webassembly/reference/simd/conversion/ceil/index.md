---
title: "ceil: Wasm SIMD conversion instruction"
short-title: ceil
slug: WebAssembly/Reference/SIMD/conversion/ceil
page-type: webassembly-instruction
browser-compat: webassembly.simd.ceil
sidebar: webassemblysidebar
---

The **`ceil`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) rounds the value in each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation up to the nearest integer above.

{{InteractiveExample("Wat Demo: ceil", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const f32x4 1.9 2.5 0.5 12.1

    f32x4.ceil
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
value_type.ceil
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `ceil`:
    - `f32x4`
    - `f64x2`
- `ceil`
  - : The `ceil` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction  | Binary format  | Example text => binary      |
| ------------ | -------------- | --------------------------- |
| `f32x4.ceil` | `0xfd 103:u32` | `f32x4.ceil` => `0xfd 0x67` |
| `f64x2.ceil` | `0xfd 116:u32` | `f64x2.ceil` => `0xfd 0x74` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
