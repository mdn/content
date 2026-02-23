---
title: "const: Wasm text instruction"
short-title: const
slug: WebAssembly/Reference/Numeric/const
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`const`** [WebAssembly numeric instruction](/en-US/docs/WebAssembly/Reference/Numeric) is used to declare numbers.

{{InteractiveExample("Wat Demo: const", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    i32.const 10 ;; load a number onto the stack
    call $log ;; log the number

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
value_type.const
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `const`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - `v128`
- `const`
  - : The `const` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[value] -> []
```

- `value`
  - : The value being pushed onto the stack:
    - For a non-SIMD `value_type`, this will be a basic numeric value such as `3` or `3.5`.
    - For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `value_type`, this will be a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation followed by a SIMD value, for example `f32x4 0x9 0xa 0xb 0xc`.

### Traps

?

### Opcodes

| Instruction  | Binary opcode                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------- |
| `i32.const`  | `0x41` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `i64.const`  | `0x42` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `f32.const`  | `0x43` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `f64.const`  | `0x44` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `v128.const` | `0x0c` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
