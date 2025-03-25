---
title: Less or equal
slug: WebAssembly/Reference/Numeric/Less_or_equal
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`le`** instructions, short for _less or equal_, check if a number is less than or equal to another number. If the first number is less than or equal to the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate less or equal instructions for signed (**`le_s`**) and unsigned (**`le_u`**) numbers.

{{InteractiveExample("Wat Demo: le", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.le_u ;; check if `10` is  less than or equal to '2'
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

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less than or equal to '2'
i32.le_u

;; if $num is less than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.le_s`  | `0x4C`        |
| `i32.le_u`  | `0x4D`        |
| `i64.le_s`  | `0x57`        |
| `i64.le_u`  | `0x58`        |
| `f32.le`    | `0x5F`        |
| `f64.le`    | `0x65`        |
