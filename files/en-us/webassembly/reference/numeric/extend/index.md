---
title: Extend
slug: WebAssembly/Reference/Numeric/Extend
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`extend`** instructions, are used to convert (extend) numbers of type `i32` to type `i64`. There are signed and unsigned versions of this instruction.

{{InteractiveExample("Wat Demo: extend", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main

    i32.const 10 ;; push an i32 onto the stack

    i64.extend_i32_s ;; sign-extend from i32 to i64

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
