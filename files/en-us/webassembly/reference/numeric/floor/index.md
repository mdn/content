---
title: Floor
slug: WebAssembly/Reference/Numeric/Floor
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`floor`** instructions, are used for getting the value of a number rounded down to the next integer.

**`floor`** differs from **`trunc`** when used on negative numbers, **`floor`** will round down in those cases while **`trunc`** will round up.

{{InteractiveExample("Wat Demo: floor", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.floor ;; round down
    call $log ;; log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wasm
;; load a number onto the stack
f32.const -2.7

;; round down
f32.floor

;; the top item on the stack will now be -3
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.floor` | `0x8e`        |
| `f64.floor` | `0x9c`        |
