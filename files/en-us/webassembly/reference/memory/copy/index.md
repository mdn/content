---
title: "copy: Wasm text instruction"
short-title: copy
slug: WebAssembly/Reference/Memory/copy
page-type: webassembly-instruction
browser-compat:
  - webassembly.bulk-memory-operations
  - webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`memory.copy`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) copies data from one [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) region to another.

{{InteractiveExample("Wat Demo: memory.copy", "tabbed-taller")}}

```wat interactive-example
(module
  (memory $memory1 1)
  (memory $memory2 (export "memory") 1)
  (data $greeting (memory $memory1) (i32.const 0) "Hello World")

  (func (export "copy")
    i32.const 0       ;; destination memory offset
    i32.const 6       ;; source memory offset
    i32.const 5      ;; number of bytes to copy
    memory.copy $memory2 $memory1
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.copy();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 5);
  console.log(new TextDecoder().decode(memArray));
});
```

In the above example, we define two memories: `$memory1` and `$memory2`, both with a maximum size of one page. The second memory is exported. We then include:

- A [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data) definition that contains the string "Hello World" and immediately copies the entire string into `$memory1`.
- An exported `copy()` function that copies the string "World" from `$memory1` into `$memory2`.

In the JavaScript, we call the `copy()` function to populate the exported memory with data, then decode the exported memory's buffer and log the result to the console.

## Syntax

```plain
memory.copy dest_memory source_memory
```

- `memory.copy`
  - : The `memory.copy` instruction type. Must always be included first.
- `dest_memory` {{optional_inline}}
  - : The identifier for the `memory` you want to copy the data into.
- `source_memory` {{optional_inline}}
  - : The identifier for the `memory` you want to copy the data from.

`dest_memory` and `source_memory` can be one of the following:

- `name`
  - : An identifying name [set for the `memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory#name) when it was first defined. This must begin with a `$` symbol, for example `$my_mem`.
- `index`
  - : The `memory`'s index number, for example `0` for the first `memory` in the wasm module, `1` for the second, etc.

If `dest_memory` or `source_memory` are omitted, they default to `0`.

### Type

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) representing the offset to start writing the copied data to, in the destination memory.
- `source_offset`
  - : An `i32` representing the offset to start copying data from, in the source memory.
- `length`
  - : An `i32` representing the number of bytes to copy.

### Traps

If the source or destination offset are out of bounds, the instruction traps.

### Binary encoding

| Instruction   | Binary format                   | Example text => binary                     |
| ------------- | ------------------------------- | ------------------------------------------ |
| `memory.copy` | `0xfc 10:u32 x:memidx x:memidx` | `memory.copy 0 0` => `0xfc 0x0a 0x00 0x00` |

## Examples

### Copy within default memory

```wat
;; Copy data in default memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy  ;; Copy memory

;; Copy in default memory using an S-expression
(memory.copy (i32.const 50) (i32.const 100) (i32.const 25))
```

### Copy specified memory

```wat
;; Copy data within specific memory from [100, 125] to [50, 75]
i32.const 50 ;; Destination address to copy to
i32.const 100 ;; Source address to copy from
i32.const 25 ;; Number of bytes to copy
memory.copy (memory 2) (memory 2) ;; Copy memory within memory with index 2

;; Copy between memories referenced by their names
i32.const 50 ;; Destination address (in $destMem)
i32.const 100 ;; Source address (in $sourceMem)
i32.const 25 ;; Number of bytes to copy
memory.copy (memory $destMem) (memory $sourceMem) ;; Copy memory from "$sourceMem" to "$destMem"

;; Copy between memories using an S-expression
(memory.copy (memory $destMem) (memory $sourceMem) (i32.const 50) (i32.const 100) (i32.const 25))
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) definition
- [WebAssembly memory instructions](/en-US/docs/WebAssembly/Reference/Memory)
