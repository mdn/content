---
title: "extend16_s: Wasm numeric instruction"
short-title: extend16_s
slug: WebAssembly/Reference/Numeric/extend16_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.extend16_s
sidebar: webassemblysidebar
---

The **`extend16_s`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) [sign-extends](/en-US/docs/WebAssembly/Reference/Numeric/extend8_s#description) the low 16 bits of an integer to propagate its sign throughout the entire value.

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

## Syntax

```plain
value_type.extend16_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `extend16_s`:
    - [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- `extend16_s`
  - : The `extend16_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extend8_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend32_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend32_s)
