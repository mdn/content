---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/Reference/JavaScript_interface/Table/length
page-type: webassembly-instance-property
browser-compat: webassembly.api.Table.length
sidebar: webassemblysidebar
---

The read-only **`length`** prototype property of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) object returns the length of the table, i.e., the number of elements in the table.

## Examples

### Using length

The following example creates a new WebAssembly Table instance with an initial size of
2 and a maximum size of 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Grow the table by 1 using `WebAssembly.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
