---
title: Greater or equal
slug: WebAssembly/Reference/Numeric/Greater_or_equal
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ge`** instructions, short for _greater or equal_, check if a number is greater than or equal to another number. If the first number is greater than or equal to the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate greater or equal instructions for signed (**`ge_s`**) and unsigned (**`ge_u`**) numbers.

{{InteractiveExample("Wat Demo: ge", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.ge_u ;; check if `10` is greater than or equal to '2'
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: true
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

;; check if $num is greater than or equal to '2'
i32.ge_u

;; if $num is greater than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ge_s`  | `0x4e`        |
| `i32.ge_u`  | `0x4f`        |
| `i64.ge_s`  | `0x59`        |
| `i64.ge_u`  | `0x5a`        |
| `f32.ge`    | `0x60`        |
| `f64.ge`    | `0x66`        |
