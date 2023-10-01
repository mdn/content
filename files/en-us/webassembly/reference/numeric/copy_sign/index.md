---
title: Copy sign
slug: WebAssembly/Reference/Numeric/Copy_sign
---

{{WebAssemblySidebar}}

The **`copysign`** instructions, are used to copy just the sign bit from one number to another.

{{EmbedInteractiveExample("pages/wat/copysign.html", "tabbed-taller")}}

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
