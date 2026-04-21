---
title: "global.get: Wasm text instruction"
short-title: global.get
slug: WebAssembly/Reference/Variables/global.get
page-type: webassembly-instruction
browser-compat: webassembly.instructions.global_get
sidebar: webassemblysidebar
---

The **`global.get`** instruction loads the value of a global variable onto the stack.

{{InteractiveExample("Wat Demo: global_get", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var i32 (i32.const 10))
  (func $main

    global.get $var ;; Load the value of $var variable onto the stack
    call $log ;; Log the result

  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
global.get identifier
```

- `global.get`
  - : The `global.get` instruction type. Must always be included first.
- `identifier`
  - : An identifier for the global whose value you want to get. This can be one of the following:
    - `name`
      - : The [identifying name](/en-US/docs/WebAssembly/Reference/Definitions/global#identifier) set for the global when it was declared. This must begin with a `$` symbol, for example `$my_global`.
    - `index`
      - : The global's index number, for example `0` for the first global in the Wasm script, `1` for the second, etc.

### Type

```plain
[] -> [output]
```

- `output`
  - : The global value retrieved by the `global.get` instruction.

### Opcodes

| Instruction  | Binary format | Example text => binary        |
| ------------ | ------------- | ----------------------------- |
| `global.get` | `0x23`        | `global.get 0` => `0x23 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global)
- [`global.set`](/en-US/docs/WebAssembly/Reference/Variables/global.set)
