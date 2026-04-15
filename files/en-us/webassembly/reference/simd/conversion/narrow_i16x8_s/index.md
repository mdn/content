---
title: "narrow_i16x8_s: Wasm SIMD conversion instruction"
short-title: narrow_i16x8_s
slug: WebAssembly/Reference/SIMD/conversion/narrow_i16x8_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.narrow_i16x8_s
sidebar: webassemblysidebar
---

The **`narrow_i16x8_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretations into an `i8x16` value interpretation.

{{InteractiveExample("Wat Demo: narrow_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 2 4 6 8 10 12 14 16
    v128.const i16x8 18 20 22 24 26 28 30 32

    i8x16.narrow_i16x8_s
    i8x16.extract_lane_s 15
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
i8x16.narrow_i16x8_s
```

- `i8x16.narrow_i16x8_s`
  - : The `i8x16.narrow_i16x8_s` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i16x8` value interpretation.
- `input2`
  - : The second input `v128` `i16x8` value interpretation.
- `output`
  - : The output `v128` `i8x16` value interpretation.

### Binary encoding

| Instruction            | Binary format  | Example text => binary                |
| ---------------------- | -------------- | ------------------------------------- |
| `i8x16.narrow_i16x8_s` | `0xfd 101:u32` | `i8x16.narrow_i16x8_s` => `0xfd 0x65` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
