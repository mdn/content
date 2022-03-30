---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

**`unreachable`** is used to denote a point in code that should not be reachable. In the case where an `unreachable` is reached it throws an unrecoverable error.

{{EmbedInteractiveExample("pages/wat/unreachable.html")}}

## Syntax

```wasm
unreachable
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `unreachable` | `0x00`        |
