---
title: "convert_i32x4_s: Wasm SIMD conversion instruction"
short-title: convert_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/convert_i32x4_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.convert_i32x4_s
sidebar: webassemblysidebar
---

The **`convert_i32x4_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts the lanes of a `v128` `f32x4` value interpretation into a signed `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: convert_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    (v128.const f32x4 0x3 0x3a 0xa9 0xff)

    f32x4.convert_i32x4_s
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
value_type.convert_i32x4_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `convert_i32x4_s`:
    - `f32x4`
- `convert_i32x4_s`
  - : The `convert_i32x4_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The `v128` value interpretation you want to convert.
- `output`
  - : The output `v128` value interpretation. The input float values are rounded to their nearest integer values.

### Binary encoding

| Instruction             | Binary equivalent | Example text => binary                 |
| ----------------------- | ----------------- | -------------------------------------- |
| `f32x4.convert_i32x4_s` | `0xfd 0xfa`       | `f32x4.convert_i32x4_s` => `0xfd 0xfa` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
