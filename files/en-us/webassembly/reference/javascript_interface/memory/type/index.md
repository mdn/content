---
title: WebAssembly.Memory.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Memory/type
page-type: webassembly-instance-method
browser-compat: webassembly.api.Memory.type
sidebar: webassemblysidebar
---

The **`type()`** prototype method of the [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) object returns an object describing the type of the memory, including its minimum and maximum page counts and whether it is shared.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

An object with the following properties:

- `minimum`
  - : The minimum size of the memory, in WebAssembly pages (each page is 64KiB).
- `maximum` {{optional_inline}}
  - : The maximum size the memory can grow to, in WebAssembly pages. Not present if no maximum was specified.
- `shared`
  - : A boolean indicating whether the memory is a shared memory. If `true`, the memory's [`buffer`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) is a {{jsxref("SharedArrayBuffer")}}.

## Examples

The following code creates a memory with initial size of 1 page and maximum of 10 pages, then inspects its type:

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
  shared: false,
});
console.log(memory.type());
// { minimum: 1, maximum: 10, shared: false }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
