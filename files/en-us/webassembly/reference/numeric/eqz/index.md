---
title: "eqz: Wasm text instruction"
short-title: eqz
slug: WebAssembly/Reference/Numeric/eqz
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`eqz`** instruction checks if a number is equal to zero.

{{InteractiveExample("Wat Demo: eqz", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `0` onto the stack
    i32.const 0

    i32.eqz ;; check if the previous number on the stack is equal to 0
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.eqz
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `eqz`:
    - `i32`
    - `i64`
- `eqz`
  - : The `eqz` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input value.
- `output`
  - : The output value. If `input` is equal to `0`, `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack. The output values are integers.

### Binary encoding

| Instruction | Binary format | Example text => binary |
| ----------- | ------------- | ---------------------- |
| `i32.eqz`   | `0x45`        | `i32.eqz` => `0x45`    |
| `i64.eqz`   | `0x50`        | `i64.eqz` => `0x50`    |

## See also

- [`eq`](/en-US/docs/WebAssembly/Reference/Numeric/eq)
