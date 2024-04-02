---
title: abs
slug: WebAssembly/Reference/Numeric/abs
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`abs`** [numeric](/en-US/docs/WebAssembly/Reference/Numeric) WebAssembly text-format instruction, short for _absolute_, is used to get the absolute value of an `f32` or `f64` number on the stack. That is, it returns x if x is positive, and the negation of x if x is negative.

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
