---
title: WebAssembly.Memory
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Memory
---
{{JSRef}}

The **`WebAssembly.Memory`** object is a resizable {{jsxref("ArrayBuffer")}} or [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) that holds the raw bytes of memory accessed by a {{jsxref("WebAssembly.Instance")}}.

A memory object created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly, provided that the code constructed the object, or has been given the object.

## Constructor

- {{jsxref("WebAssembly.Memory/Memory", "WebAssembly.Memory()")}}
  - : Creates a new `Memory` object.

## Instance properties

- {{jsxref("WebAssembly.Memory.prototype.buffer", "Memory.prototype.buffer")}}
  - : An accessor property that returns the buffer contained in the memory.

## Instance methods

- {{jsxref("WebAssembly.Memory.prototype.grow()", "Memory.prototype.grow()")}}
  - : Increases the size of the memory instance by a specified number of WebAssembly pages (each one is 64KB in size). Detaches the previous `buffer`.

## Examples

### Creating a new Memory object

There are two ways to get a `WebAssembly.Memory` object. The first way is to construct it from JavaScript. The following snippet creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). Its {{jsxref("WebAssembly.Memory.prototype.buffer", "buffer")}} property will return an {{jsxref("ArrayBuffer")}}.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100
});
```

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) fetches and instantiates the loaded memory.wasm bytecode using the {{jsxref("WebAssembly.instantiateStreaming()")}} method, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), { js: { mem: memory } })
.then(obj => {
  const u32 = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    u32[i] = i;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

The second way to get a WebAssembly.Memory object is to have it exported by a WebAssembly module. This memory can be accessed in the `exports` property of the WebAssembly instance (after the memory is exported within the Web Assembly module). The following example imports a memory exported from WebAssembly with the name `memory`, and then prints out the first element of the memory, interpreted as an {{jsxref{"Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm"))
.then(obj => {
  const u32 = new Uint32Array(obj.instance.exports.memory.buffer);
  console.log(u32[0]);
});
```

### Creating a shared memory

By default, WebAssembly memories are unshared. You can create a [shared memory](/en-US/docs/WebAssembly/Understanding_the_text_format#shared_memories) from JavaScript by passing `shared: true` in the constructor's initialization object:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true
});
```

This memory's `buffer` property will return a {{jsxref("SharedArrayBuffer")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
