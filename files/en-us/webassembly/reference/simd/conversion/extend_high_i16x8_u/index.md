---
title: "extend_high_i16x8_u: Wasm SIMD conversion instruction"
short-title: extend_high_i16x8_u
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.extend_high_i16x8_u
sidebar: webassemblysidebar
---

The **`extend_high_i16x8_u`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts lanes 4–7 of an unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretation into an `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: extend_high_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 200 210 220 230 240 250 260 270

    i32x4.extend_high_i16x8_u
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
i32x4.extend_high_i16x8_u
```

- `i32x4.extend_high_i16x8_u`
  - : The `i32x4.extend_high_i16x8_u` instruction.

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
| `i32x4.extend_high_i16x8_u` | `0xfd 170:u32` | `i32x4.extend_high_i16x8_u` => `0xfd 0xaa 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
