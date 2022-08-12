---
title: Load
slug: WebAssembly/Reference/Memory/Load
tags:
  - WebAssembly
  - wasm
  - Reference
  - Memory
---
{{WebAssemblySidebar}}

The **`load`** instructions, are used to load a number from memory onto the stack.

For the integer numbers, you can also load a narrower number from memory and extend it into a wider type, e.g. load a unsigned 8-bit number and convert it into a i32 (**`i32.load8_u`**). These instructions are separate for signed and unsigned numbers.

{{EmbedInteractiveExample("pages/wat/load.html", "tabbed-taller")}}

## Syntax

```wasm
;; the offset from where to load the number
i32.const 0

;; load the number at position 0
i32.load
```

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `i32.load`     | `0x28`        |
| `i64.load`     | `0x29`        |
| `f32.load`     | `0x2a`        |
| `f64.load`     | `0x2b`        |
| `i32.load8_s`  | `0x2c`        |
| `i32.load8_u`  | `0x2d`        |
| `i32.load16_s` | `0x2e`        |
| `i32.load16_u` | `0x2f`        |
| `i64.load8_s`  | `0x30`        |
| `i64.load8_u`  | `0x31`        |
| `i64.load16_s` | `0x32`        |
| `i64.load16_u` | `0x33`        |
| `i64.load32_s` | `0x34`        |
| `i64.load32_u` | `0x35`        |
