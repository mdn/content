---
title: "local.get: Wasm variable instruction"
short-title: local.get
slug: WebAssembly/Reference/Variables/local.get
page-type: webassembly-instruction
browser-compat: webassembly.instructions.local_get
sidebar: webassemblysidebar
---

The **`local.get`** [variable instruction](/en-US/docs/WebAssembly/Reference/Variables) loads the value of a local variable onto the stack.

{{InteractiveExample("Wat Demo: local", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main

    (local $var i32) ;; create a local variable named $var
    (local.set $var (i32.const 10)) ;; set $var to 10
    local.get $var ;; load $var onto the stack
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

```wat
;; load the value of a local variable onto the stack
local.get $val
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `local.get` | `0x20`        |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
