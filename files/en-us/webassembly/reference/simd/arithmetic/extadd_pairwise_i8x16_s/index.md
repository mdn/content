---
title: "extadd_pairwise_i8x16_s: Wasm SIMD arithmetic instruction"
short-title: extadd_pairwise_i8x16_s
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i8x16_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.extadd_pairwise_i8x16_s
sidebar: webassemblysidebar
---

The **`extadd_pairwise_i8x16_s`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) adds each adjacent pair of lanes of a signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i8x16` value interpretation, outputting the results into an `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: extadd_pairwise_i8x16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 4 2 4 2 4 2 4 2 4 2 4 2 4 2 4

    i16x8.extadd_pairwise_i8x16_s
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, each adjacent pair of lanes contains the values `2` and `4`. The `extadd_pairwise_i8x16_s` instruction adds each pair together, resulting in the 8 lanes of the output `i16x8` value all containing the value `6`.

## Syntax

```plain
i16x8.extadd_pairwise_i8x16_s
```

- `i16x8.extadd_pairwise_i8x16_s`
  - : The `i16x8.extadd_pairwise_i8x16_s` instruction.

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
| `i16x8.extadd_pairwise_i8x16_s` | `0xfd 124:u32` | `i16x8.extadd_pairwise_i8x16_s` => `0xfd 0x7c` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
