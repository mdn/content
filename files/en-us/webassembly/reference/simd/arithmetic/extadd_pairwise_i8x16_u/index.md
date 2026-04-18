---
title: "extadd_pairwise_i8x16_u: Wasm SIMD arithmetic instruction"
short-title: extadd_pairwise_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.extadd_pairwise_i8x16_u
sidebar: webassemblysidebar
---

The **`extadd_pairwise_i8x16_u`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) adds each adjacent pair of lanes of an unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i8x16` value interpretation, outputting the results into an `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: extadd_pairwise_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 2 4 2 4 2 4 2 4 2 4 2 4 2 4

    i16x8.extadd_pairwise_i8x16_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, each adjacent pair of lanes contains the values `2` and `4`. The `extadd_pairwise_i8x16_u` instruction adds each pair together, resulting in the 8 lanes of the output `i16x8` value all containing the value `6`.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_u
```

- `i16x8.extadd_pairwise_i8x16_u`
  - : The `i16x8.extadd_pairwise_i8x16_u` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i8x16` value interpretation.
- `output`
  - : The output `v128` `i16x8` value interpretation.

### Binary encoding

| Instruction                     | Binary format  | Example text => binary                         |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extadd_pairwise_i8x16_u` | `0xfd 125:u32` | `i16x8.extadd_pairwise_i8x16_u` => `0xfd 0x7d` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
