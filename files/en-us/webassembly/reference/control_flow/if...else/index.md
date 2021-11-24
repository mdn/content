---
title: if...else
slug: WebAssembly/Reference/Control_flow/if...else
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

The **`if`** statement executes a statement if the last item on the stack is true (1). If the condition is false (0), another statement can be executed

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

## Full working example

Wasm file

```wasm
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 1 ;; change to positive number (true) if you want to run the if block
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

JavaScript file

```js
WebAssembly.instantiateStreaming(
  fetch("link to .wasm file"),
  { console }
);
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `if`        | `0x04`        |
| `else`      | `0x05`        |
