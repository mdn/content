---
title: Ceil
slug: WebAssembly/Reference/Numeric/Ceil
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ceil`** instructions, are used for getting the value of a number rounded up to the next integer.

{{EmbedInteractiveExample("pages/wat/ceil.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; round up
f32.ceil

;; the top item on the stack will now be 3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.ceil`  | `0x8d`        |
| `f64.ceil`  | `0x9b`        |
