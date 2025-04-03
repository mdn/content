---
title: Global
slug: WebAssembly/Reference/Variables/Global
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`global`** instruction declares a new global variable.

{{InteractiveExample("Wat Demo: global", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))

  ;; import a global variable from js
  (global $from_js (import "env" "from_js") i32)

  ;; create a global variable
  (global $from_wasm i32 (i32.const 10))

  (func $main
    ;; load both global variables onto the stack
    global.get $from_js
    global.get $from_wasm

    i32.add ;; add up both globals
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
const from_js = new WebAssembly.Global({ value: "i32", mutable: false }, 5);
await WebAssembly.instantiateStreaming(fetch(url), {
  console,
  env: { from_js },
});
```

## Syntax

```wasm
;; declare new variable named $val of type i32
(global $val i32)
```
