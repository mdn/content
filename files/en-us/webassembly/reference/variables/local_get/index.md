---
title: Local get
slug: WebAssembly/Reference/Variables/Local_get
---

{{WebAssemblySidebar}}

The **`local.get`** instruction loads the value of a local variable onto the stack.

{{EmbedInteractiveExample("pages/wat/local.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the value of a local variable onto the stack
local.get $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.get` | `0x20`        |
