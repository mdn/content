---
title: Promote
slug: WebAssembly/Reference/Numeric/Promote
---

{{WebAssemblySidebar}}

The **`promote`** instruction, is used to convert (promote) numbers of type `f32` to type `f64`.

{{EmbedInteractiveExample("pages/wat/promote.html", "tabbed-taller")}}

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
