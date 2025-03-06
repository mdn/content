---
title: Promote
slug: WebAssembly/Reference/Numeric/Promote
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`promote`** instruction, is used to convert (promote) numbers of type `f32` to type `f64`.

{{InteractiveExample("Wat Demo: promote", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main

    f32.const 10.5 ;; push an f32 onto the stack

    f64.promote_f32 ;; promote from f32 to f64

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
;; push an f32 onto the stack
f32.const 10.5

;; promote from f32 to f64
f64.promote_f32

;; the top item on the stack will now be the value 10.5 of type f64
```

| Instruction       | Binary opcode |
| ----------------- | ------------- |
| `f64.promote_f32` | `0xbb`        |
