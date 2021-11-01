---
title: return
slug: WebAssembly/Reference/Control_flow/return
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

**`return`** returns from a function. If there's a value left on the stack, it returns that value; otherwise it returns nothing/void.

## Syntax

```wasm
f32.const 4.3
return
```

## Full working example

Wasm file

```wasm
(module

  (func (export "get_90") (result i32)

    ;; load 90 onto the stack and return it
    i32.const 90
    return

  )

)
```

JavaScript file

```js
WebAssembly.instantiateStreaming(
  fetch("../out/main.wasm")
).then(result => {
    let get_90 = result.instance.exports.get_90;
    console.log(get_90());
  });
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `return`    | `0x0f`        |
