---
title: Square root
slug: WebAssembly/Reference/Numeric/Square_root
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`sqrt`** instructions, short for _square root_, are used to get the square root of a number.

{{EmbedInteractiveExample("pages/wat/sqrt.html", "tabbed-standard")}}

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
