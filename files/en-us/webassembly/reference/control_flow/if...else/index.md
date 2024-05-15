---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`if`** statement executes a statement if the last item on the stack is true (1). If the condition is false (0), another statement can be executed.

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
(func $abs (export "abs") (param $x i32) (result i32)
    (local.get $x)
    (i32.const 0)
    (i32.ge_s)
    (if (result i32)
      (then
         (local.get $x)
        )
      (else
        (local.get $x)
        (i32.const -1)
         i32.mul
        )
      )
  )
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `if`        | `0x04`        |
| `else`      | `0x05`        |
