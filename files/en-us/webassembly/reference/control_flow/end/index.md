---
title: end
slug: WebAssembly/Reference/Control_flow/end
---

{{WebAssemblySidebar}}

**`end`** is used to end a `block`, `loop`, `if`, or `else`. In the other examples we used the s-expression syntax which doesn't require the `end`, so you won't find it in the other examples here. However, it's still useful to know about since this is what the browsers display in devtools.

{{EmbedInteractiveExample("pages/wat/end.html", "tabbed-taller")}}

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
