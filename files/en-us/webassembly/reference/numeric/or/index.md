---
title: OR
slug: WebAssembly/Reference/Numeric/OR
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Bitwise
---
{{WebAssemblySidebar}}

The **`or`** instructions, are used for performing a bitwise OR, similar to the **`|`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/or.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise OR
i32.or

;; the top item on the stack will now be 7 (00000111)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.or`    | `0x72`        |
| `i64.or`    | `0x84`        |
