---
title: Grow
slug: WebAssembly/Reference/Memory/Grow
tags:
  - WebAssembly
  - wasm
  - Reference
  - Memory
---
{{WebAssemblySidebar}}

The **`grow`** instruction, increases the size of the memory instance by a specified number of pages, each page is sized 64KiB.

The **`grow`** instruction returns **`1`** if the operation was successful, and returns **`-1`** if the operation failed.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number of memory pages to grow the memory by
i32.const 3

;; grow the memory by 3 pages
memory.grow

;; the top item on the stack will now either be `1` (success) or `-1` (failure)
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.grow` | `0x40`        |
