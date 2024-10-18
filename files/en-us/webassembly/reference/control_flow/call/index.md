---
title: call
slug: WebAssembly/Reference/Control_flow/call
page-type: webassembly-instruction
---

{{WebAssemblySidebar}}

**`call`** calls a function, while **`call_indirect`** calls a function in a table.
**`return_call`** and **`return_call_indirect`** are the tail-call versions of `call` and `call_indirect`, respectively.

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

## Examples

### Using call to run a function imported from JavaScript

Calling the `greet` function imported from JavaScript using `call`:

{{EmbedInteractiveExample("pages/wat/call.html", "tabbed-taller")}}

### Using return_call to calculate a factorial

Calculating factorial for a number using `return_call` and logging the result using the exported `fac` function:

{{EmbedInteractiveExample("pages/wat/return_call.html", "tabbed-taller")}}

## See also

- [Tail Call Extension proposal overview](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 on WebAssembly tail calls support](https://v8.dev/blog/wasm-tail-call)
