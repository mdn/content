---
title: "sub128: Wasm numeric instruction"
short-title: sub128
slug: WebAssembly/Reference/Numeric/sub128
page-type: webassembly-instruction
browser-compat: webassembly.instructions.sub128
sidebar: webassemblysidebar
---

The **`sub128`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) subtracts one 128-bit integer — represented by two 64-bit integers — from another to produce a 128-bit result represented by two 64-bit integers.

{{InteractiveExample("Wat Demo: sub128", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.const 98765432101
    i64.const 9876543210123
    i64.sub128
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
i64.sub128
```

- `i64.sub128`
  - : The `i64.sub128` instruction.

### Immediates

None.

### Operand stack

```plain
[low_left_input:i64 high_left_input:i64 low_right_input:i64 high_right_input:i64] -> [low_output:i64 high_output:i64]
```

- `low_left_input`
  - : An [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64) representing the low 64 bits of the left-hand-side 128-bit integer.
- `high_left_input`
  - : An `i64` representing the high 64 bits of the left-hand-side 128-bit integer.
- `low_right_input`
  - : An `i64` representing the low 64 bits of the right-hand-side 128-bit integer.
- `high_right_input`
  - : An `i64` representing the high 64 bits of the right-hand-side 128-bit integer.
- `low_output`
  - : An `i64` representing the low 64 bits of the result.
- `high_output`
  - : An `i64` representing the high 64 bits of the result.

### Binary encoding

| Instruction  | Binary format | Example text => binary      |
| ------------ | ------------- | --------------------------- |
| `i64.sub128` | `0xfc 20:u32` | `i64.sub128` => `0xfc 0x14` |

## Description

The `sub128` instruction subtracts one 128-bit integer — represented by two `i64` values — from another to produce a 128-bit result represented by two `i64` values. Such operations are termed **wide arithmetic**, which is useful in any situation where larger-than-64-bit numbers are being used in source languages with Wasm as a compile target, for example cryptographic algorithms.

More importantly, it also allows engines to generate more efficient machine code for these operations than is possible with `i64` arithmetic operations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`add128`](/en-US/docs/WebAssembly/Reference/Numeric/add128)
- [`mul_wide_s`](/en-US/docs/WebAssembly/Reference/Numeric/mul_wide_s)
- [`mul_wide_u`](/en-US/docs/WebAssembly/Reference/Numeric/mul_wide_u)
