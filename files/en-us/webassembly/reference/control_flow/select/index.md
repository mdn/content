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

The **`select`** instruction, selects one of its first two operands based on whether its third operand is zero or not. It shares some similarities with the ternary operator in other languages (e.g. `false ? 10 : 20`), but doesn't [short-circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation). The instruction may be followed by an immediate value type: `select (result T)`.

{{EmbedInteractiveExample("pages/wat/select.html", "tabbed-taller")}}

## Syntax

```wasm
;; push two values onto the stack
i32.const 10
i32.const 20

;; change to `1` (true) to get the first value (`10`)
i32.const 0
select
```

```
;; this is "select t", the explicitly typed variant

(func (export "f") (param $value externref) (param $condition i32) (result i32)
  ref.null extern
  local.get $value
  local.get $condition
  select (result externref)
)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `select`    | `0x1b`        |
| `select t`  | `0x1c`        |
