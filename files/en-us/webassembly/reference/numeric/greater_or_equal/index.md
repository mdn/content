---
title: Greater or equal
slug: WebAssembly/Reference/Numeric/Greater_or_equal
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Comparison
---
{{WebAssemblySidebar}}

The **`ge`** instructions, short for _greater or equal_, check if a number is greater than or equal to another number. If the first number is greater than or equal to the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate greater or equal instructions for signed (**`ge_s`**) and unsigned (**`ge_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/ge.html", "tabbed-taller")}}

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
| `i32.gt_s`  | `0x4e`        |
| `i32.gt_u`  | `0x4f`        |
| `i64.gt_s`  | `0x59`        |
| `i64.gt_u`  | `0x5a`        |
| `f32.gt`    | `0x60`        |
| `f64.gt`    | `0x66`        |
