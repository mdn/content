---
title: "extend_low_i32x4_u: Wasm SIMD conversion instruction"
short-title: extend_low_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/extend_low_i32x4_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.extend_low_i32x4_u
sidebar: webassemblysidebar
---

The **`extend_low_i32x4_u`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts lanes 0–1 of an unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretation into an `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: extend_low_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 2090 2091 2092 2093

    i64x2.extend_low_i32x4_u
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
i64x2.extend_low_i32x4_u
```

- `i64x2.extend_low_i32x4_u`
  - : The `i64x2.extend_low_i32x4_u` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `i64x2` value interpretation.

### Binary encoding

| Instruction                | Binary format  | Example text => binary                         |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i64x2.extend_low_i32x4_u` | `0xfd 201:u32` | `i64x2.extend_low_i32x4_u` => `0xfd 0xc9 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
