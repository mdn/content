---
title: br_if
slug: WebAssembly/Reference/Control_flow/br_if
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`br_if`** statement branches to a [`loop`](/en-US/docs/WebAssembly/Reference/Control_flow/loop), a [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block), or an [`if`](/en-US/docs/WebAssembly/Reference/Control_flow/if...else) statement, based on a boolean (`0` or `1`) condition.

{{InteractiveExample("Wat Demo: br_if", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the browser console object, which you'll need to pass in from JavaScript
  (import "console" "log" (func $log (param i32)))

  ;; Create a global variable and initialize it to 0
  (global $i (mut i32) (i32.const 0))

  (func
    (loop $my_loop

      ;; Add 1 to $i
      global.get $i
      i32.const 1
      i32.add
      global.set $i

      ;; Log the current value of $i
      global.get $i
      call $log

      ;; If $i is less than 10, branch to loop
      global.get $i
      i32.const 10
      i32.lt_s
      br_if $my_loop

    )
  )

  (start 1) ;; Run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
;; label the loop so that it can be branched to
(loop $my_loop

  ;; add 1 (true) to the stack
  i32.const 1

  ;; branch to the loop if the top of the stack is 1
  br_if $my_loop

)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `br_if`     | `0x0d`        |
