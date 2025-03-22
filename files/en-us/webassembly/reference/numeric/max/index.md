---
title: Max
slug: WebAssembly/Reference/Numeric/Max
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`max`** instructions, are used for getting the higher of two numbers.

{{InteractiveExample("Wat Demo: max", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load `10` and `2` onto the stack
    f32.const 10
    f32.const 2

    f32.max ;; calculate the higher number
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wasm
;; load two numbers onto the stack
f32.const 10
f32.const 3

;; get higher number
f32.max

;; the top item on the stack will now be 10
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.max`   | `0x97`        |
| `f64.max`   | `0xa5`        |
