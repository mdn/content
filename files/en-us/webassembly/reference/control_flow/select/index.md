---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
tags:
  - WebAssembly
  - wasm
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

The **`select`** instruction, selects one of its first two operands based on whether its third operand is zero or not, it shares some similarities with the ternary operator in other languages (e.g. `false ? 10 : 20`).

{{EmbedInteractiveExample("pages/wat/select.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two values onto the stack
i32.const 10
i32.const 20

;; change to `1` (true) to get the first value (`10`)
i32.const 0
select
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `select`    | `0x1b`        |
| `select t`  | `0x1c`        |
