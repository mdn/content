---
title: Nearest
slug: WebAssembly/Reference/Numeric/Nearest
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`nearest`** instructions, are used for getting the value of a number rounded to the nearest integer.

{{EmbedInteractiveExample("pages/wat/nearest.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round to the nearest integer
f32.nearest

;; the top item on the stack will now be -3
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `f32.nearest` | `0x90`        |
| `f64.nearest` | `0x9e`        |
