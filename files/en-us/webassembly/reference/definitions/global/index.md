---
title: "global: Wasm definition"
short-title: global
slug: WebAssembly/Reference/Definitions/global
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`global`** definition declares a new global variable.

{{InteractiveExample("Wat Demo: global", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))

  ;; Import a global variable from js
  (global $from_js (import "env" "from_js") i32)

  ;; Create a global variable
  (global $from_wasm (mut i32) (i32.const 10))

  (func $main
    ;; Set $from_wasm to a different value
    i32.const 20
    global.set $from_wasm

    ;; Load both global variables onto the stack
    global.get $from_js
    global.get $from_wasm

    i32.add ;; Add up both globals
    call $log ;; Log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
const from_js = new WebAssembly.Global({ value: "i32", mutable: false }, 5);
await WebAssembly.instantiateStreaming(fetch(url), {
  console,
  env: { from_js },
});
```

## Syntax

```plain
global identifier type initial_value
```

- `global`
  - : The `global` instruction type. Must always be included first.
- `identifier` {{optional_inline}}
  - : An identifying name for the global. This must begin with a `$` symbol, for example `$my_global`.
- `type`
  - : The type of global to create. This can consist of one or two separate values:
    - `mut` {{optional_inline}}
      - : The `mut` flag. If included, the global is mutable — it can be set to a different value after initialization via the [`global.set`](/en-US/docs/WebAssembly/Reference/Variables/global.set) instruction.
    - `data_type`
      - : The data type of the global. This can be one of the following:
        - `i32`
        - `i64`
        - `f32`
        - `f64`
        - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128)
        - [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)
        - [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref)
- `initial_value`
  - : The initializer for the new global. Its value must be a literal or a [`global.get`](/en-US/docs/WebAssembly/Reference/Variables/global.get) of another global, and its type must be the same as the declared [`type`](#type).

## Description

The WebAssembly `global` definition enables globally-scoped variables to be defined inside a Wasm module. Global variables can be:

- Retrieved via [`global.get`](/en-US/docs/WebAssembly/Reference/Variables/global.get) and used from anywhere inside the module.
- Mutated via [`global.set`](/en-US/docs/WebAssembly/Reference/Variables/global.set), provided the [`mut`](#mut) flag was included when the global was first initialized. Attempting to mutate a non-mutable variable results in a validation error.
- Exported to pass them into JavaScript, provided the global in question does not contain a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) (SIMD) type.

  For example:

  ```wat
  (global $my_global (mut i32) (i32.const 0))
  (export "my_global" (global $my_global))
  ```

### Creating globals from JavaScript

It is also possible to create a Wasm global from within the JavaScript host using the {{jsxref("WebAssembly.Global.Global", "WebAssembly.Global()")}} constructor then import it into the module.

For example:

```js
const myGlobal = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

const { instance } = await WebAssembly.instantiateStreaming(
  fetch("example.com/module"),
  {
    env: { myGlobal },
  },
);
```

### Sharing globals between modules

It isn't possible to share a reference to a global initialized inside a Wasm module. If you were to export it and then import it into another module, the second module would get its own separate copy, and the scope wouldn't be shared.

To share global state between multiple modules, you need to create the global inside the JavaScript host, and then import it into the modules.

For example:

```js
const shared = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

const modA = await instantiate(bytesA, { env: { shared } });
const modB = await instantiate(bytesB, { env: { shared } });
```

## See also

- [`global.get`](/en-US/docs/WebAssembly/Reference/Variables/global.get)
- [`global.set`](/en-US/docs/WebAssembly/Reference/Variables/global.set)
