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

### Opcodes

| Instruction  | Binary opcode              | Example text => binary                                                                                                      |
| ------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `i32.const`  | `𝟶𝚡𝟺𝟷  𝑖:𝚒𝟹𝟸`              | `i32.const 2` => `0x41 0x02`                                                                                                |
| `i64.const`  | `𝟶𝚡𝟺𝟸  𝑖:𝚒𝟼𝟺`              | `i64.const 1` => `0x42 0x01`                                                                                                |
| `f32.const`  | `𝟶𝚡𝟺𝟹  𝑝:𝚏𝟹𝟸`              | `f32.const 2` => `0x43 0x02`                                                                                                |
| `f64.const`  | `𝟶𝚡𝟺𝟺  𝑝:𝚏𝟼𝟺`              | `f64.const 1` => `0x44 0x01`                                                                                                |
| `v128.const` | `𝟶𝚡𝙵𝙳  12:𝚞𝟹𝟸  (𝑏:𝚋𝚢𝚝𝚎)¹⁶` | `v128.const f32x4 0x9 0xa 0xb 0xc` => `0xfd 0x1b 0x9 0xa 0xb 0xc` (EDITORIAL: I DON'T THINK THIS IS RIGHT, CAN YOU ADVISE?) |
