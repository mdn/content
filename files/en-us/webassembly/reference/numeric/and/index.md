---
title: AND
slug: WebAssembly/Reference/Numeric/AND
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Bitwise
---
{{WebAssemblySidebar}}

The **`and`** instructions, are used for performing a bitwise AND, similar to the **`&`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/and.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise AND
i32.and

;; the top item on the stack will now be 1 (00000001)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.and`   | `0x71`        |
| `i64.and`   | `0x83`        |
