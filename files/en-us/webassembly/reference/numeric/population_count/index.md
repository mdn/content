---
title: Population count
slug: WebAssembly/Reference/Numeric/Population_count
---

{{WebAssemblySidebar}}

The **`popcnt`** instructions, short for _population count_, are used to count the amount of `1`s in a numbers binary representation.

{{EmbedInteractiveExample("pages/wat/popcnt.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
i32.const 130 ;; 10000010

;; count the 1s
i32.popcnt

;; the top item on the stack will now be 2
```

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `i32.popcnt` | `0x69`        |
| `i64.popcnt` | `0x7b`        |
