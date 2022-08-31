---
title: Left rotate
slug: WebAssembly/Reference/Numeric/Left_rotate
tags:
  - WebAssembly
  - wasm
  - Reference
  - Numeric
  - Bitwise
---
{{WebAssemblySidebar}}

The **`rotl`** instructions, short for _rotate-left_, are used for performing a bitwise left-rotate.

{{EmbedInteractiveExample("pages/wat/rotl.html", "tabbed-taller")}}

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 3758096384 ;; 11100000_00000000_00000000_00000000
i32.const 1          ;; left rotate one spot

;; perform a bitwise left-rotate
i32.rotl

;; the top item on the stack will now be 3221225473
;; (11000000_00000000_00000000_00000001)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rotl`  | `0x77`        |
| `i64.rotl`  | `0x89`        |
