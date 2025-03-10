---
title: Local tee
slug: WebAssembly/Reference/Variables/Local_tee
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`local.tee`** instruction sets the value of a local variable and loads the value onto the stack.

The instruction is named after the T-splitter used in plumbing.

{{InteractiveExample("Wat Demo: local_tee", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    (local $var i32) ;; create a local variable named $var
    (i32.const 10) ;; load `10` onto the stack
    local.tee $var ;; set the $var to `10` and keep `10` on the stack
    call $log ;; log the top item on the stack (10)

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
;; load the number 2 onto the stack
i32.const 2

;; store the number 2 in the variable $val and load it on the stack
local.tee $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.tee` | `0x22`        |
