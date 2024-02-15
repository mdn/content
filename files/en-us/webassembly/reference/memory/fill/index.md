---
title: Fill
slug: WebAssembly/Reference/Memory/Fill
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`fill`** instruction sets all bytes in a memory region to a given byte.

The **`fill`** instruction does not return a value. If the memory region indicated is out of bounds this instruction will trap.

## Syntax

```wasm
;; The pointer to the region to update
i32.const 200
;; The value to set each byte to (must be < 256)
i32.const 255
;; The number of bytes to update
i32.const 100

;; Update the target region
memory.fill
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.fill` | `0xFC 0x0b`   |
