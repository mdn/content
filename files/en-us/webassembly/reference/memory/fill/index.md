---
title: "fill: Wasm text instruction"
short-title: fill
slug: WebAssembly/Reference/Memory/fill
page-type: webassembly-instruction
browser-compat:
  - webassembly.bulk-memory-operations
  - webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`memory.fill`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) sets all bytes in a memory region to a given byte.

This is analogous to [`memset`](https://en.cppreference.com/cpp/string/byte/memset) in C.

{{InteractiveExample("Wat Demo: memory.fill", "tabbed-taller")}}

```wat interactive-example
(module
  (memory $my_mem (export "memory") 1)

  (func (export "fill")
    i32.const 0      ;; memory offset
    i32.const 42     ;; value to fill
    i32.const 6      ;; number of bytes to fill
    memory.fill $my_mem
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.fill();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 6);
  console.log(memArray[5]);
});
```

In the above example, we define an exported memory called `$my_mem` with a maximum size of one page. We then include an exported `fill()` function that fills the first six bytes of `$my_mem` with the value `42`.

In the JavaScript, we call the `fill()` function to populate the exported memory with data, put the exported memory's contents into an array, and log the sixth array element to the console.

## Syntax

```plain
memory.fill dest_memory
```

- `memory.fill`
  - : The `memory.fill` instruction type. Must always be included first.
- `dest_memory` {{optional_inline}}
  - : The identifier for the `memory` you want to fill. This can be one of the following:
    - `name`
      - : An identifying name [set for the `memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory#name) when it was first defined. This must begin with a `$` symbol, for example `$my_mem`.
    - `index`
      - : The `memory`'s index number, for example `0` for the first `memory` in the wasm module, `1` for the second, etc.

    If `dest_memory` is omitted, it defaults to `0`.

### Type

```plain
[dest_offset value length] -> []
```

- `dest_offset`
  - : An integer representing the offset at which to start filling the memory. This will be an [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) or an [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64), to match the [`address_type`](/en-US/docs/WebAssembly/Reference/Definitions/memory#address_type) the `memory` was defined with.
- `value`
  - : An `i32` representing the value to fill the selected bytes with. The `value` is truncated to 8 bits so it can be applied to each byte.
- `length`
  - : An `i32` representing the number of bytes to fill with the `value`. This will be an `i32` or an `i64`, to match the `address_type` the `memory` was defined with.

### Traps

If the indicated memory region is out of bounds, the instruction traps.

### Binary encoding

| Instruction   | Binary format          | Example text => binary              |
| ------------- | ---------------------- | ----------------------------------- |
| `memory.fill` | `0xfc 11:u32 x:memidx` | `memory.fill 0` => `0xfc 0x0b 0x00` |

## Examples

### Fill within default memory

```wat
;; Fill region at offset/range in default memory with 255
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill ;; Fill default memory

;; Fill default memory using an S-expression
(memory.fill (i32.const 200) (i32.const 255) (i32.const 100))
```

### Fill specified memory

```wat
;; Fill specific memory referenced by its index
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory 1) ;; Fill memory with index 1

;; Fill memory referenced by its name
i32.const 200 ;; The pointer to the region to update
i32.const 255 ;; The value to set each byte to (must be < 256)
i32.const 100 ;; The number of bytes to update
memory.fill (memory $memoryName) ;; Fill memory with name "$memoryName"

;; Fill same memory using an S-expression
(memory.fill (memory $memoryName) (i32.const 200) (i32.const 255) (i32.const 100))
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) definition
- [WebAssembly memory instructions](/en-US/docs/WebAssembly/Reference/Memory)
