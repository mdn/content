---
title: Copy sign
slug: WebAssembly/Reference/Numeric/Copy_sign
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`copysign`** instructions, are used to copy just the sign bit from one number to another.

{{InteractiveExample("Wat Demo: copysign", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load `10` and a negative number onto the stack
    f32.const 10
    f32.const -2

    f32.copysign ;; copy just the sing bit from second to the first number
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
f32.const -1

;; copy just the sign bit from the second number (-1) to the first (10)
f32.copysign

;; the top item on the stack will now be -10
```

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `f32.copysign` | `0x98`        |
| `f64.copysign` | `0xa6`        |
