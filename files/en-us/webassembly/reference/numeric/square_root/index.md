---
title: Square root
slug: WebAssembly/Reference/Numeric/Square_root
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`sqrt`** instructions, short for _square root_, are used to get the square root of a number.

{{InteractiveExample("Wat Demo: sqrt", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2 ;; load a number onto the stack
    f32.sqrt ;; calculate the square root
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
f32.const 289

;; get the square root of 289
f32.sqrt

;; the top item on the stack will now be 17
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.sqrt`  | `0x91`        |
| `f64.sqrt`  | `0x9f`        |
