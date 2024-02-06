---
title: call
slug: WebAssembly/Reference/Control_flow/call
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`call`** calls a function, `return_call` being the tail-call version of it. `call_indirect` calls a function in a table with the `return_call_indirect` tail-call version as well.

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-standard")}}

## Syntax

```wasm
call $greet
```

| Instruction            | Binary opcode |
| ---------------------- | ------------- |
| `call`                 | `0x10`        |
| `call_indirect`        | `0x11`        |
| `return_call`          | `0x12`        |
| `return_call_indirect` | `0x13`        |

## See also

- [Tail Call Extension proposal overview](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 on WebAssembly tail calls support](https://v8.dev/blog/wasm-tail-call)
