---
title: return
slug: WebAssembly/Reference/Control_flow/return
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

**`return`** returns from a function. If there's a value left on the stack, it returns that value; otherwise it returns nothing/void.

{{EmbedInteractiveExample("pages/wat/return.html", "tabbed-taller")}}

## Syntax

```wasm
f32.const 4.3
return
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `return`    | `0x0f`        |
