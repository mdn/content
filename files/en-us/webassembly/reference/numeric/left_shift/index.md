---
title: Left shift
slug: WebAssembly/Reference/Numeric/Left_shift
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`shl`** instructions, short for _shift-left_, are used for performing a bitwise left-shift, similar to the **`<<`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/shl.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; left shift one spot

;; perform a bitwise left-shift
i32.shl

;; the top item on the stack will now be 14 (00001110)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.shl`   | `0x74`        |
| `i64.shl`   | `0x86`        |
