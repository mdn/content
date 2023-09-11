---
title: Multiplication
slug: WebAssembly/Reference/Numeric/Multiplication
---

{{WebAssemblySidebar}}

The **`mul`** instructions, short for _multiplication_, are used for multiplying one number by another number, similar to the **`*`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/mul.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; multiply one number by the other
i32.mul

;; the top item on the stack will now be 30 (10 * 3 = 30)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.mul`   | `0x6c`        |
| `i64.mul`   | `0x7e`        |
| `f32.mul`   | `0x94`        |
| `f64.mul`   | `0xa2`        |
