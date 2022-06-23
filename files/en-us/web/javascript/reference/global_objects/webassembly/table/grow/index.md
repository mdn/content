---
title: WebAssembly.Table.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - WebAssembly
  - grow
  - table
browser-compat: javascript.builtins.WebAssembly.Table.grow
---
{{JSRef}}

The **`grow()`** prototype method of
the {{jsxref("WebAssembly.Table")}} object increases the size of the Table instance by a
specified number of elements.

## Syntax

```js
grow(number)
```

### Parameters

- `number`
  - : The number of elements you want to grow the table by.

### Return value

The previous length of the table.

### Exceptions

If the `grow()` operation fails for whatever reason, a
{{jsxref("RangeError")}} is thrown.

## Examples

### Using grow

The following example creates a new WebAssembly Table instance with an initial size of
2 and a maximum size of 10:

```js
const table = new WebAssembly.Table({ element: "anyfunc", initial: 2, maximum: 10 });
```

Grow the table by 1 using `WebAssembly.grow()`:

```js
console.log(table.length);   // 2
table.grow(1);
console.log(table.length);   // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
