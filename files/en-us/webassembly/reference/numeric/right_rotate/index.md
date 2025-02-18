---
title: Right rotate
slug: WebAssembly/Reference/Numeric/Right_rotate
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`rotr`** instructions, short for _rotate-right_, are used for performing a bitwise right-rotate.

{{EmbedInteractiveExample("pages/wat/rotr.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000000_00000000_00000000_00000111
i32.const 1   ;; right rotate one spot

;; perform a bitwise right-rotate
i32.rotr

;; the top item on the stack will now be 2147483651
;; (10000000_00000000_00000000_00000011)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rotr`  | `0x78`        |
| `i64.rotr`  | `0x8a`        |
