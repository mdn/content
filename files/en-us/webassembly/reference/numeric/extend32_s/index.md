---
title: "extend32_s: Wasm numeric instruction"
short-title: extend32_s
slug: WebAssembly/Reference/Numeric/extend32_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.extend32_s
sidebar: webassemblysidebar
---

The **`extend32_s`** instruction sign-extends the low 32 bits of a 64-bit integer to propagate its sign throughout the entire value.

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
  - : The input integer.
- `output`
  - : The output integer.

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
