---
title: "global.set: Wasm text instruction"
short-title: global.set
slug: WebAssembly/Reference/Variables/global.set
page-type: webassembly-instruction
browser-compat: webassembly.instructions.global_get
sidebar: webassemblysidebar
---

The **`global.set`** instruction sets the values of a global variable.

{{InteractiveExample("Wat Demo: global_set", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (global $var (mut i32) (i32.const 0))
  (func $main
    i32.const 10 ;; load a number onto the stack
    global.set $var ;; set the $var

    global.get $var ;; load $var onto the stack
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

```plain
global.set identifier
```

- `global.set`
  - : The `global.set` instruction type. Must always be included first.
- `identifier`
  - : An identifier for the global whose value you want to set. This can be one of the following:
    - `name`
      - : The [identifying name](/en-US/docs/WebAssembly/Reference/Definitions/global#identifier) set for the global when it was first initialized. This must begin with a `$` symbol, for example `$my_global`.
    - `index`
      - : The global's index number, for example `0` for the first global in the Wasm script, `1` for the second, etc.

### Type

```plain
[new_value] -> []
```

- `new_value`
  - : The new value set for the global. For the `global.set` instruction to succeed, the global must be mutable (the [`mut`](/en-US/docs/WebAssembly/Reference/Definitions/global#mut) flag was set when it was declared), and the `new_value` must have the same [`data_type`](/en-US/docs/WebAssembly/Reference/Definitions/global#data_type) as the global.

### Opcodes

| Instruction  | Binary format | Example text => binary        |
| ------------ | ------------- | ----------------------------- |
| `global.set` | `0x24`        | `global.set 0` => `0x24 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global)
- [`global.get`](/en-US/docs/WebAssembly/Reference/Variables/global.get)
