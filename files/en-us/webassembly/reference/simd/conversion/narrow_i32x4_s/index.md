---
title: "narrow_i32x4_s: Wasm SIMD conversion instruction"
short-title: narrow_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/narrow_i32x4_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.narrow_i32x4_s
sidebar: webassemblysidebar
---

The **`narrow_i32x4_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretations into an `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: narrow_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 200 210 220 230
    v128.const i32x4 300 310 320 330

    i16x8.narrow_i32x4_s
    i16x8.extract_lane_s 7
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
i16x8.narrow_i32x4_s
```

- `i16x8.narrow_i32x4_s`
  - : The `i16x8.narrow_i32x4_s` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i32x4` value interpretation.
- `input2`
  - : The second input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `i16x8` value interpretation.

### Binary encoding

| Instruction            | Binary format  | Example text => binary                     |
| ---------------------- | -------------- | ------------------------------------------ |
| `i16x8.narrow_i32x4_s` | `0xfd 133:u32` | `i16x8.narrow_i32x4_s` => `0xfd 0x85 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
