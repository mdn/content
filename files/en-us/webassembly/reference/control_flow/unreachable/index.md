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

## Syntax

```wasm
unreachable
```

## Full working example

Wasm file

```wasm
(module
  (func (export "throw")
    unreachable
  )
)
```

JavaScript file

```js
WebAssembly.instantiateStreaming(
  fetch("../out/main.wasm")
).then(result => {
  result.instance.exports.throw();
});
```

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `unreachable` | `0x00`        |
