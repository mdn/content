---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Memory/grow
page-type: webassembly-instance-method
browser-compat: webassembly.api.Memory.grow
sidebar: webassemblysidebar
---

The **`grow()`** prototype method of the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) object increases the size of the memory instance by a specified number of WebAssembly pages.

## Syntax

```js-nolint
grow(delta)
```

### Parameters

- `delta`
  - : The number of WebAssembly pages you want to grow the memory by (each one is 64KiB in size).

### Return value

The previous size of the memory, in units of WebAssembly pages.

### Exceptions

- {{jsxref("RangeError")}}: If the current size added with `delta` exceeds the Memory instance's maximum size capacity.

## Examples

### Using grow

The following example creates a new WebAssembly Memory instance with an initial size of 1 page (64KiB), and a maximum size of 10 pages (640KiB).

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
});
```

We can then grow the instance by one page like so:

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

Note the return value of `grow()` here is the previous number of WebAssembly pages.

### Detachment upon growing

Every call to `grow` will detach any references to the old `buffer`, even for `grow(0)`!
Detachment means that the {{jsxref("ArrayBuffer")}}'s `byteLength` becomes zero, and it no longer has bytes accessible to JavaScript.
Accessing the `buffer` property after calling `grow`, will yield an `ArrayBuffer` with the correct length.

```js example-bad
const memory = new WebAssembly.Memory({
  initial: 1,
});
const oldMemoryView = new Uint8Array(memory.buffer);
memory.grow(1);
// the array is empty!
console.log(oldMemoryView); // Uint8Array []
```

```js example-good
const memory = new WebAssembly.Memory({
  initial: 1,
});
memory.grow(1);
const currentMemoryView = new Uint8Array(memory.buffer);
// the array is full of zeros
console.log(currentMemoryView); // Uint8Array(131072) [ 0, 0, 0, ... ]
// 131072 = 64KiB * 2
```

For a shared `Memory` instance, the initial `buffer` (which would be a [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) in such case) will not become detached, but rather its length will not be updated. Accesses to the `buffer` property after growing will yield a larger `SharedArrayBuffer` which may access a larger span of memory than the buffer from before growing the `Memory`. Every `SharedArrayBuffer` from the `buffer` property will all refer to the start of the same memory address range, and thus manipulate the same data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
