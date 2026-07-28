---
title: "extend32_s: Wasm numeric instruction"
short-title: extend32_s
slug: WebAssembly/Reference/Numeric/extend32_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.extend32_s
sidebar: webassemblysidebar
---

The **`extend32_s`** [numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) [sign-extends](/en-US/docs/WebAssembly/Reference/Numeric/extend8_s#description) the low 32 bits of a 64-bit integer to propagate its sign throughout the entire value.

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

## Syntax

```plain
i64.extend32_s
```

- `i64.extend32_s`
  - : The `i64.extend32_s` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `i64` integer.
- `output`
  - : The output `i64` integer.

### Binary encoding

| Instruction      | Binary format | Example text => binary     |
| ---------------- | ------------- | -------------------------- |
| `i64.extend32_s` | `0xc4`        | `i64.extend32_s` => `0xc4` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extend8_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend8_s)
- [`extend16_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend16_s)
