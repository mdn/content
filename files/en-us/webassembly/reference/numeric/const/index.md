---
title: Const
slug: WebAssembly/Reference/Numeric/Const
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`const`** instructions, are used to declare numbers.

{{EmbedInteractiveExample("pages/wat/const.html", "tabbed-standard")}}

## Syntax

```wasm
;; push `5` onto the stack
i32.const 5
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.const` | `0x41`        |
| `i64.const` | `0x42`        |
| `f32.const` | `0x43`        |
| `f64.const` | `0x44`        |
