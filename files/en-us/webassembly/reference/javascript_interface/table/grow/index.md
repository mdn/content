---
title: WebAssembly.Table.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Table/grow
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.grow
sidebar: webassemblysidebar
---

The **`grow()`** prototype method of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) object increases the size of the `Table` instance by a specified number of elements, filled with the provided value.

## Syntax

```js-nolint
grow(delta)
grow(delta, value)
```

### Parameters

- `delta`
  - : The number of elements you want to grow the table by.
- `value` {{optional_inline}}
  - : The element to fill the newly-allocated space with.

### Return value

The previous length of the table.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - If the current size added with `delta` exceeds the Table instance's maximum size capacity.
    - If the client doesn't have enough memory for the allocation.
- {{jsxref("TypeError")}}
  - : Thrown if `value` is not a value of the element type of the table.

## Examples

### Using grow

The following example creates a new WebAssembly Table instance with an initial size of
2 and a maximum size of 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Grow the table by 1 element using `Table.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

### Using grow with a value

The following example creates a new WebAssembly `Table` instance with an initial size of
0 and a maximum size of 4, filling it with an object:

```js
const myObject = { hello: "world" };

const table = new WebAssembly.Table({
  element: "externref",
  initial: 0,
  maximum: 4,
});
```

Grow the table by 4 units and fill it with a value using `WebAssembly.grow()`:

```js
table.grow(4, myObject);
console.log(myObject === table.get(2)); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
