---
title: "extend_high_i16x8_s: Wasm SIMD conversion instruction"
short-title: extend_high_i16x8_s
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.extend_high_i16x8_s
sidebar: webassemblysidebar
---

The **`extend_high_i16x8_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts lanes 4–7 of a signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretation into an `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: extend_high_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 200 210 220 230 240 250 260 270

    i32x4.extend_high_i16x8_s
    i32x4.extract_lane 0
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
i32x4.extend_high_i16x8_s
```

- `i32x4.extend_high_i16x8_s`
  - : The `i32x4.extend_high_i16x8_s` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i16x8` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction                 | Binary format  | Example text => binary                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extend_high_i16x8_s` | `0xfd 168:u32` | `i32x4.extend_high_i16x8_s` => `0xfd 0xa8 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
