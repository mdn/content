---
title: "load: Wasm text instruction"
short-title: load
slug: WebAssembly/Reference/Memory/Load
page-type: webassembly-instruction
browser-compat: webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`load`** [memory instructions](/en-US/docs/WebAssembly/Reference/Memory) are used to load a number from a memory onto the stack.

There are `load` instructions for loading from a memory into an `i32`, `i64`, `f32`, and `f64`.
For the integer numbers, there are separate instruction variants for loading a narrower signed number and unsigned number from memory and extending it into a wider type.
For example, you can load an unsigned 8-bit number and convert it into an i32 using `i32.load8_u`.
All the variants are [listed below](#instructions_and_opcodes).

{{EmbedInteractiveExample("pages/wat/load.html", "tabbed-taller")}}

## Syntax

Load from default memory

```wasm
;; Load from default memory at offset specified by value on top of stack
i32.const 0 ;; Stack variable containing memory offset (0) of number to be loaded.
i32.load    ;; Load from specified offset in default memory

;; Load from same location using an S-function
(i32.load (i32.const 0))
```

Load from specified memory (if multi-memory supported)

```wasm
;; Load from memory specified by index
i32.const 0 ;; offset in memory to load from (0)
i32.load (memory 1) ;; load from memory index 1

;; Load from memory specified by name
i32.const 1  ;; offset in memory to load from (1)
i32.load (memory $memory1) ;; load from named memory $memory1

;; Load from memory specified by name using an S-function
(i32.load (memory $memory1) (i32.const 0))
```

### Instructions and opcodes

| Instruction    | Binary opcode |
| -------------- | ------------- |
| `i32.load`     | `0x28`        |
| `i64.load`     | `0x29`        |
| `f32.load`     | `0x2a`        |
| `f64.load`     | `0x2b`        |
| `i32.load8_s`  | `0x2c`        |
| `i32.load8_u`  | `0x2d`        |
| `i32.load16_s` | `0x2e`        |
| `i32.load16_u` | `0x2f`        |
| `i64.load8_s`  | `0x30`        |
| `i64.load8_u`  | `0x31`        |
| `i64.load16_s` | `0x32`        |
| `i64.load16_u` | `0x33`        |
| `i64.load32_s` | `0x34`        |
| `i64.load32_u` | `0x35`        |

## Examples

### Loading items from default memory

The first memory added to a Wasm module is the default memory and has index 0.
We can load from this memory by adding a variable specifying the offset in the default memory of the number to be loaded onto the stack, and then calling `load`.

The code below shows a WAT file that demonstrates this:

```wasm
(module
  ;; Define memory named $memory and export
  (memory $memory 1)  ;; First memory declared is default, with index 0
  (export "memory" (memory $memory))

  ;; Exported function to load first item in default memory
  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    ;; load 0-offset item in memory and return the result
    i32.const 0
    i32.load
  )
)
```

Above we didn't need to specify the memory in the load instruction, but we could have done so using either the name or index of the default memory.
That's shown in the following example.

For completeness, we can use the compiled version of the above file `load_single.wasm` with code similar to that shown below:

```js
// await on the specified .wasm file to be fetched and loaded
const result = await WebAssembly.instantiateStreaming(
  fetch("load_single.wasm"),
);

// Get the exported function that we will call below
const load_first_item_in_mem = result.instance.exports.load_first_item_in_mem;

// Get the exported memory and store 30 at the 0 offset
const memory = result.instance.exports.memory;
const dataView = new DataView(memory.buffer);
dataView.setUint32(0, 30, true);

// Log the result of calling the exported Wasm function
console.log(load_first_item_in_mem(100)); // 30
```

### Loading items from a specified memory

As memories are defined in a Wasm module they are sequentially allocated an index number from zero.
You can load from a specific memory by specifying the `memory` instruction and the desired index or name after the `load` instruction.
If you don't specify a particular memory the default memory with index 0 is used.

The module below shows how you might directly reference a memory by index.

```wasm
(module
  ;; Define memory for the module
  (memory $memory0 1)  ;; First (default) memory with memory index 0 (and 1 page)
  (memory $memory1 1)  ;; Second memory with index 1, named $memory1
  (export "memory" (memory $memory1))  ;; Export $memory1

  ;; Exported function to load first item in default memory
  (func (export "load_first_item_in_mem") (param $num i32) (result i32)
    ;; load 0-offset item in memory index 1 and return the result
    i32.const 0
    i32.load (memory 1)
  )
)
```

The body of the function could also have been written using any of the following options:

```wasm
i32.const 0
i32.load (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(i32.load (memory 1) (i32.const 0))  ;; reference memory by index
(i32.load (memory $memory1) (i32.const 0)) ;; reference memory by name
```

We didn't use the default memory in the example.
But you can also choose to specify this index if you want:

```wasm
i32.const 0
i32.load (memory 0)  ;; referencing memory by index

;; Using S-functions
(i32.load (i32.const 0))
(i32.load (memory 0) (i32.const 0))  ;; reference memory by index
(i32.load (memory $memory0) (i32.const 0)) ;; reference memory by name
```

The WAT files could be loaded using the same JavaScript code as the first example.

## Specifications

{{Specifications}}

## Browser compatibility

> [!NOTE]
> Memory support in Wasm modules matches the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) JavaScript API.
> The [multiMemory](#webassembly.multimemory) key indicates versions in which `load` can be used with a specified memory.

{{Compat}}
