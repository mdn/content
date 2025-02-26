---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`select`** instruction, selects one of its first two operands based on whether its third operand is zero or not. It shares some similarities with the ternary operator in other languages (e.g. `false ? 10 : 20`), but doesn't [short-circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation). The instruction may be followed by an immediate value type: `select (result T)`. `select (result T)` uses a different binary opcode, and allows types besides those introduced by the WebAssembly MVP (`i32`, `i64`, `f32`, `f64`), for example, it allows selection between two `externref` values.

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

```plain
f32.const nan
f32.const -54.1

;; change to `1` (true) to get the first value (`nan`)
i32.const 0
select (result f32)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `select`    | `0x1b`        |
| `select t`  | `0x1c`        |
