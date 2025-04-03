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

{{InteractiveExample("Wat Demo: return", "tabbed-taller")}}

```wat interactive-example
(module
  (func (export "get_90") (result i32)
    ;; load 10 onto the stack
    i32.const 10
    ;; load 90 onto the stack
    i32.const 90
    ;; return the second value (90); the first is discarded
    return
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url)).then((result) => {
  const { get_90 } = result.instance.exports;
  console.log(get_90());
  // Expected output: 90
});
```

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
