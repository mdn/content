---
title: "init: Wasm memory instruction"
short-title: init
slug: WebAssembly/Reference/Memory/init
page-type: webassembly-instruction
browser-compat: webassembly.instructions.memory_init
sidebar: webassemblysidebar
---

The **`memory.init`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) manually copies the bytes from a passive [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data) definition into a [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory).

{{InteractiveExample("Wat Demo: data", "tabbed-taller")}}

```wat interactive-example
(module
  (memory (export "memory") 1)
  (data $greeting "Hello World")

  (func (export "init")
    i32.const 0       ;; destination offset in memory
    i32.const 0       ;; offset into the data segment
    i32.const 11      ;; number of bytes to copy
    memory.init $greeting
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

In the above example, we specify a `data` definition with the identifier `$greeting`, containing the string "Hello World". In the `init()` function, the `data` definition is written to memory using the `memory.init` instruction.

In the JavaScript, we call the exported `init()` function to write the data definition into memory, then decode the exported memory buffer and log the result to the console.

## Syntax

```plain
memory.init memory_identifier data_identifier
```

- `memory.init`
  - : The `memory.init` instruction type. Must always be included first.

- `memory_identifier` {{optional_inline}}
  - : The identifier for the `memory` you want to copy the `data` into. This can be one of the following:
    - `name`
      - : An identifying name [set for the `memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory#name) when it was first defined. This must begin with a `$` symbol, for example `$my_mem`.
    - `index`
      - : The `memory`'s index number, for example `0` for the first `memory` in the wasm module, `1` for the second, etc.

    If omitted, `memory_identifier` defaults to `0`.

- `data_identifier`
  - : The identifier for the `data` definition you want to copy data from. This can be one of the following:
    - `name`
      - : An identifying name [set for the `data`](/en-US/docs/WebAssembly/Reference/Definitions/data#name) when it was first defined. This must begin with a `$` symbol, for example `$my_data`.
    - `index`
      - : The `data`'s index number, for example `0` for the first `data` in the wasm module, `1` for the second, etc.

### Type

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : An integer representing the offset to start writing the copied data to, in the destination memory. This will be an [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) or an [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64), to match the [`address_type`](/en-US/docs/WebAssembly/Reference/Definitions/memory#address_type) the `memory` was defined with.
- `source_offset`
  - : An `i32` representing the byte offset in the `data` segment to start reading data from.
- `length`
  - : An `i32` representing the number of bytes to copy.

### Traps

The `memory.init` instruction traps if:

- The `dest_offset` plus the `length` exceeds the size of the `memory`.
- The [`data.drop`](/en-US/docs/WebAssembly/Reference/Data/drop) instruction was previously called on the [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data) segment referenced in [`data_identifier`](#data_identifier).
- The `dest_offset`, `source_offset`, or `length` values are negative or invalid types.

### Binary encoding

| Instruction   | Binary format                   | Example text => binary                     |
| ------------- | ------------------------------- | ------------------------------------------ |
| `memory.init` | `0xfc 8:u32 x:memidx x:dataidx` | `memory.init 0 0` => `0xfc 0x08 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) definition
- [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data) definition
