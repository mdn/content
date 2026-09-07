---
title: "mul_wide_u: Wasm numeric instruction"
short-title: mul_wide_u
slug: WebAssembly/Reference/Numeric/mul_wide_u
page-type: webassembly-instruction
browser-compat: webassembly.instructions.mul_wide_u
sidebar: webassemblysidebar
---

The **`mul_wide_u`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) multiplies two unsigned 64-bit integers to produce an unsigned 128-bit result represented by two 64-bit integers.

{{InteractiveExample("Wat Demo: mul_wide_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.mul_wide_u
    call $log ;; log high 64 bits
    call $log ;; log low 64 bits
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## WAT syntax

```plain
i64.mul_wide_u
```

- `i64.mul_wide_u`
  - : The `i64.mul_wide_u` instruction.

### Immediates

None.

### Operand stack

```plain
[input1:i64 input2:i64] -> [low_output:i64 high_output:i64]
```

- `input1`
  - : The first [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64) input.
- `input2`
  - : The second `i64` input.
- `low_output`
  - : An `i64` representing the low 64 bits of the result.
- `high_output`
  - : An `i64` representing the high 64 bits of the result.

### Binary encoding

| Instruction      | Binary format | Example text => binary          |
| ---------------- | ------------- | ------------------------------- |
| `i64.mul_wide_u` | `0xfc 22:u32` | `i64.mul_wide_u` => `0xfc 0x16` |

## Description

The `mul_wide_u` instruction multiplies two unsigned `i64` values together to produce an unsigned 128-bit result represented by a pair of `i64` values.

This is one of the **wide arithmetic** operations, which are useful in situations where larger-than-64-bit numbers are being used in source languages with Wasm as a compile target. One such example is cryptographic algorithms.

These methods allow engines to generate more performant machine code for these operations than is possible with `i64` arithmetic operations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`add128`](/en-US/docs/WebAssembly/Reference/Numeric/add128)
- [`sub128`](/en-US/docs/WebAssembly/Reference/Numeric/sub128)
- [`mul_wide_s`](/en-US/docs/WebAssembly/Reference/Numeric/mul_wide_s)
