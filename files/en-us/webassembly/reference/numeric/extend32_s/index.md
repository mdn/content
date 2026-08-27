---
title: "extend32_s: Wasm numeric instruction"
short-title: extend32_s
slug: WebAssembly/Reference/Numeric/extend32_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.extend32_s
sidebar: webassemblysidebar
---

The **`extend32_s`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) [sign-extends](#description) the low 32 bits of a 64-bit integer to propagate its sign throughout the entire value.

{{InteractiveExample("Wat Demo: extend32_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i64.const 0xffffffff
    i64.extend32_s
    call $log

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

In this example, `i64.const 0xffffffff` pushes the value `0xffffffff` (`4294967295`) onto the stack. This value represents `-1` when read as a signed 32-bit number; `i64.extend32_s` sign-extends it to `0xffffffffffffffff` — which is `-1` represented as a full 64-bit signed integer.

## WAT syntax

```plain
i64.extend32_s
```

- `i64.extend32_s`
  - : The `i64.extend32_s` instruction.

### Immediates

None.

### Operand stack

```plain
[input: i64] -> [output: i64]
```

- `input`
  - : The input `i64` integer.
- `output`
  - : The output `i64` integer.

### Binary encoding

| Instruction      | Binary format | Example text => binary     |
| ---------------- | ------------- | -------------------------- |
| `i64.extend32_s` | `0xc4`        | `i64.extend32_s` => `0xc4` |

## Description

Sign extension is useful because Wasm integers are a fixed width (32- or 64-bit), but you often want to work with smaller values — like an i8, i16, or i32 — stored inside them. If you zero-pad a negative small value to fill the rest of the bits, you get the wrong number: the bit pattern that means `-1` represented as a 32-bit value, for example, no longer represents `-1` once you've zero-padded it to 64 bits.

The `extend32_s` instruction fixes this by taking the low 32 bits of the value, treating them as a signed 32-bit integer, and copying the sign bit (bit 31) up through all the remaining bits of the `i64`.

This is useful whenever you've loaded or produced an 32-bit value (say, from a four-byte value in memory) and need to use it correctly in arithmetic at the full 64-bit width.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extend8_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend16_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend16_s)
