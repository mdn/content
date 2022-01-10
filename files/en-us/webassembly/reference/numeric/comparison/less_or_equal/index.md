---
title: Less or equal
slug: WebAssembly/Reference/Numeric/Comparison/Less_or_equal
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Comparison
---
{{WebAssemblySidebar}}

The **`le`** instructions, short for *less or equal*, check if a number is less than or equal to another number. If the first number is less than or equal to the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate less or equal instructions for signed (**`le_s`**) and unsigned (**`le_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/le.html")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less then or equal to '2'
i32.le_u

;; if $num is less than or equal to the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.le_s`  | `0x4a`        |
| `i32.le_u`  | `0x4d`        |
| `i64.le_s`  | `0x55`        |
| `i64.le_u`  | `0x58`        |
| `f32.le`    | `0x5f`        |
| `f64.le`    | `0x65`        |
