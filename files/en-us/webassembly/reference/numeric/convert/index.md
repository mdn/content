---
title: Convert
slug: WebAssembly/Reference/Numeric/Convert
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`convert`** instructions, are used for converting integer numbers to floating point numbers. There are signed and unsigned versions of this instruction.

{{EmbedInteractiveExample("pages/wat/convert.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i32 onto the stack
i32.const 10

;; convert from signed i32 to f32
f32.convert_i32_s

;; the top item on the stack will now be the value 10 of type f32
```

| Instruction         | Binary opcode |
| ------------------- | ------------- |
| `f32.convert_i32_s` | `0xb2`        |
| `f32.convert_i32_u` | `0xb3`        |
| `f32.convert_i64_s` | `0xb4`        |
| `f32.convert_i64_u` | `0xb5`        |
| `f64.convert_i32_s` | `0xb7`        |
| `f64.convert_i32_u` | `0xb8`        |
| `f64.convert_i64_s` | `0xb9`        |
| `f64.convert_i64_u` | `0xba`        |
