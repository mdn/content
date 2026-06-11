---
title: "data: Wasm definition"
short-title: data
slug: WebAssembly/Reference/Definitions/data
page-type: webassembly-instruction
browser-compat: webassembly.definitions.data
sidebar: webassemblysidebar
---

The **`data`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) defines a segment of bytes that can be copied into linear memory.

{{InteractiveExample("Wat Demo: data", "tabbed-taller")}}

```wat interactive-example
(module
  (memory (export "memory") 1)
  (data $greeting1 (i32.const 0) "Hello ")
  (data $greeting2 "World")

  (func (export "init")
    i32.const 6       ;; destination offset in memory
    i32.const 0       ;; offset into the data segment
    i32.const 5       ;; number of bytes to copy
    memory.init $greeting2
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 11);
  console.log(new TextDecoder().decode(memArray));
});
```

In the above example, we specify two `data` definitions with identifiers `$greeting1` and `$greeting2`, containing the strings "Hello " and "World", respectively. The first `data` definition has a memory offset specified (`(i32.const 0)`), so immediately writes the string to the specified [`memory`](WebAssembly/Reference/Definitions/memory) at bytes 0–4. The second `data` definition doesn't have a memory offset specified, so isn't written to memory until the [`memory.init`](/en-US/docs/WebAssembly/Reference/Memory/init) instruction is executed later on.

In the JavaScript, we call the exported `init()` function to write the second data definition into memory, then decode the exported memory buffer and log the result to the console.

## Syntax

```plain
;; Active form, written to memory immediately
data name memory_identifier offset data_string

;; Passive form, written later via memory.init
data name data_string
```

- `data`
  - : The `data` definition type. Must always be included first.
- `name` {{optional_inline}}
  - : An optional identifying name for the data. This must begin with a `$` symbol, for example `$my_data`. If this is omitted, the `data` can be identified (for example when calling `memory.init`) by its index, for example `0` for the first `data` in the wasm script, `1` for the second, etc.
- `memory_identifier` {{optional_inline}}
  - : An identifier representing the `memory` instance to place the data into. This can be one of:
    - `name`
      - : An identifying name [set for the `memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory#name) when it was first defined. This must begin with a `$` symbol and be preceded by a `memory` keyword, for example `(memory $my_memory)`.
    - `index`
      - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) value representing the index number of the memory, for example `0` for the first memory in the module, `1` for the second, etc.
- `offset` {{optional_inline}}
  - : An integer representing the offset at which to start writing the data in the `memory`.
- `data_string`
  - : A string of literal bytes defining the data represented by this `data` instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`memory`](WebAssembly/Reference/Definitions/memory) definition
- [WebAssembly memory instructions](/en-US/docs/WebAssembly/Reference/Memory)
