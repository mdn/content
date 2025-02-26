---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

**`unreachable`** is used to denote a point in code that should not be reachable. `unreachable` is an unconditional trap: in the case where an `unreachable` is reached and executed, the instruction traps.

{{EmbedInteractiveExample("pages/wat/unreachable.html", "tabbed-shorter")}}

## Syntax

```wasm
unreachable
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `unreachable` | `0x00`        |
