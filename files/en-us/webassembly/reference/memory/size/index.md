---
title: memory.size
slug: WebAssembly/Reference/Memory/size
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`memory.size`** instruction, returns the size of the memory instance, in 64KiB pages.

{{EmbedInteractiveExample("pages/wat/size.html", "tabbed-standard")}}

## Syntax

```wasm
;; get the size of the memory, in pages
memory.size
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.size` | `0x3f`        |
