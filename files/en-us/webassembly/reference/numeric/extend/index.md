---
title: Extend
slug: WebAssembly/Reference/Numeric/Extend
---

{{WebAssemblySidebar}}

The **`extend`** instructions, are used to convert (extend) numbers of type `i32` to type `i64`. There are signed and unsigned versions of this instruction.

{{EmbedInteractiveExample("pages/wat/extend.html", "tabbed-taller")}}

## Syntax

```wasm
;; push an i32 onto the stack
i32.const 10

;; sign-extend from i32 to i64
i64.extend_i32_s

;; the top item on the stack will now be the value 10 of type i64
```

| Instruction        | Binary opcode |
| ------------------ | ------------- |
| `i64.extend_i32_s` | `0xac`        |
| `i64.extend_i32_u` | `0xad`        |
