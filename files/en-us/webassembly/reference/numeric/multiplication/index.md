---
title: Multiplication
slug: WebAssembly/Reference/Numeric/Multiplication
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`mul`** instructions, short for _multiplication_, are used for multiplying one number by another number, similar to the **`*`** operator in other languages.

{{InteractiveExample("Wat Demo: mul", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.mul ;; multiply one number by the other
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
i32.const 10
i32.const 3

;; multiply one number by the other
i32.mul

;; the top item on the stack will now be 30 (10 * 3 = 30)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.mul`   | `0x6c`        |
| `i64.mul`   | `0x7e`        |
| `f32.mul`   | `0x94`        |
| `f64.mul`   | `0xa2`        |
