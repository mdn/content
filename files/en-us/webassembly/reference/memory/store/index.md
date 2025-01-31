---
title: "store: Wasm text instruction"
short-title: store
slug: WebAssembly/Reference/Memory/Store
page-type: webassembly-instruction
browser-compat: webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`store`** [memory instructions](/en-US/docs/WebAssembly/Reference/Memory), are used to store a number on the stack in a memory.

There are `store` instructions for storing an `i32`, `i64`, `f32`, and `f64` in memory.
For the integer numbers, there are separate instruction variants for storing a wide typed number into a narrower number in memory.
For example, you can store a 32-bit number into an 8-bit slot in memory using `i32.store8`.
If the number doesn't fit in the narrower number type it will wrap.
All the variants are [listed below](#instructions_and_opcodes).

{{EmbedInteractiveExample("pages/wat/store.html", "tabbed-taller")}}

## Syntax

Store in default memory

```wasm
;; Store value in default memory at particular offset
i32.const 0 ;; stack variable with offset in memory to store the number
i32.const 20 ;; stack variable with the number to store
i32.store ;; store in default memory

;; Store using S-function (same values and offset)
(i32.store (i32.const 0) (i32.const 20))
```

Store to specified memory (if multi-memory supported)

```wasm
;; Store in memory referenced by its index
i32.const 0 ;; offset in memory to store the number
i32.const 20 ;; the number to store
i32.store (memory 2)  ;; store in memory with index 2

;; Store in memory referenced by its name
i32.const 0 ;; offset to store the number
i32.const 20 ;; the number to store
i32.store (memory $memoryName)  ;; store in memory with name "$memoryName"

;; Store in same memory using an S function
(i32.store (memory $memoryName) (i32.const 0) (i32.const 20))
```

### Instructions and opcodes

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `i32.store`   | `0x36`        |
| `i64.store`   | `0x37`        |
| `f32.store`   | `0x38`        |
| `f64.store`   | `0x39`        |
| `i32.store8`  | `0x3a`        |
| `i32.store16` | `0x3b`        |
| `i64.store8`  | `0x3c`        |
| `i64.store16` | `0x3d`        |
| `i64.store32` | `0x3e`        |

## Specifications

{{Specifications}}

## Browser compatibility

> [!NOTE]
> Memory support in Wasm modules matches the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript API.
> The [multiMemory](#webassembly.multimemory) key indicates versions in which `store` can be used with a specified memory.

{{Compat}}
