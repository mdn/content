---
title: "drop: Wasm data instruction"
short-title: drop
slug: WebAssembly/Reference/Data/drop
page-type: webassembly-instruction
browser-compat: webassembly.instructions.data_drop
sidebar: webassemblysidebar
---

The **`data.drop`** [data instruction](/en-US/docs/WebAssembly/Reference/Data) discards the data contained by a passive `data` definition, freeing up its memory, after being used in a [`memory.init`](/en-US/docs/WebAssembly/Reference/Memory/init).

{{InteractiveExample("Wat Demo: data.drop", "tabbed-taller")}}

```wat interactive-example
(module
  (memory (export "memory") 1)
  (data $greeting "Hello")

  (func (export "init")
    i32.const 0       ;; destination offset in memory
    i32.const 0       ;; offset into the data segment
    i32.const 5       ;; number of bytes to copy
    memory.init $greeting
    data.drop $greeting
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const memBuffer = result.instance.exports.memory.buffer;
  const memArray = new Uint8Array(memBuffer, 0, 5);
  console.log(new TextDecoder().decode(memArray));
});
```

In the above example, we define a `memory` and a `data` called `$greeting` that contains the string `Hello`. We then invoke `memory.init` to copy the string over to the `memory`. With this done, the `data` is no longer needed, so we call `data.drop` to free up the memory it was using.

## Syntax

```plain
data.drop identifier
```

- `data.drop`
  - : The `data.drop` instruction type. Must always be included first.
- `identifier`
  - : The identifier for the `data` you want to drop. This can be one of the following:
    - `name`
      - : An identifying name [set for the `data`](/en-US/docs/WebAssembly/Reference/Definitions/data#name) when it was first defined. This must begin with a `$` symbol, for example `$my_data`.
    - `index`
      - : The `data`'s index number, for example `0` for the first `data` in the wasm module, `1` for the second, etc.

### Type

```plain
[] -> []
```

### Binary encoding

| Instruction | Binary format          | Example text => binary            |
| ----------- | ---------------------- | --------------------------------- |
| `data.drop` | `0xfc 9:u32 x:dataidx` | `data.drop 0` => `0xfc 0x09 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory) definition
- [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data) definition
- [WebAssembly memory instructions](/en-US/docs/WebAssembly/Reference/Memory)
