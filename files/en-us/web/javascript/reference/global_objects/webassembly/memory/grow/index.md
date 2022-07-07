---
title: WebAssembly.Memory.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - WebAssembly
  - grow
  - memory
browser-compat: javascript.builtins.WebAssembly.Memory.grow
---
{{JSRef}}

The **`grow()`** prototype method of the {{jsxref("WebAssembly.Memory")}} object increases the size of the memory instance by a specified number of WebAssembly pages.

## Syntax

```js
grow(pageIncrease)
```

### Parameters

- `pageIncrease`
  - : The number of WebAssembly pages you want to grow the memory by (each one is 64KiB in size).

### Return value

The previous size of the memory, in units of WebAssembly pages.

### Exceptions

- {{jsxref("RangeError")}}: If the current size added with `pageIncrease` exceeds the Memory instance's maximum size capacity.

## Examples

### Using grow

The following example creates a new WebAssembly Memory instance with an initial size of 1 page (64KiB), and a maximum size of 10 pages (640KiB).

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10
});
```

We can then grow the instance by one page like so:

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage);  // "1"
console.log(memory.grow(1));                           // "1"
console.log(memory.buffer.byteLength / bytesPerPage);  // "2"
```

Note the return value of `grow()` here is the previous number of WebAssembly pages.

### Detachment upon growing

Every call to `grow` will detach any references to the old `buffer`, even for `grow(0)`!
Detachment means that the {{jsxref("ArrayBuffer")}}'s `byteLength` becomes zero, and it no longer has bytes accessible to JavaScript.
Accessing the `buffer` property after calling `grow`, will yield an `ArrayBuffer` with the correct length.

```js example-bad
const memory = new WebAssembly.Memory({
  initial: 1
});
const oldMemoryView = new Uint8Array(memory.buffer);
memory.grow(1);
// the array is empty!
console.log(oldMemoryView); // Uint8Array []
```

```js example-good
const memory = new WebAssembly.Memory({
  initial: 1
});
memory.grow(1);
const currentMemoryView = new Uint8Array(memory.buffer);
// the array is full of zeros
console.log(currentMemoryView); // Uint8Array(131072) [ 0, 0, 0, ... ]
// 131072 = 64KiB * 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
