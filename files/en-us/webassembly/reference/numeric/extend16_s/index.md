---
title: "extend16_s: Wasm numeric instruction"
short-title: extend16_s
slug: WebAssembly/Reference/Numeric/extend16_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.extend16_s
sidebar: webassemblysidebar
---

The **`extend16_s`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) [sign-extends](#description) the low 16 bits of an integer to propagate its sign throughout the entire value.

{{InteractiveExample("Wat Demo: extend16_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 0xffff
    i32.extend16_s
    call $log

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

In this example, `i32.const 0xffff` pushes the value `0xffff` (`65535`) onto the stack. This value represents `-1` when read as a signed 16-bit number; `i32.extend16_s` sign-extends it to `0xffffffff` — which is `-1` represented as a full 32-bit signed integer.

## WAT syntax

```plain
value_type.extend16_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `extend16_s`:
    - [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- `extend16_s`
  - : The `extend16_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Immediates

None.

### Operand stack

```plain
[input: i32] -> [output: i32]
[input: i64] -> [output: i64]
```

- `input`
  - : The input `i32` or `i64` integer.
- `output`
  - : The output `i32` or `i64` integer.

### Binary encoding

| Instruction      | Binary format | Example text => binary     |
| ---------------- | ------------- | -------------------------- |
| `i32.extend16_s` | `0xc1`        | `i32.extend16_s` => `0xc1` |
| `i64.extend16_s` | `0xc3`        | `i64.extend16_s` => `0xc3` |

## Description

Sign extension is useful because Wasm integers are a fixed width (32- or 64-bit), but you often want to work with smaller values — like an i8 or i16 — stored inside them. If you zero-pad a negative small value to fill the rest of the bits, you get the wrong number: the bit pattern that means `-1` represented as a 16-bit value, for example, no longer represents `-1` once you've zero-padded it.

The `extend16_s` instruction fixes this by taking the low 16 bits of the value, treating them as a signed 16-bit integer, and copying the sign bit (bit 15) up through all the remaining bits of the `i32` or `i64`.

This is useful whenever you've loaded or produced an 16-bit value (say, from a two-byte value in memory) and need to use it correctly in arithmetic at the full 32- or 64-bit width.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extend8_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend32_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend32_s)
