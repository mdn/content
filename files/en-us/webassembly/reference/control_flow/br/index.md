---
title: br
slug: WebAssembly/Reference/Control_flow/br
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

The **`br`** statement branches to a loop, block, or if.

Other variants of `br` are `br_if` for branching on condition, and `br_table` for branching to different blocks based on an argument.

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

Wasm file

```wasm
  (module
    ;; import the browser console object, you'll need to pass this in from JavaScript
    (import "console" "log" (func $log (param i32)))

    ;; create a global variable and initialize it to 0
    (global $i (mut i32) (i32.const 0))

    (func
      (loop $my_loop

        ;; add one to $i
        get_global $i
        i32.const 1
        i32.add
        set_global $i

        ;; log the current value of $i
        get_global $i
        call $log

        ;; if $i is less than 10 branch to loop
        get_global $i
        i32.const 10
        i32.lt_s
        br_if $my_loop

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
| `br`        | `0x0c`        |
| `br_if`     | `0x0d`        |
| `br_table`  | `0x0e`        |
