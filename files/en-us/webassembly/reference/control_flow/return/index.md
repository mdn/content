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

**`return`** returns from a function. If there are more values that the function's return type has, then the excess values are popped from the stack and discarded, and the last N are returned. If there are no values on the stack, it returns nothing/void.

{{EmbedInteractiveExample("pages/wat/return.html", "tabbed-taller")}}

## Syntax

```wasm
i32.const 7
f32.const 4.3
return
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `return`    | `0x0f`        |
