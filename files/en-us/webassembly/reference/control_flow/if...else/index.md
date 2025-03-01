---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`if`** statement executes a statement if the last item on the stack is true (non-zero). If the condition is false (0), another statement can be executed.

{{InteractiveExample("Wat Demo: if...else", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; change to positive number (true) if you want to run the if block
    (if
      (then
        i32.const 1
        call $log ;; should log '1'
      )
      (else
        i32.const 0
        call $log ;; should log '0'
      )
    )
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

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
