---
title: Nearest
slug: WebAssembly/Reference/Numeric/Nearest
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`nearest`** instructions, are used for getting the value of a number rounded to the nearest integer.

{{InteractiveExample("Wat Demo: nearest", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.nearest ;; round to the nearest integer
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
f32.const -2.7

;; round to the nearest integer
f32.nearest

;; the top item on the stack will now be -3
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `f32.nearest` | `0x90`        |
| `f64.nearest` | `0x9e`        |
