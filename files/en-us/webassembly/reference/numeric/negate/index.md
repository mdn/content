---
title: Negate
slug: WebAssembly/Reference/Numeric/Negate
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`neg`** instructions, short for _negate_, are used to negate a number. That is, turn a positive number into a negative number and a negative number into a positive number.

{{InteractiveExample("Wat Demo: neg", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 10 ;; load a number onto the stack
    f32.neg ;; negate the values
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
f32.const 2.7

;; negate
f32.neg

;; the top item on the stack will now be -2.7
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.neg`   | `0x8c`        |
| `f64.neg`   | `0x9a`        |
