---
title: call
slug: WebAssembly/Reference/Control_flow/call
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

**`call`** calls a function. `call_indirect` calls a function in a table.

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Instruction     | Binary opcode |
| --------------- | ------------- |
| `call`          | `0x10`        |
| `call_indirect` | `0x11`        |
