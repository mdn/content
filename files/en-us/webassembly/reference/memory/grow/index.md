---
title: "grow: WASM text instruction"
short-title: grow
slug: WebAssembly/Reference/Memory/Grow
page-type: webassembly-instruction
browser-compat: webassembly.multiMemory
---

{{WebAssemblySidebar}}

The **`grow`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) increases the size of the memory instance by a specified number of pages.

The instruction returns the previous size of memory, in pages, if the operation was successful, and `-1` if the operation failed.
In both cases the result is added to the stack.
Currently each page is 64KiB.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

```wasm
;; load the number of memory pages to grow the memory by
i32.const 3

;; grow the memory by 3 pages
memory.grow

;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)
```

## Instructions and opcodes

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.grow` | `0x40`        |

## Browser compatibility

Memorry support in WASM modules matches the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) JavaScript API.
Support for the multiMemory feature is listed below.

{{Compat}}
