---
title: Not equal
slug: WebAssembly/Reference/Numeric/Not_equal
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Comparison
---
{{WebAssemblySidebar}}

The **`ne`** instructions, short for _not equal_, check if two numbers are not equal. If the numbers are not equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

{{EmbedInteractiveExample("pages/wat/ne.html", "tabbed-taller")}}

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is not equal to '2'
i32.ne

;; if $num is not equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ne`    | `0x47`        |
| `i64.ne`    | `0x52`        |
| `f32.ne`    | `0x5c`        |
| `f64.ne`    | `0x62`        |
