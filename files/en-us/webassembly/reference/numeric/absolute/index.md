---
title: Absolute
slug: WebAssembly/Reference/Numeric/Absolute
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`abs`** instructions, short for _absolute_, are used to get the absolute value of a number. That is, it returns x if x is positive, and the negation of x if x is negative.

{{InteractiveExample("Wat Demo: abs", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -10 ;; load a number onto the stack
    f32.abs ;; calculate the absolute value
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
;; load a number onto the stack
f32.const -2

;; absolute
f32.abs

;; the top item on the stack will now be 2
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.abs`   | `0x8b`        |
| `f64.abs`   | `0x99`        |
