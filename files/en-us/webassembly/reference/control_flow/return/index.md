---
title: return
slug: WebAssembly/Reference/Control_flow/return
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

**`return`** returns from a function.

- If there are no values left on the stack, it returns nothing/void.
- If there are the same amount of values left on the stack as specified in the function's type signature, it returns those values.
- If there are more values than the function's return type specifies, then the topmost N values are returned, and the remaining values on the stack are discarded.

{{EmbedInteractiveExample("pages/wat/return.html", "tabbed-taller")}}

## Syntax

```wasm
f32.const 4.3
return
```

```wasm
i32.const 7
f32.const 4.3
return
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `return`    | `0x0f`        |
