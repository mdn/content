---
title: Less than
slug: WebAssembly/Reference/Numeric/Less_than
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`lt`** instructions, short for _less than_, check if a number is less than another number. If the first number is less than the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate less than instructions for signed (**`lt_s`**) and unsigned (**`lt_u`**) numbers.

{{InteractiveExample("Wat Demo: lt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.lt_u ;; check if `10` is less than '2'
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

;; check if $num is less than '2'
i32.lt_u

;; if $num is less than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.lt_s`  | `0x48`        |
| `i32.lt_u`  | `0x49`        |
| `i64.lt_s`  | `0x53`        |
| `i64.lt_u`  | `0x54`        |
| `f32.lt`    | `0x5d`        |
| `f64.lt`    | `0x63`        |
