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

{{EmbedInteractiveExample("pages/wat/loop.html", "tabbed-taller")}}

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
| `loop`      | `0x03`        |
