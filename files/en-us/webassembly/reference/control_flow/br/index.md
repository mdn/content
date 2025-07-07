---
title: br
slug: WebAssembly/Reference/Control_flow/br
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`br`** statement branches to a loop, block, or if.

{{InteractiveExample("Wat Demo: br", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    (block $my_block

      ;; break out fo the block.
      ;; if this is removed the code will throw an error when it reaches `unreachable`
      br $my_block

      ;; we'll never reach this point since we broke out of the block
      unreachable

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

```wat
;; label the loop so that it can be branched to
(loop $my_loop

  ;; branch to the loop.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise you have an infinite loop.
  br $my_loop

)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `br`        | `0x0c`        |
