---
title: "swizzle: Wasm SIMD conversion instruction"
short-title: swizzle
slug: WebAssembly/Reference/SIMD/conversion/swizzle
page-type: webassembly-instruction
browser-compat: webassembly.simd.swizzle
sidebar: webassemblysidebar
---

The **`swizzle`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) returns a new [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value with its lane values selected from an input `v128` value, determined by indices provided in a second input `v128`.

{{InteractiveExample("Wat Demo: swizzle", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 10 23 56 15 25 29 92 45 36 4 78 12 34 25 72 82
    v128.const i8x16 0 2 5 7 3 5 9 2 4 6 1 7 0 3 5 1
    i8x16.swizzle

    i8x16.extract_lane_u 6
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, we extract and log the value at index position 6 of the `swizzle` instruction output value. This will be `4`, because the swizzle instruction has selected the value at index position 9 of the input value to be put at index position 6 of the output value.

## Syntax

```plain
value_type.swizzle
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `swizzle`:
    - `i8x16`
- `swizzle`
  - : The `swizzle` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input, indices] -> [output]
```

- `input`
  - : The input `v128` `i8x16` value interpretation.
- `indices`
  - : The `v128` value containing the indices you want to use to select which values should be taken from the input value and included in the output. In each case, the index number represents the index position to take from the input value, and the position of the index represents the position it should appear in the `output` value.

    These values must be between `0` and `15`, inclusive. For indices outside this range, the resulting lanes will be initialized to `0`.

- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction     | Binary format | Example text => binary         |
| --------------- | ------------- | ------------------------------ |
| `i8x16.swizzle` | `0xfd 14:u32` | `i8x16.swizzle` => `0xfd 0x0e` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
