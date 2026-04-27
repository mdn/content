---
title: WebAssembly.Table.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Table/type
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.type
sidebar: webassemblysidebar
---

The **`type()`** prototype method of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) object returns an object describing the type of the table, including its element type and size bounds.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

An object with the following properties:

- `element`
  - : A string representing the type of reference stored in the table. Currently one of `"anyfunc"` (function references) or `"externref"` (host references).
- `minimum`
  - : The minimum number of elements in the table.
- `maximum` {{optional_inline}}
  - : The maximum number of elements the table can grow to. Not present if no maximum was specified.

## Examples

The following code creates a table with initial size of 1 and no maximum, then inspects its type:

```js
const table = new WebAssembly.Table({ initial: 1, element: "anyfunc" });
console.log(table.type());
// { element: "anyfunc", minimum: 1 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
