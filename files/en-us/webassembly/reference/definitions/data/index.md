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
  (data $greeting1 (memory 0) (offset i32.const 0) "Hello ")
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

In the above example, we specify two `data` definitions with identifiers `$greeting1` and `$greeting2`, containing the strings "Hello " and "World", respectively. The first `data` definition has a memory offset specified (`(i32.const 0)`), so immediately writes the string to the [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) at bytes 0–4. The second `data` definition doesn't have a memory offset specified, so isn't written to memory until the [`memory.init`](/en-US/docs/WebAssembly/Reference/Memory/init) instruction is executed later on.

In the JavaScript, we call the exported `init()` function to write the second data definition into memory, then decode the exported memory buffer and log the result to the console.

## Syntax

```plain
;; Active form, written to memory on instantiation
data name memory_identifier offset data_string

;; Passive form, written later via memory.init
data name data_string
```

- `data`
  - : The `data` definition type. Must always be included first.
- `name` {{optional_inline}}
  - : An optional identifying name for the data. This must begin with a `$` symbol, for example `$my_data`. If this is omitted, the `data` can be identified (for example when calling `memory.init`) by its index, for example `0` for the first `data` in the wasm module, `1` for the second, etc.
- `memory_identifier` {{optional_inline}}
  - : An identifier representing the `memory` instance to place the data into, which must be preceded by the `memory` keyword to be interpreted as a `memory_identifier`. The identifier can be one of:
    - `name`
      - : An identifying name [set for the `memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory#name) when it was first defined. This must begin with a `$` symbol and be preceded by a `memory` keyword, for example `(memory $my_memory)`.
    - `index`
      - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) value representing the index number of the memory, for example `(memory 0)` for the first memory in the module, `(memory 1)` for the second, etc.

    > [!NOTE]
    > When writing an active form `data` definition, the `offset` must be included, but the `memory_identifier` can be omitted, in which case it defaults to `(memory 0)`.

- `offset` {{optional_inline}}
  - : A value representing the offset at which to start writing the data in the `memory`. This value can be any [constant expression](https://webassembly.github.io/spec/core/valid/instructions.html#valid-constant), meaning that it can include structures like arithmetic expressions as well as numeric values.

    The full syntax includes the `offset` keyword before the value, for example `(offset i32.const 0)`, although the keyword can be omitted in the abbreviated form, for example `(i32.const 0)`.

- `data_string`
  - : A string of literal bytes defining the data represented by this `data` instance.

## Description

A `data` definition defines a segment of bytes that can be copied into linear memory. There are two forms of `data` definition:

- [Active form](#active_form)
- [Passive form](#passive_form)

### Active form

An active data definition is used to define a data segment that is immediately written into memory and then discarded. It references the memory offset the data is to be copied to, and is copied into the specified memory as soon as the module is instantiated. This must include the offset the data is to be copied to, and can also include an identifier for the data and the memory:

```wat
(memory $my_mem (export "memory") 1)
(data $greeting1 (memory $my_mem) (offset i32.const 0) "Hello ")
```

Note that a module can contain multiple memories, which can be identified by their identifying names or by index numbers. In the above example, the following would also work:

```wat
(data $greeting1 (memory 0) (offset i32.const 0) "Hello ")
```

In cases where there is only one memory in the module, or when you want to copy data into the first memory, you can omit the memory identifier, and the data will be copied into the first memory by default. The following version will also work, as long as the `offset` value is specified:

```wat
(memory (export "memory") 1)
(data (offset i32.const 0) "Hello ")
```

> [!NOTE]
> Active data segments are dropped automatically during module instantiation, and therefore are not available to drop via [`data.drop`](/en-US/docs/WebAssembly/Reference/Data/drop).

### Passive form

A passive data segment is used to define a data definition that is not written into memory until later in the code. It doesn't reference the memory the data is to be copied into. For example:

```wat
(memory (export "memory") 1)
(data $greeting "Hello World")
```

Passive data segments are copied into a memory when desired using a [`memory.init`](/en-US/docs/WebAssembly/Reference/Memory/init) instruction:

```wat
i32.const 0       ;; destination offset in memory
i32.const 0       ;; offset into the data segment
i32.const 11      ;; number of bytes to copy
memory.init $greeting
```

The `memory.init` instruction itself specifies an identifier for the data to copy into the memory. This could also be an index number:

```wat
memory.init 0
```

After `memory.init` has been called, the `data` segment is no longer needed, so [`data.drop`](/en-US/docs/WebAssembly/Reference/Data/drop) can be called to free up the memory it was using:

```wat
data.drop $greeting
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`data.drop`](/en-US/docs/WebAssembly/Reference/Data/drop) instruction
- [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) definition
- [WebAssembly memory instructions](/en-US/docs/WebAssembly/Reference/Memory)
