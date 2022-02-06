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

The **`local.tee`** instruction, sets the value of local variable and keep the value on the stack.

The instruction is named after the T-splitter used in plumbing.

{{EmbedInteractiveExample("pages/wat/local_tee.html")}}

## Syntax

```wasm
;; load the value of a local variable onto the stack
local.get $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.get` | `0x20`        |
