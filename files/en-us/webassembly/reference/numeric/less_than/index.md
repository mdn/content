---
title: Less than
slug: WebAssembly/Reference/Numeric/Less_than
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`lt`** instructions, short for _less than_, check if a number is less than another number. If the first number is less than the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate less than instructions for signed (**`lt_s`**) and unsigned (**`lt_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/lt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is less then '2'
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
