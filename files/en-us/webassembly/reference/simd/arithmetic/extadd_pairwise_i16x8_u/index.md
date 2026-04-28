---
title: "extadd_pairwise_i16x8_u: Wasm SIMD arithmetic instruction"
short-title: extadd_pairwise_i16x8_u
slug: WebAssembly/Reference/SIMD/arithmetic/extadd_pairwise_i16x8_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.extadd_pairwise_i16x8_u
sidebar: webassemblysidebar
---

The **`extadd_pairwise_i16x8_u`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) adds each adjacent pair of lanes of an unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretation, outputting the results into an `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: extadd_pairwise_i16x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 20 40 20 40 20 40 20 40

    i32x4.extadd_pairwise_i16x8_u
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, each adjacent pair of lanes contains the values `20` and `40`. The `extadd_pairwise_i16x8_u` instruction adds each pair together, resulting in the 4 lanes of the output `i32x4` value all containing the value `60`.

## Syntax

```plain
i32x4.extadd_pairwise_i16x8_u
```

- `i32x4.extadd_pairwise_i16x8_u`
  - : The `i32x4.extadd_pairwise_i16x8_u` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i16x8` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction                     | Binary format  | Example text => binary                         |
| ------------------------------- | -------------- | ---------------------------------------------- |
| `i32x4.extadd_pairwise_i16x8_u` | `0xfd 127:u32` | `i32x4.extadd_pairwise_i16x8_u` => `0xfd 0x7f` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
