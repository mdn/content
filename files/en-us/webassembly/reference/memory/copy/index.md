---
title: "copy: Wasm text instruction"
short-title: copy
slug: WebAssembly/Reference/Memory/Copy
page-type: webassembly-instruction
browser-compat: webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`copy`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) copies data from one region of a memory to another.

The instruction does not return a value.
If either the source or destination range is out of bounds, the instruction traps.

## Syntax

Copy within default memory

```wasm
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-function
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

Copy specified memory (if multi-memory supported)

```wasm
;; Copy data in specific memory  [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory 2)  ;; Copy memory within memory with index 2

;; Copy within memory referenced by its name
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory $memoryName) ;; Copy memory with memory named "$memoryName"

;; Copy same memory using an S function
(memory.copy (memory $memoryName) (i32.const 50) (i32.const 100) (i32.const 25))
```

### Instructions and opcodes

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.copy` | `0xFC 0x0a`   |

## Specifications

{{Specifications}}

## Browser compatibility

> [!NOTE]
> Memory support in Wasm modules matches the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript API.
> The [multiMemory](#webassembly.multimemory) key indicates versions in which `copy` can be used with a specified memory.

{{Compat}}
