---
title: "memory: Wasm definition"
short-title: memory
slug: WebAssembly/Reference/Definitions/memory
page-type: webassembly-instruction
browser-compat: webassembly.definitions.memory
sidebar: webassemblysidebar
---

The **`memory`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) declares a block of linear memory in units of 64KB pages.

{{InteractiveExample("Wat Demo: memory", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $my_mem 1 2) ;; start with one memory page, and max of 2 pages
  (func $main

    ;; grow memory by 1 page
    ;; grow returns in 1 for success and -1 for failure
    ;; will fail if you grow to more than 2 pages
    (memory.grow $my_mem (i32.const 1))
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
memory name min max
```

- `memory`
  - : The `memory` definition type. Must always be included first.
- `name` {{optional_inline}}
  - : An optional identifying name for the table. This must begin with a `$` symbol, for example `$my_mem`. If this is omitted, the `memory` can be identified (for example when calling `memory.grow`) by its index, for example `0` for the first `memory` in the wasm script, `1` for the second, etc.
- `min`
  - : The minimum number of 64KB pages in the `memory`, which is also the initial number of pages.
- `max` {{optional_inline}}
  - : The maximum number of 64KB pages in the `memory`.

## Description

WebAssembly memories provide a mechanism for Wasm modules to store and process strings and other non-numeric data types. The `memory` definition itself initializes the data store, while [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data) definitions are used to define data to be stored in the memory. For example:

```wat
(module
  (memory $my_mem 1 2)
  (data $greeting (i32.const 0) "Hello world")
  ;; ...
)
```

Each `memory` is defined as a number of "pages", each one 64KB in size. After the optional identifying name, the two number values define the minimum (and initial) number of pages, and the maximum number of pages the memory can contain. A Wasm module can contain multiple memories, which each one identifiable by its identifying name, or by its index in the module (`0` for the first `memory` in the wasm script, `1` for the second, etc.)

Once a `memory` has been created, there are several [memory instructions](/en-US/docs/WebAssembly/Reference/Memory) available for manipulating it. You can find more details about using Wasm memories in [WebAssembly memory](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory).

### Manipulating Wasm memories from JavaScript

WebAssembly memories can be exported from a Wasm module:

```wat
(module
  (memory (export "memory") 1)
  (data $greeting (i32.const 0) "Hello world")
  ;; ...
)
```

Over in the JavaScript host, they are then available in the relevant [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object, for example:

```js
WebAssembly.instantiateStreaming(fetch("module.wasm")).then((result) => {
  const mem = result.instance.exports.memory;
  // ...
});
```

The memory is represented by a JavaScript [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) object instance.

You can also create a new `memory` using the JavaScript [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory) constructor and import it into a Wasm module.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly memory instructions](/en-US/docs/WebAssembly/Reference/Memory)
- [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript API
