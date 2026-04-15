---
title: "extend_high_i32x4_s: Wasm SIMD conversion instruction"
short-title: extend_high_i32x4_s
slug: WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.extend_high_i32x4_s
sidebar: webassemblysidebar
---

The **`extend_high_i32x4_s`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts lanes 2–3 of a signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretation into an `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: extend_high_i32x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 2090 2091 2092 2093

    i64x2.extend_high_i32x4_s
    i64x2.extract_lane 0
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
i64x2.extend_high_i32x4_s
```

- `i64x2.extend_high_i32x4_s`
  - : The `i64x2.extend_high_i32x4_s` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `i64x2` value interpretation.

### Binary encoding

| Instruction                 | Binary format  | Example text => binary                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extend_high_i32x4_s` | `0xfd 200:u32` | `i64x2.extend_high_i32x4_s` => `0xfd 0xc8 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
