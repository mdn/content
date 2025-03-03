---
title: Global get
slug: WebAssembly/Reference/Variables/Global_get
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`global.get`** instruction loads the value of a global variable onto the stack.

{{InteractiveExample("Wat Demo: global_get", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var i32 (i32.const 10))
  (func $main

    global.get $var ;; load the value of $var variable onto the stack
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
;; load the value of a global variable onto the stack
global.get $val
```

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `global.get` | `0x23`        |
