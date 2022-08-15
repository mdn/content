---
title: WebAssembly.Memory() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Memory.Memory
---
{{JSRef}}

The **`WebAssembly.Memory()`** constructor creates a new `Memory` object whose {{jsxref("WebAssembly/Memory/buffer", "buffer")}} property is a resizable {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} that holds the raw bytes of memory accessed by a {{jsxref("WebAssembly.Instance")}}.

A memory object created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly, provided that the code constructed the object, or has been given the object.

Both WebAssembly and JavaScript can create `Memory` objects. If you want to access the memory created in JS from Wasm or vice versa, you can pass a reference to the memory from one side to the other.

## Syntax

```js
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

> **Note:** A WebAssembly page has a constant size of 65,536 bytes, i.e., 64KiB.

### Exceptions

- If `memoryDescriptor` is an object, a {{jsxref("TypeError")}} is thrown.
- If `initial` is not specified, a {{jsxref("TypeError")}} is thrown.
- If `maximum` is specified and is smaller than `initial`, a {{jsxref("RangeError")}} is thrown.
- If `shared` is present and `true`, yet `maximum` is not specified, a {{jsxref("TypeError")}} is thrown.

## Examples

### Creating a new Memory instance

There are two ways to get a `WebAssembly.Memory` object: construct it from JavaScript, or have it exported by a WebAssembly module.

The following example (see [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) on GitHub, and [view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) creates a new WebAssembly Memory instance with an initial size of 10 pages (640KiB), and a maximum size of 100 pages (6.4MiB). The example fetches and instantiates the loaded memory.wasm bytecode using the {{jsxref("WebAssembly.instantiateStreaming()")}} function, while importing the memory created in the line above. It then stores some values in that memory, exports a function, and uses the exported function to sum those values. The `Memory` object's {{jsxref("WebAssembly/Memory/buffer", "buffer")}} property will return an {{jsxref("ArrayBuffer")}}.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), { js: { mem: memory } })
.then((obj) => {
  const summands = new Uint32Array(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands[i] = i;
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

### Creating a shared memory

By default, WebAssembly memories are unshared.
You can create a [shared memory](/en-US/docs/WebAssembly/Understanding_the_text_format#shared_memories)
from JavaScript by passing `shared: true` in the constructor's initialization object:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true
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
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
