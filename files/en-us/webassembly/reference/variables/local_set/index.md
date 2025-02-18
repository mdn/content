---
title: Local set
slug: WebAssembly/Reference/Variables/Local_set
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`local.set`** instruction sets the values of a local variable.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val
local.set $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.set` | `0x21`        |
