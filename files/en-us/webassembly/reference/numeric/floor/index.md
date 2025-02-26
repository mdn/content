---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`floor`** instructions, are used for getting the value of a number rounded down to the next integer.

**`floor`** differs from **`trunc`** when used on negative numbers, **`floor`** will round down in those cases while **`trunc`** will round up.

{{EmbedInteractiveExample("pages/wat/floor.html", "tabbed-standard")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.floor` | `0x8e`        |
| `f64.floor` | `0x9c`        |
