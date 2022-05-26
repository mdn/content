---
title: Local tee
slug: WebAssembly/Reference/Variables/Local_tee
tags:
  - WebAssembly
  - wasm
  - Reference
  - Variable
---
{{WebAssemblySidebar}}

The **`local.tee`** instruction sets the value of a local variable and loads the value onto the stack.

The instruction is named after the T-splitter used in plumbing.

{{EmbedInteractiveExample("pages/wat/local_tee.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val and load it on the stack
local.tee $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.tee` | `0x22`        |
