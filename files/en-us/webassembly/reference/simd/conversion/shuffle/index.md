---
title: "shuffle: Wasm SIMD conversion instruction"
short-title: shuffle
slug: WebAssembly/Reference/SIMD/conversion/shuffle
page-type: webassembly-instruction
browser-compat: webassembly.simd.shuffle
sidebar: webassemblysidebar
---

The **`shuffle`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) returns a new `v128` value with its lane values selected from two input `v128` values, determined by provided index values.

{{InteractiveExample("Wat Demo: shuffle", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 56 15 25 29 92 45 36 4 78 12 34 25 72 82
    v128.const i8x16 0 80 5 7 3 5 9 2 4 6 1 7 0 3 5 1
    i8x16.shuffle 0 17 2 3 8 9 10 11 31 30 28 27 16 17 18 19

    i8x16.extract_lane_u 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, we extract and log the value at index position 1 of the `shuffle` instruction output value. This will be `80`, because the shuffle instruction has selected the value at index position 1 of the second `v128` input (represented by the index value `17`) to be put at index position 1 of the `output`.

## Syntax

```plain
value_type.shuffle indices
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `shuffle`:
    - `i8x16`
- `shuffle`
  - : The `shuffle` instruction. Must always be included after the `value_type` and a period (`.`).
- `indices`
  - : 16 integers in the range `0` to `31` inclusive, representing the indices of the values to take from the `input1` and `input2` values. Values of `0` to `15` represent the 16 indices of the `input1` value, and values of `16` to `31` represent the 16 indices of the `input2` value.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first `v128` value interpretation you want to take values from.
- `input2`
  - : The second `v128` value interpretation you want to take values from.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction     | Binary equivalent          | Example text => binary                 |
| --------------- | -------------------------- | -------------------------------------- |
| `i8x16.shuffle` | `0xfd 31:u32 l:laneidx^16` | `i8x16.shuffle ...` => `0xfd 0x0d ...` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
