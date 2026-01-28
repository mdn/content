---
title: "grow: Wasm table instruction"
short-title: grow
slug: WebAssembly/Reference/Table/grow
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-table
sidebar: webassemblysidebar
---

The **`grow`** [Table instruction](/en-US/docs/WebAssembly/Reference/Table) increases the size of a table by a specified amount.

<!-- {{InteractiveExample("Wat Demo: grow", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; start with one memory page, and max of 2 pages
  (func $main

    ;; grow memory by 1 page
    ;; grow returns in 1 for success and -1 for failure
    ;; will fail if you change to more more than 1 page
    (memory.grow (i32.const 1))
    call $log ;; log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
``` -->

## Syntax

xx

### Opcodes

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `table.grow` | `????`        |

## Description

xx

## Examples

### Basic usage

xx

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

xx
