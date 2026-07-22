---
title: "extend8_s: Wasm numeric instruction"
short-title: extend8_s
slug: WebAssembly/Reference/Numeric/extend8_s
page-type: webassembly-instruction
browser-compat: webassembly.instructions.extend8_s
sidebar: webassemblysidebar
---

The **`extend8_s`** instruction sign-extends the low 8 bits of an integer to propagate its sign throughout the entire value.

{{InteractiveExample("Wat Demo: extend8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 0xff
    i32.extend8_s
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
value_type.extend8_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `extend8_s`:
    - [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
    - [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- `extend8_s`
  - : The `extend8_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input integer.
- `output`
  - : The output integer.

### Binary encoding

| Instruction     | Binary format | Example text => binary    |
| --------------- | ------------- | ------------------------- |
| `i32.extend8_s` | `0xc0`        | `i32.extend8_s` => `0xc0` |
| `i64.extend8_s` | `0xc2`        | `i64.extend8_s` => `0xc2` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extend16_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend16_s)
- [`extend32_s`](/en-US/docs/WebAssembly/Reference/Numeric/extend32_s)
