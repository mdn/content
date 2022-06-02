---
title: Size
slug: WebAssembly/Reference/Memory/Size
tags:
  - WebAssembly
  - wasm
  - Reference
  - Memory
---
{{WebAssemblySidebar}}

The **`size`** instruction, returns the amount of pages the memory instance currently has, each page is sized 64KiB.

{{EmbedInteractiveExample("pages/wat/size.html", "tabbed-standard")}}

## Syntax

```wasm
;; get the amount of pages the memory has
memory.size
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.size` | `0x3f`        |
