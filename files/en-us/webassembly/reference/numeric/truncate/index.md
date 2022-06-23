---
title: Truncate
slug: WebAssembly/Reference/Numeric/Truncate
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Something
---
{{WebAssemblySidebar}}

The **`trunc`** instructions, short for *truncate*, are used for getting the value of a number without it's fractional part.

**`trunc`** differs from **`floor`** when used on negative numbers, **`floor`** will round down in those cases while **`trunc`** will round up.

{{EmbedInteractiveExample("pages/wat/trunc.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; discard the fractional part (.7)
f32.trunc

;; the top item on the stack will now be 2
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.trunc` | `0x8f`        |
| `f64.trunc` | `0x9d`        |
