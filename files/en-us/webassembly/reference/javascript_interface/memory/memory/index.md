---
title: WebAssembly.Memory() constructor
slug: WebAssembly/Reference/JavaScript_interface/Memory/Memory
page-type: webassembly-constructor
browser-compat: webassembly.api.Memory.Memory
sidebar: webassemblysidebar
---

The **`WebAssembly.Memory()`** constructor creates a new `Memory` object whose [`buffer`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) property is a resizable {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} that holds the raw bytes of memory accessed by a [`WebAssembly.Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance).

A memory object created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly, provided that the code constructed the object, or has been given the object.

Both WebAssembly and JavaScript can create `Memory` objects. If you want to access the memory created in JS from Wasm or vice versa, you can pass a reference to the memory from one side to the other.

## Syntax

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### Parameters

- `memoryDescriptor`

  - : An object that can contain the following members:

    - `initial`
      - : The initial size of the WebAssembly Memory, in units of WebAssembly pages.
    - `maximum` {{optional_inline}}
      - : The maximum size the WebAssembly Memory is allowed to grow to, in units of
        WebAssembly pages. When present, the `maximum` parameter acts as a hint
        to the engine to reserve memory up front. However, the engine may ignore or clamp
        this reservation request. Unshared WebAssembly memories don't need to set a
        `maximum`, but shared memories do.
    - `shared` {{optional_inline}}
      - : A boolean value that defines whether the memory is a shared memory or not. If
        set to `true`, it is a shared memory. The default is `false`.

> [!NOTE]
> A WebAssembly page has a constant size of 65,536 bytes, i.e., 64KiB.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if at least one of these conditions is met:
    - `memoryDescriptor` is not an object.
    - `initial` is not specified.
    - `shared` is present and `true`, yet `maximum` is not specified.
- {{jsxref("RangeError")}}
  - : Thrown if at least one of these conditions is met:
    - `maximum` is specified and is smaller than `initial`.
    - `initial` exceeds 65,536 (2^16). 2^16 pages is 2^16 \* 64KiB = 4GiB bytes, which is the maximum range that a Wasm module can address, as Wasm currently only allows 32-bit addressing.
    - Allocation fails. This may occur due to attempting to allocate too much at once, or if the User Agent is otherwise out of memory.

## Examples

### Creating a new Memory instance

There are two ways to get a `WebAssembly.Memory` object: construct it from JavaScript, or have it exported by a WebAssembly module.

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). The example fetches and instantiates the loaded memory.wasm bytecode using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values. The `Memory` object's [`buffer`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) property will return an {{jsxref("ArrayBuffer")}}.

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

### Creating a shared memory

By default, WebAssembly memories are unshared.
You can create a [shared memory](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories)
from JavaScript by passing `shared: true` in the constructor's initialization object:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

This memory's `buffer` property will return a {{jsxref("SharedArrayBuffer")}}.

## Specifications

The `shared` attribute is only documented in [the Threading proposal for WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) and not part of the official specs.

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
