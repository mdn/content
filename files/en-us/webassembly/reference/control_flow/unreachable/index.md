---
title: unreachable
slug: WebAssembly/Reference/Control_flow/unreachable
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

**`unreachable`** is used to denote a point in code that should not be reachable. `unreachable` is an unconditional trap: in the case where an `unreachable` is reached and executed, the instruction traps.

{{InteractiveExample("Wat Demo: unreachable", "tabbed-shorter")}}

```wat interactive-example
(module
  (func (export "throw")
    unreachable
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  result.instance.exports.throw();
  // Expected output: RuntimeError: unreachable
});
```

## Syntax

```wasm
unreachable
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `unreachable` | `0x00`        |
