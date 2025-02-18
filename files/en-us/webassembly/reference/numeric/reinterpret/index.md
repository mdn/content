---
title: Reinterpret
slug: WebAssembly/Reference/Numeric/Reinterpret
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`reinterpret`** instructions, are used to reinterpret the bits of a number as a different type.

{{EmbedInteractiveExample("pages/wat/reinterpret.html", "tabbed-taller")}}

## Syntax

```wasm
;; the value `10000000_00000000_00000000_00000000` in binary
;; maps to `-0` as a floating point and to `-2147483648` as an integer

;; push an f32 onto the stack
f32.const -0

;; reinterpret the bytes of the f32 as i32
i32.reinterpret_f32

;; the top item on the stack will now be the value -2147483648 of type i32
```

| Instruction           | Binary opcode |
| --------------------- | ------------- |
| `i32.reinterpret_f32` | `0xbc`        |
| `i64.reinterpret_f64` | `0xbd`        |
| `f32.reinterpret_i32` | `0xbe`        |
| `f64.reinterpret_i64` | `0xbf`        |
