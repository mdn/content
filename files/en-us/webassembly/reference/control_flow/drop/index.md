---
title: Drop
slug: WebAssembly/Reference/Control_flow/Drop
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`drop`** instruction, pops a value from the stack, and discards it.

{{InteractiveExample("Wat Demo: drop", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two values onto the stack
    i32.const 10
    i32.const 20

    ;; drop the top item from the stack (`20`)
    drop

    call $log ;; log the top value on the stack (`10`)
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
;; push multiple values onto the stack
i32.const 1
i32.const 2
i32.const 3

;; drop the top item from the stack (`3`)
drop

;; the top item on the stack will now be `2`
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `drop`      | `0x1a`        |
