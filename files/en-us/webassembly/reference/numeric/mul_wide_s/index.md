---
title: "mul_wide_s: Wasm numeric instruction"
short-title: mul_wide_s
slug: WebAssembly/Reference/Numeric/mul_wide_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.mul_wide_s
sidebar: webassemblysidebar
---

The **`mul_wide_s`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) multiplies two signed 64-bit integers to produce a signed 128-bit result represented by two 64-bit integers.

{{InteractiveExample("Wat Demo: mul_wide_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.mul_wide_s
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
i64.mul_wide_s
```

- `i64.mul_wide_s`
  - : The `i64.mul_wide_s` instruction.

### Immediates

None.

### Operand stack

```plain
[low_input:i64 high_input:i64] -> [low_output:i64 high_output:i64]
```

- `low_input`
  - : The first [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64) input.
- `high_input`
  - : The second `i64` input.
- `low_output`
  - : An `i64` representing the low 64 bits of the result.
- `high_output`
  - : An `i64` representing the high 64 bits of the result.

### Binary encoding

| Instruction      | Binary format | Example text => binary          |
| ---------------- | ------------- | ------------------------------- |
| `i64.mul_wide_s` | `0xfc 21:u32` | `i64.mul_wide_s` => `0xfc 0x15` |

## Description

The `mul_wide_s` instruction multiplies two signed `i64` values together to produce a signed 128-bit result represented by a pair of `i64` values. Such operations are termed **wide arithmetic**, which is useful in any situation where larger-than-64-bit numbers are being used in source languages with Wasm as a compile target, for example cryptographic algorithms.

More importantly, it also allows engines to generate more efficient machine code for these operations than is possible with `i64` arithmetic operations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`add128`](/en-US/docs/WebAssembly/Reference/Numeric/add128)
- [`sub128`](/en-US/docs/WebAssembly/Reference/Numeric/sub128)
- [`mul_wide_u`](/en-US/docs/WebAssembly/Reference/Numeric/mul_wide_u)
