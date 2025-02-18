---
title: Demote
slug: WebAssembly/Reference/Numeric/Demote
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`demote`** instruction, is used to convert (demote) numbers of type `f64` to type `f32`.

{{EmbedInteractiveExample("pages/wat/demote.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an f64 onto the stack
f64.const 10.5

;; demote from f64 to f32
f32.demote_f64

;; the top item on the stack will now be the value 10.5 of type f32
```

| Instruction      | Binary opcode |
| ---------------- | ------------- |
| `f32.demote_f64` | `0xb6`        |
