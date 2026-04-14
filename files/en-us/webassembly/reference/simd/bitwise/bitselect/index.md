---
title: "bitselect: Wasm SIMD bitwise instruction"
short-title: bitselect
slug: WebAssembly/Reference/SIMD/bitwise/bitselect
page-type: webassembly-instruction
browser-compat: webassembly.simd.bitselect
sidebar: webassemblysidebar
---

The **`bitselect`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) takes three [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) values as inputs — two inputs and a mask value — and returns a new `v128` value with each byte calculated using the formula `output = (input1 AND mask) OR (input2 AND NOT mask)`.

{{InteractiveExample("Wat Demo: bitselect", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    v128.const i8x16 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15
    v128.const i8x16 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
    v128.bitselect

    i8x16.extract_lane_u 15
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, we've set all input value lanes to the same value for simplicity. Walking through how the output value (`9`) is calculated, using the formula `output = (input1 AND mask) OR (input2 AND NOT mask)`:

1. The first input is `1`, which is `0 0 0 0 0 0 0 1` in binary.
2. The second input is `15`, which is `0 0 0 0 1 1 1 1` in binary.
3. The mask is `6`, which is `0 0 0 0 0 1 1 0` in binary.
4. `input1 AND mask` is calculated as follows:
   ```plain
   input1           0 0 0 0 0 0 0 1
   mask             0 0 0 0 0 1 1 0
   input1 AND mask  0 0 0 0 0 0 0 0
   ```
5. `input2 AND NOT mask` is calculated as follows:
   ```plain
   input2               0 0 0 0 1 1 1 1
   NOT mask             1 1 1 1 1 0 0 1
   input2 AND NOT mask  0 0 0 0 1 0 0 1
   ```
6. We then OR the two results from steps 4. and 5.:
   ```plain
   result1  0 0 0 0 0 0 0 0
   result2  0 0 0 0 1 0 0 1
   OR       0 0 0 0 1 0 0 1
   ```

`0 0 0 0 1 0 0 1` is the binary equivalent of `9`.

## Syntax

```plain
v128.bitselect
```

- `v128.bitselect`
  - : The `v128.bitselect` instruction.

### Type

```plain
[input1, input2, mask] -> [output]
```

- `input1`
  - : The first input `v128` value interpretation.
- `input2`
  - : The second input `v128` value interpretation.
- `mask`
  - : The mask `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction      | Binary format | Example text => binary          |
| ---------------- | ------------- | ------------------------------- |
| `v128.bitselect` | `0xfd 82:u32` | `v128.bitselect` => `0xfd 0x52` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD bitwise instructions](/en-US/docs/WebAssembly/Reference/SIMD/bitwise)
