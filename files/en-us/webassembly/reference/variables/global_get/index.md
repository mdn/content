---
title: Global get
slug: WebAssembly/Reference/Variables/Global_get
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`global.get`** instruction loads the value of a global variable onto the stack.

{{EmbedInteractiveExample("pages/wat/global_get.html", "tabbed-standard")}}

## Syntax

```wasm
;; load the value of a global variable onto the stack
global.get $val
```

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `global.get` | `0x23`        |
