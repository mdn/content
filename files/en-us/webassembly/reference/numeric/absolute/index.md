---
title: Absolute
slug: WebAssembly/Reference/Numeric/Absolute
---

{{WebAssemblySidebar}}

The **`abs`** instructions, short for _absolute_, are used to get the absolute value of a number. That is, it returns x if x is positive, and the negation of x if x is negative.

{{EmbedInteractiveExample("pages/wat/abs.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2

;; absolute
f32.abs

;; the top item on the stack will now be 2
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.abs`   | `0x8b`        |
| `f64.abs`   | `0x99`        |
