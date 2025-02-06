---
title: Min
slug: WebAssembly/Reference/Numeric/Min
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`min`** instructions, are used for getting the lower of two numbers.

{{EmbedInteractiveExample("pages/wat/min.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get lower number
f32.min

;; the top item on the stack will now be 3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.min`   | `0x96`        |
| `f64.min`   | `0xa4`        |
