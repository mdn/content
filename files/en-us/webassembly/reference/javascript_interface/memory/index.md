---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
page-type: webassembly-interface
browser-compat:
  - webassembly.api.Memory
  - webassembly.multiMemory
sidebar: webassemblysidebar
---

The **`WebAssembly.Memory`** object is a resizable {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} that holds raw bytes of memory accessed by a [`WebAssembly.Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance).

Both WebAssembly and JavaScript can create `Memory` objects.
If you want to access the memory created in JS from WebAssembly, or vice versa, you can export the memory from the module to JavaScript or import memory from JavaScript to the module when it is [instantiated](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

Originally you could only perform memory operations on a single memory in the Wasm module, so while multiple `Memory` objects could be created, there wasn't any point doing so.
More recent implementations allow WebAssembly [memory instructions](/en-US/docs/WebAssembly/Reference/Memory) to operate on a specified memory.
For more information see [Multiple memories](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) in _Understanding WebAssembly text format_.

> [!NOTE]
> WebAssembly memory is always in little-endian format, regardless of the platform it's run on. Therefore, for portability, you should read and write multi-byte values in JavaScript using {{jsxref("DataView")}}.

## Constructor

- [`WebAssembly.Memory()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Creates a new `Memory` object.

## Instance properties

- [`Memory.prototype.buffer`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Returns the buffer contained in the memory.

## Instance methods

- [`Memory.prototype.grow()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Increases the size of the memory instance by a specified number of WebAssembly pages (each one is 64KiB in size). Detaches the previous `buffer`.

## Examples

### Creating a new Memory object

There are two ways to get a `WebAssembly.Memory` object. The first way is to construct it from JavaScript. The following snippet creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). Its [`buffer`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) property will return an {{jsxref("ArrayBuffer")}}.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded "memory.wasm" bytecode using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values. Note the use of {{jsxref("DataView")}} to access the memory so we always use little-endian format.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new DataView(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands.setUint32(i * 4, i, true); // WebAssembly is little endian
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

Another way to get a `WebAssembly.Memory` object is to have it exported by a WebAssembly module. This memory can be accessed in the `exports` property of the WebAssembly instance (after the memory is exported within the WebAssembly module). The following example imports a memory exported from WebAssembly with the name `memory`, and then prints out the first element of the memory, interpreted as an {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Creating a shared memory

By default, WebAssembly memories are unshared. You can create a [shared memory](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) from JavaScript by passing `shared: true` in the constructor's initialization object:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

This memory's `buffer` property will return a {{jsxref("SharedArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
