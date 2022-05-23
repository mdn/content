---
title: WebAssembly.Table() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Table.Table
---
{{JSRef}}

The **`WebAssembly.Table()`** constructor creates a new
`Table` object of the given size and element type.

## Syntax

```js
new WebAssembly.Table(tableDescriptor)
```

### Parameters

- _tableDescriptor_

  - : An object that can contain the following members:

    - _element_
      - : A string representing the type of value to be stored in the table. This can have a value of `"anyfunc"` (functions) or `"externref"` (host references).
    - _initial_
      - : The initial number of elements of the WebAssembly Table.
    - _maximum {{optional_inline}}_
      - : The maximum number of elements the WebAssembly Table is allowed to grow to.

### Exceptions

- If `tableDescriptor` is not of type object, a {{jsxref("TypeError")}} is
  thrown.
- If `maximum` is specified and is smaller than `initial`, a
  {{jsxref("RangeError")}} is thrown.

## Examples

### Creating a new WebAssembly Table instance

The following example creates a new WebAssembly Table instance with an initial size of 2
elements. The WebAssembly Table is created and accessed in JavaScript while also visible and callable inside a wasm instance.

This example uses the following reference files: 
1. `table2.html`:  An HTML file containing a script that loads and instantiates an external [`WebAssembly.Table()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table) ([source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) and [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html))
2. `table2.wasm`: The Wasm module being imported in table2.html ([source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat))

In `table2.html`, a `WebAssembly.Table()` is instantiated with the following: 

```js
const tbl = new WebAssembly.Table({
  initial: 2, 
  element: "anyfunc"
});
console.log(tbl.length);  // a table with 2 elements
console.log(tbl.get(0));  // content for index 1 is null
console.log(tbl.get(1));  // content for index 2 is null
```

The index contents are retrieved using {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}}.

Create an import object that contains the table:

```js
const importObject = {
  js: {
    tbl:tbl
  }
};
```

Load and instantiate a wasm module using the {{jsxref("WebAssembly.instantiateStreaming()")}} method:  

```js
WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);  // table length is still 2
  console.log(tbl.get(0)());  // content for index 1 is 42 and is an Exported WebAssembly function; note the additional '()'
  console.log(tbl.get(1)());  // content for index 2 is 83 and is an Exported WebAssembly function; note the additional '()'
});
```

The `table2.wasm` module contains two functions:
1. Return 42 and store this value in index 1 of the `importObject` table
2. Return 83 and store value in index 2 of `importObject` table

After instantiating `table2.wasm`, `tbl` is updated with the following:
- table length is still 2
- content for index 1 is now a function which returns 42
- content for index 2 is now a function which returns 83

The content for indexes 1 and 2 are now callable [Exported WebAssembly Functions](/en-US/docs/WebAssembly/Exported_functions), which are called to change the index's content values. To call the wasm functions directly from `tbl`, append a second function invocation operator at the end of the
accessor:

```js
console.log(tbl.get(0));  // outputs wasm function which returns 42
console.log(tbl.get(0)());  // 42
console.log(tbl.get(1));  // outputs wasm function which returns 83
console.log(tbl.get(1)());  // 83
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
