---
title: Remainder
slug: WebAssembly/Reference/Numeric/Remainder
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Arithmetic
---
{{WebAssemblySidebar}}

The **`rem`** instructions, short for _remainder_, are used to calculate the remainder left over when one integer is divided by another integer, similar to the **`%`** operator in other languages. The **`rem`** instructions are only available for the integer types and not for the floating point types.

{{EmbedInteractiveExample("pages/wat/rem.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 10
i32.const 3

;; calculate the remainder of dividing one number by the other
i32.rem

;; the top item on the stack will now be 1 (10 % 3 = 1)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rem_s` | `0x6f`        |
| `i32.rem_u` | `0x70`        |
| `i64.rem_s` | `0x81`        |
| `i64.rem_u` | `0x82`        |
