---
title: Truncate (float to float)
slug: WebAssembly/Reference/Numeric/Truncate_float_to_float
---

{{WebAssemblySidebar}}

The **`trunc`** instructions, short for _truncate_, are used for getting the value of a number without its fractional part.

**`trunc`** differs from **`floor`** when used on negative numbers, **`floor`** will round down in those cases while **`trunc`** will round up.

There's another [**`trunc`**](/en-US/docs/WebAssembly/Reference/Numeric/Truncate_float_to_int) instruction that truncates the fractional part of a floating point and converts it to an integer.

{{EmbedInteractiveExample("pages/wat/trunc_float_to_float.html", "tabbed-taller")}}

## Syntax

```wasm
;; load a number onto the stack
f32.const 2.7

;; discard the fractional part (.7)
f32.trunc

;; the top item on the stack will now be 2
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `f32.trunc` | `0x8f`        |
| `f64.trunc` | `0x9d`        |
