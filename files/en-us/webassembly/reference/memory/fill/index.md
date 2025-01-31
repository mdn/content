---
title: "fill: Wasm text instruction"
short-title: fill
slug: WebAssembly/Reference/Memory/Fill
page-type: webassembly-instruction
browser-compat: webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`fill`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) sets all bytes in a memory region to a given byte.

The instruction returns no value.
It traps (exception) if the indicated memory region is out of bounds.

## Syntax

Fill within default memory

```wasm
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-function
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

Fill specified memory (if multi-memory supported)

```wasm
;; Fill specific memory referenced by its index
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory 1) ;; Fill memory with index 1

;; Fill memory referenced by its name
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory $memoryName) ;; Fill memory with name "$memoryName"

;; Fill same memory using an S function
(memory.fill (memory $memoryName) (i32.const 200) (i32.const 255) (i32.const 100))
```

### Instructions and opcodes

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.fill` | `0xFC 0x0b`   |

## Specifications

{{Specifications}}

## Browser compatibility

> [!NOTE]
> Memory support in Wasm modules matches the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript API.
> The [multiMemory](#webassembly.multimemory) key indicates versions in which `store` can be used with a specified memory.

{{Compat}}
