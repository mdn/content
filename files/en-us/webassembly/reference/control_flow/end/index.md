---
title: end
slug: WebAssembly/Reference/Control_flow/end
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

**`end`** is used to end a `block`, `loop`, `if`, or `else`. In the other examples we used the s-expression syntax which doesn't require the `end`, so you won't find it in the other examples here. However, it's still useful to know about since this is what the browsers display in devtools.

{{InteractiveExample("Wat Demo: end", "tabbed-taller")}}

```wat interactive-example
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    i32.const 0 ;; change to positive number if you want to run the if block
    if
      i32.const 1
      call $log ;; should log '1'
    end
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wasm
i32.const 0
if
  ;; do something
end
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `end`       | `0x0b`        |
