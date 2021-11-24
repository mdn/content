---
title: loop
slug: WebAssembly/Reference/Control_flow/loop
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

The **`loop`** statement creates a label that can later be branched to with a `br`. The loop instruction doesn't loop by itself; you need to branch to it to actually create a loop.

The **`loop`** statement is the opposite of the `block` statement, in the sense that while branching to a `loop` jumps to the beginning of the loop, branching to a `block` jumps to the end of the block, that is, out of the block.

## Syntax

```wasm
;; label the loop so that it can be branched to
(loop $my_loop

  ;; branch to the loop.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise you have an infinite loop.
  br $my_loop

)
```

## Full working example

We'll create a simple wasm module that increments a variable `$i` 10 times and logs the value on every cycle.

Wasm file

```wasm
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    (local $i i32)

    (loop $my_loop

      ;; check if $i is les than 10
      get_local $i
      i32.const 10
      i32.lt_s
      (if

        ;; add one to $i
        get_local $i
        i32.const 1
        i32.add
        set_local $i

        ;; log the current value of $i
        get_local $i
        call $log

        ;; continue the loop
        br $my_loop

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
| `loop`      | `0x03`        |
