---
title: "dot_i16x8_s: Wasm SIMD arithmetic instruction"
short-title: dot_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/dot_i16x8_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.dot_i16x8_s
sidebar: webassemblysidebar
---

The **`dot_i16x8_s`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) performs a dot product calculation on two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretations. The corresponding lanes of the input values are multiplied together, then each adjacent pair of products are added together. The four results of these additions are output as an `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: dot_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i32x4.dot_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, the corresponding lanes of each input are multiplied together to create eight intermediate values:

```plain
input1   4 6 16 8 23 65 82 9
input2   0 25 2 30 2 34 45 80
product  0 150 32 240 46 2210 3690 720
```

Each adjacent pair of products is then added together, and output onto the stack as an `i32x4` containing the following values:

```plain
150 272 2256 4410
```

## Syntax

```plain
i32x4.dot_i16x8_s
```

- `i32x4.dot_i16x8_s`
  - : The `i32x4.dot_i16x8_s` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i16x8` value interpretation.
- `input2`
  - : The second input `v128` `i16x8` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction         | Binary format  | Example text => binary                  |
| ------------------- | -------------- | --------------------------------------- |
| `i32x4.dot_i16x8_s` | `0xfd 186:u32` | `i32x4.dot_i16x8_s` => `0xfd 0xba 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
