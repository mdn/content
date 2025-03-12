---
title: nop
slug: WebAssembly/Reference/Control_flow/nop
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

**`nop`** stands for no-operation. It literally does nothing.

{{InteractiveExample("Wat Demo: nop", "tabbed-shorter")}}

```wat interactive-example
(module
  (func (export "do_nothing")
    nop
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  result.instance.exports.do_nothing();
});
```

## Syntax

```wasm
nop
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `nop`       | `0x01`        |
