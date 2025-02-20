---
title: Min
slug: WebAssembly/Reference/Numeric/Min
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`min`** instructions, are used for getting the lower of two numbers.

{{InteractiveExample("Wat Demo: min", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load `10` and `2` onto the stack
    f32.const 10
    f32.const 2

    f32.min ;; calculate the lower number
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

;; get lower number
f32.min

;; the top item on the stack will now be 3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.min`   | `0x96`        |
| `f64.min`   | `0xa4`        |
