---
title: Subtraction
slug: WebAssembly/Reference/Numeric/Subtraction
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Arithmetic
---
{{WebAssemblySidebar}}

The **`sub`** instructions, short for _subtraction_, are used for subtracting one number from another number, similar to the **`-`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/sub.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; subtract one number from the other
i32.sub

;; the top item on the stack will now be 7 (10 - 3 = 7)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.sub`   | `0x6b`        |
| `i64.sub`   | `0x7d`        |
| `f32.sub`   | `0x93`        |
| `f64.sub`   | `0xa1`        |
