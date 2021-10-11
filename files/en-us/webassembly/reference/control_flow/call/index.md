---
title: call
slug: WebAssembly/Reference/Control_flow/call
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

**`call`** calls a function. `call_indirect` calls a function in a table.

## Syntax

```wasm
call $greet
```

## Full working example

Wasm file

```wasm
(module
  (import "env" "greet" (func $greet))

  (func
    ;; call the greet function
    call $greet
  )

  (start 1) ;; run the first function automatically
)
```

JavaScript file

```js
WebAssembly.instantiateStreaming(
  fetch("../out/main.wasm"),
  {
    env: {
      greet: function() {
        console.log("Hello");
      }
    }
  }
);
```

| Instruction     | Binary opcode |
| --------------- | ------------- |
| `call`          | `0x10`        |
| `call_indirect` | `0x11`        |
