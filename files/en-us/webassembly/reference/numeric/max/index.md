---
title: Max
slug: WebAssembly/Reference/Numeric/Max
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Something
---
{{WebAssemblySidebar}}

The **`max`** instructions, are used for getting the higher of two numbers.

{{EmbedInteractiveExample("pages/wat/max.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get higher number
f32.max

;; the top item on the stack will now be 10
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.max`   | `0x97`        |
| `f64.max`   | `0xa5`        |
