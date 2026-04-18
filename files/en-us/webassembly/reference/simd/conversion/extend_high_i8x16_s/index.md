---
title: "extend_high_i8x16_s: Wasm SIMD conversion instruction"
short-title: extend_high_i8x16_s
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i8x16_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.extend_high_i8x16_s
sidebar: webassemblysidebar
---

The **`extend_high_i8x16_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts lanes 8–15 of a signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i8x16` value interpretation into an `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: extend_high_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32

    i16x8.extend_high_i8x16_s
    i16x8.extract_lane_s 0
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
i16x8.extend_high_i8x16_s
```

- `i16x8.extend_high_i8x16_s`
  - : The `i16x8.extend_high_i8x16_s` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i8x16` value interpretation.
- `output`
  - : The output `v128` `i16x8` value interpretation.

### Binary encoding

| Instruction                 | Binary format  | Example text => binary                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i16x8.extend_high_i8x16_s` | `0xfd 136:u32` | `i16x8.extend_high_i8x16_s` => `0xfd 0x88 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
