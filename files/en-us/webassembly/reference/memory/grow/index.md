---
title: "grow: Wasm text instruction"
short-title: grow
slug: WebAssembly/Reference/Memory/Grow
page-type: webassembly-instruction
browser-compat:
  - webassembly.api.Memory.grow
  - webassembly.multiMemory
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-memory
sidebar: webassemblysidebar
---

The **`grow`** [memory instruction](/en-US/docs/WebAssembly/Reference/Memory) increases the size of the memory instance by a specified number of pages.

The instruction adds the previous size of memory (in pages) to the top of the stack if the operation was successful, or `-1` if the operation failed.
Currently each page is 64KiB.

{{EmbedInteractiveExample("pages/wat/grow.html", "tabbed-taller")}}

## Syntax

Grow default memory

```wasm
;; Grow default memory by a number of pages indicated by the top value on the stack
i32.const 3  ;; Number of pages to grow the memory (3)
memory.grow  ;; Grow the memory (by 3 pages)
;; the top item on the stack will now either be the previous number of pages (success) or `-1` (failure)

;; grow default memory by two pages using an S-function
(memory.grow (i32.const 2))
```

Grow specified memory (if multi-memory supported)

```wasm
;; Grow memory with index 1
i32.const 1 ;; Number of pages to grow specified memory (1)
memory.grow (memory 1) ;; Grow memory index 1

;; Grow memory with name $memory1
i32.const 1  ;; Number of pages to grow specified memory (1)
memory.grow (memory $memory1) ;; Grow $memory1 by 1 page

;; Grow memory with name $memory1 by three pages using an S-function
(memory.grow (memory $memory1) (i32.const 3))
;; Will return -1 as max value is 4!
```

### Instructions and opcodes

| Instruction   | Binary opcode |
| ------------- | ------------- |
| `memory.grow` | `0x40`        |

## Examples

### Growing default memory

The first memory added to a Wasm module is the default memory and has index 0.
We can grow this memory by first adding a variable specifying the amount to grow the memory, and then calling `grow`.

The code below shows a WAT file that demonstrates this:

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2) ;; default memory with one page and max of 2 pages

  (func $main
    ;; grow default memory by 1 page
    i32.const 1
    memory.grow
    call $log ;; log the result (previous no. pages = 1)

    ;; grow default memory, using an S-function
    (memory.grow (i32.const 1))
    call $log ;; log the result (-1: max is 2 pages for default memory declared above!)
  )
  (start $main) ;; call immediately on loading
)
```

Above we didn't need to specify the memory index in the `grow` instruction, but we could have done so using either the name or index (0) of the default memory.
That's shown in the following example.

For completeness, we can use the compiled version of the above file `grow.wasm` with code similar to that shown below (the log function is imported into the module, and called by the module):

```js
start();
async function start() {
  const importObject = {
    console: {
      log(arg) {
        console.log(arg);
      },
    },
  };
  const result = await WebAssembly.instantiateStreaming(
    fetch("grow.wasm"),
    importObject,
  );
}
start();
```

### Growing a specified memory

As memories are defined in a Wasm module they are sequentially allocated an index number from zero.
You can grow a specific memory by specifying the `memory` instruction and the desired index or name (if it has one), after the `grow` instruction.
If you don't specify a particular memory the default memory with index 0 is used.

The module below shows how you might directly reference a memory by index.

```wasm
(module
  (import "console" "log" (func $log (param i32)))
  (memory 1 2)  ;; Default memory with one page and max of 2 pages
  (memory $memory1 1 4)  ;; Memory with index 1, initial 1 page, max 4 pages
  (func $main
    ;; grow memory with index 1 by 1 page
    i32.const 1
    memory.grow (memory 1)
    call $log ;; log the result (previous no. pages = 1)
  )
  (start $main)
)
```

The body of the `$main` function could also have been written using any of the following options:

```wasm
i32.const 1
memory.grow (memory $memory1)  ;; referencing memory by name

;; Using S-functions
(memory.grow (memory 1) (i32.const 1))  ;; reference memory by index
(memory.grow (memory $memory1) (i32.const 1)) ;; reference memory by name
```

We didn't use the default memory in the example.
But you can also choose to specify this index if you want:

```wasm
i32.const 1
memory.grow (memory 0)  ;; referencing memory by index

;; Using S-functions
(memory.grow (memory 0) (i32.const 1))  ;; reference default memory by index
;; We can't reference this particular default memory by name, because it doesn't have one!
```

The WAT files could be loaded using the same JavaScript code as the first example.

## Specifications

{{Specifications}}

## Browser compatibility

> **Note:** `grow` support in Wasm modules matches the grow support in the JavaScript [`Memory.grow()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) API.
> The [multiMemory](#webassembly.multimemory) key indicates versions in which `grow` can be used with a specified memory.

{{Compat}}
