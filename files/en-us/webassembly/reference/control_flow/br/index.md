---
title: br
slug: WebAssembly/Reference/Control_flow/br
---

{{WebAssemblySidebar}}

The **`br`** statement branches to a loop, block, or if.

Other variants of `br` are `br_if` for branching on condition, and `br_table` for branching to different blocks based on an argument.

{{EmbedInteractiveExample("pages/wat/br.html", "tabbed-taller")}}

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

| Instruction | Binary opcode |
| ----------- | ------------- |
| `br`        | `0x0c`        |
| `br_if`     | `0x0d`        |
| `br_table`  | `0x0e`        |
