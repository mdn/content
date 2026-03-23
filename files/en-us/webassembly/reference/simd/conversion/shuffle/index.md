---
title: "shuffle: Wasm SIMD conversion instruction"
short-title: shuffle
slug: WebAssembly/Reference/SIMD/conversion/shuffle
page-type: webassembly-instruction
browser-compat: webassembly.simd.shuffle
sidebar: webassemblysidebar
---

The **`shuffle`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) returns a new [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value with its lane values selected from two input `v128` values, determined by provided index values.

{{InteractiveExample("Wat Demo: shuffle", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 56 15 25 29 92 45 36 4 78 12 34 25 72 82
    v128.const i8x16 0 80 5 7 3 5 9 2 4 6 1 7 0 3 5 1
    i8x16.shuffle 0 17 2 3 8 9 10 11 31 30 28 27 16 17 18 19

    i8x16.extract_lane_u 14
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, we extract and log the value at index position 14 of the `shuffle` instruction output value. This will be `5`, because the shuffle instruction has selected the value at index position 3 of the second `v128` input (represented by the index value `18`) to be put at index position 14 of the `output`.

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
  - : 16 integers in the range `0` to `31` inclusive, representing the indices of the values to take from the two input values. Values of `0` to `15` represent the 16 indices of the first input value, and values of `16` to `31` represent the 16 indices of the second input value.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i8x16` value interpretation.
- `input2`
  - : The second input `v128` `i8x16` value interpretation.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction     | Binary format             | Example text => binary                                                                                                                                    |
| --------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `i8x16.shuffle` | `0xfd 13:u32 l:laneidx¹⁶` | `i8x16.shuffle 0 17 2 3 8 9 10 11 31 30 28 27 16 17 18 19` => `0xfd 0x0d 0x00 0x11 0x02 0x03 0x08 0x09 0x0a 0x0b 0x1f 0x1e 0x1c 0x1b 0x10 0x11 0x12 0x13` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
