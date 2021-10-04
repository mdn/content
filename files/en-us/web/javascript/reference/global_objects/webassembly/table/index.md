---
title: WebAssembly.Table
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table
tags:
  - Class
  - JavaScript
  - Reference
  - WebAssembly
  - table
browser-compat: javascript.builtins.WebAssembly.Table
---

{{JSRef}}

The **`WebAssembly.Table()`** object is a JavaScript wrapper object — an array-like structure representing a WebAssembly Table, which stores function references. A table created by JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript and WebAssembly.

> **Note:** Tables can currently only store function references, but this will likely be expanded in the future.

## Constructor

- [`WebAssembly.Table()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table)
  - : Creates a new `Table` object.

## Instance properties

- {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}
  - : Returns the length of the table, i.e. the number of elements.

## Instance methods

- {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}
  - : Accessor function — gets the element stored at a given index.
- {{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}
  - : Increases the size of the Table instance by a specified number of elements.
- {{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}
  - : Sets an element stored at a given index to a given value.

## Examples

### Creating a new WebAssembly Table instance

The following example (see table2.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) and [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) creates a new WebAssembly Table instance with an initial size of 2 elements. We then print out the table length and contents of the two indexes (retrieved via {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} to show that the length is two and both elements are {{jsxref("null")}}.

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

We then create an import object that contains the table:

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

Finally, we load and instantiate a wasm module (table2.wasm) using the {{jsxref("WebAssembly.instantiateStreaming()")}} method.  The table2.wasm module contains two functions (one that returns 42 and another that returns 83) and stores both into elements 0 and 1 of the imported table (see [text representation](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat)).  So after instantiation, the table still has length 2, but the elements now contain callable [Exported WebAssembly Functions](/en-US/docs/WebAssembly/Exported_functions) which we can call from JS.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  function (obj) {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  }
);
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually invoke the referenced function and log the value stored inside it (e.g. `get(0)()` rather than `get(0)`) .

This example shows that we're creating and accessing the table from JavaScript, but the same table is visible and callable inside the wasm instance too.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
