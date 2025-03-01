---
title: Select
slug: WebAssembly/Reference/Control_flow/Select
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`select`** instruction, selects one of its first two operands based on whether its third operand is zero or not. It shares some similarities with the ternary operator in other languages (e.g. `false ? 10 : 20`), but doesn't [short-circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation). The instruction may be followed by an immediate value type: `select (result T)`. `select (result T)` uses a different binary opcode, and allows types besides those introduced by the WebAssembly MVP (`i32`, `i64`, `f32`, `f64`), for example, it allows selection between two `externref` values.

{{InteractiveExample("Wat Demo: select", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "select_simple") (result i32)
    ;; load two values onto the stack
    i32.const 10
    i32.const 20

    ;; change to `1` (true) to get the first value (`10`)
    i32.const 0
    select
  )
  (func (export "select_externref") (param $value externref) (param $condition i32) (result externref)
    ;; this is "select t", the explicitly typed variant
    ref.null extern
    local.get $value
    local.get $condition
    select (result externref)
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { select_simple, select_externref } = result.instance.exports;

  console.log(select_simple());
  // Expected output: 20

  // If the second parameter is zero, returns the first parameter (which may be an arbitrary JS value)
  const map = new Map();
  console.log(select_externref(map, 0));
  // Expected output: [object Map]
  console.log(select_externref(map, -1));
  // Expected output: null
});
```

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
