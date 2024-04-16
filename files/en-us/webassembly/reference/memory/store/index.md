---
title: store
slug: WebAssembly/Reference/Memory/store
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`store`** [memory](/en-US/docs/WebAssembly/Reference/Memory) instruction is used to store a number in memory.

There are variants of the instruction, such as `i32.store8`, `i32.store16`, and so on (see below), for storing a wide typed integer number as a narrower number in memory.
For example, you can use `i32.store8` to store a 32-bit number in an 8-bit memory slot.
If the number doesn't fit in the narrower number type it will wrap.

{{EmbedInteractiveExample("pages/wat/store.html", "tabbed-taller")}}

## Syntax

```wasm
;; the offset in memory where to store the number
i32.const 0

;; the number to store
i32.const 20

;; store 20 at position 0
i32.store
```

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
