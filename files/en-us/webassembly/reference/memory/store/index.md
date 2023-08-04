---
title: Store
slug: WebAssembly/Reference/Memory/Store
---

{{WebAssemblySidebar}}

The **`store`** instructions, are used to store a number in memory.

For the integer numbers, you can also store a wide typed number as a narrower number in memory, e.g. store a 32-bit number in an 8-bit slot (**`i32.store8`**). If the number doesn't fit in the narrower number type it will wrap.

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
