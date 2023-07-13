---
title: Greater than
slug: WebAssembly/Reference/Numeric/Greater_than
---

{{WebAssemblySidebar}}

The **`gt`** instructions, short for _greater than_, check if a number is greater than another number. If the first number is greater than the second number equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

The integer types have separate greater than instructions for signed (**`gt_s`**) and unsigned (**`gt_u`**) numbers.

{{EmbedInteractiveExample("pages/wat/gt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is greater than '2'
i32.gt_u

;; if $num is greater than the `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.gt_s`  | `0x4a`        |
| `i32.gt_u`  | `0x4b`        |
| `i64.gt_s`  | `0x55`        |
| `i64.gt_u`  | `0x56`        |
| `f32.gt`    | `0x5e`        |
| `f64.gt`    | `0x64`        |
