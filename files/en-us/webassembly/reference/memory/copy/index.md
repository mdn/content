---
title: Copy
slug: WebAssembly/Reference/Memory/Copy
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`copy`** instruction copies data from one region of memory to another.

The **`copy`** instruction does not return a value. If either the source or destination range is out of bounds, the instruction traps.

## Syntax

```wasm
;; Destination address to copy to
i32.const 50
;; Source address to copy from
i32.const 100
;; Number of bytes to copy
i32.const 25

;; Copy data from [100, 125] to [50, 75]
memory.copy

;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.copy` | `0xFC 0x0a`   |
