---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`drop`** instruction, pops a value from the stack, and discards it.

{{EmbedInteractiveExample("pages/wat/drop.html", "tabbed-taller")}}

## Syntax

```wasm
;; push multiple values onto the stack
i32.const 1
i32.const 2
i32.const 3

;; drop the top item from the stack (`3`)
drop

;; the top item on the stack will now be `2`
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `drop`      | `0x1a`        |
