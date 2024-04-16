---
title: block
slug: WebAssembly/Reference/Control_flow/block
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

The **`block`** WebAssembly text-format [control flow](/en-US/docs/WebAssembly/Reference/Control_flow) statement creates a label that can later be branched out of with a [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br).

The statement is the opposite of the [`loop`](/en-US/docs/WebAssembly/Reference/Control_flow/loop) statement, in the sense that while branching to a `loop` jumps to the beginning of the loop, branching to a `block` jumps to the end of the block; that is, out of the block.

{{EmbedInteractiveExample("pages/wat/block.html", "tabbed-taller")}}

## Syntax

```wasm
;; label the block so that it can be branched to.
(block $my_block

  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block

  ;; this will never be reached, since the br jumped out of the block already.
  unreachable

)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `block`     | `0x02`        |
