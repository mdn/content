---
title: "add128: Wasm numeric instruction"
short-title: add128
slug: WebAssembly/Reference/Numeric/add128
page-type: webassembly-instruction
browser-compat: webassembly.instructions.add128
sidebar: webassemblysidebar
---

The **`add128`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) adds two 128-bit integers, represented by four 64-bit integers.

{{InteractiveExample("Wat Demo: add128", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 123456789012345
    i64.const 123456789070
    i64.const 98765432101
    i64.const 9876543210123
    i64.add128
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
i64.add128 <input1> <input2> <input3> <input4> <output1> <output2>
```

- `i64.add128`
  - : The `i64.add128` instruction.

### Immediates

None.

### Operand stack

```plain
[input1:i64 input2:i64 input3:i64 input4:i64] -> [output1:i64 output2:i64]
```

- `input1`
  - : An [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64) representing the low 64 bits of the left-hand-side 128-bit integer.
- `input2`
  - : An `i64` representing the high 64 bits of the left-hand-side 128-bit integer.
- `input3`
  - : An `i64` representing the low 64 bits of the right-hand-side 128-bit integer.
- `input4`
  - : An `i64` representing the high 64 bits of the right-hand-side 128-bit integer.
- `output1`
  - : An `i64` representing the low 64 bits of the result.
- `output2`
  - : An `i64` representing the high 64 bits of the result.

### Binary encoding

| Instruction  | Binary format | Example text => binary      |
| ------------ | ------------- | --------------------------- |
| `i64.add128` | `0xfc 19:u32` | `i64.add128` => `0xfc 0x13` |

## Description

The `add128` instruction provides a mechanism by which two 128-bit integers — represented by four `i64` values — can be added together, with the result represented by two `i64` values. This so-called wide arithmetic is useful in any situation where larger-than-64-bit numbers are being used in source languages with Wasm as a compile target, for example cryptographic algorithms.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`mul_wide_s`](/en-US/docs/WebAssembly/Reference/Numeric/mul_wide_s)
- [`mul_wide_u`](/en-US/docs/WebAssembly/Reference/Numeric/mul_wide_u)
- [`sub128`](/en-US/docs/WebAssembly/Reference/Numeric/sub128)
