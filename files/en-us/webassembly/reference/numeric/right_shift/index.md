---
title: Right shift
slug: WebAssembly/Reference/Numeric/Right_shift
---

{{WebAssemblySidebar}}

The **`shr`** instructions, short for _shift-right_, are used for performing a bitwise right-shift, similar to the **`>>>`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/shr.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; right shift one spot

;; perform a bitwise right-shift
i32.shr_u

;; the top item on the stack will now be 3 (00000011)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.shr_s` | `0x75`        |
| `i32.shr_u` | `0x76`        |
| `i64.shr_s` | `0x87`        |
| `i64.shr_u` | `0x88`        |
