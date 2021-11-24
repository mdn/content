---
title: nop
slug: WebAssembly/Reference/Control_flow/nop
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

**`nop`** stands for no-operation. It literally does nothing.

## Syntax

```wasm
nop
```

## Full working example

Wasm file

```wasm
(module
  (func (export "do_nothing")
    nop
  )
)
```

JavaScript file

```js
WebAssembly.instantiateStreaming(
  fetch("../out/main.wasm")
).then(result => {
  result.instance.exports.do_nothing();
});
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `nop`       | `0x01`        |
