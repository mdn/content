---
title: XOR
slug: WebAssembly/Reference/Numeric/XOR
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Bitwise
---
{{WebAssemblySidebar}}

The **`xor`** instructions, are used for performing a bitwise XOR, similar to the **`^`** operator in other languages.

{{EmbedInteractiveExample("pages/wat/xor.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise XOR
i32.xor

;; the top item on the stack will now be 6 (00000110)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.xor`   | `0x73`        |
| `i64.xor`   | `0x85`        |
