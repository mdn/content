---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`if`** statement executes a statement if the last item on the stack is true (non-zero). If the condition is false (0), another statement can be executed.

{{EmbedInteractiveExample("pages/wat/if...else.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 0
(if
  (then
    ;; do something
  )
  (else
    ;; do something else
  )
)
```

To leave return values on the stack, add the `result` statement.

```wasm
i32.const 0
(if (result i32)
  (then
    ;; do something
    (i32.const 1)
  )
  (else
    ;; do something else
    (i32.const 2)
  )
)
(drop)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `if`        | `0x04`        |
| `else`      | `0x05`        |
