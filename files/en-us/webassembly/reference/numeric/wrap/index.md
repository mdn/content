---
title: Wrap
slug: WebAssembly/Reference/Numeric/Wrap
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Something
---
{{WebAssemblySidebar}}

The **`wrap`** instruction, is used to convert numbers of type `i64` to type `i32`.

> **Note:** If the number is larger than what an `i32` can hold this operation will [wrap](https://en.wikipedia.org/wiki/Modular_arithmetic), resulting in a different number.

{{EmbedInteractiveExample("pages/wat/wrap.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i64 onto the stack
i64.const 10

;; wrap from i64 to i32
i32.wrap_i64

;; the top item on the stack will now be the value 10 of type `i32`
```

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `i32.wrap_i64` | `0xa7`        |
