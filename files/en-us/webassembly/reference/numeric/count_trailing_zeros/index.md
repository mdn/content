---
title: Count trailing zeros
slug: WebAssembly/Reference/Numeric/Count_trailing_zeros
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Bitwise
---
{{WebAssemblySidebar}}

The **`ctz`** instructions, short for _count trailing zeros_, are used to count the amount of zeros at the start of the numbers binary representation.

{{EmbedInteractiveExample("pages/wat/ctz.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count trailing zeros
i32.ctz

;; the top item on the stack will now be 23
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ctz`   | `0x68`        |
| `i64.ctz`   | `0x7a`        |
