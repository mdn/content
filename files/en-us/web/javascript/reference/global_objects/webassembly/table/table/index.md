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

The following example creates a `WebAssembly.Table` instance with an initial size of 2
elements. The `WebAssembly.Table` contents are populated using a WebAssembly module and is accessible using Javascript. When viewing the [live example](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html), open your developer console to display console logs from the code snippets below. 

This example uses the following reference files: 
1. `table2.html`:  An HTML file containing a script that loads and instantiates a [`WebAssembly.Table`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table) ([source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html))
2. `table2.wasm`: A WebAssembly module imported by the JavaScript code in table2.html ([source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat))

In `table2.html`, a `WebAssembly.Table` is created: 

```js
const tbl = new WebAssembly.Table({
  initial: 2, 
  element: "anyfunc"
});
console.log(tbl.length);  // a table with 2 elements
console.log(tbl.get(0));  // content for index 0 is null
console.log(tbl.get(1));  // content for index 1 is null
```

We retrieve the index contents using {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}}.

Next, we create an import object that contains the `WebAssembly.Table`:

```js
const importObject = {
  js: {
    tbl:tbl
  }
};
```

Load and instantiate `table2.wasm` using the {{jsxref("WebAssembly.instantiateStreaming()")}} method:  

```js
WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);  // table length is still 2
  console.log(tbl.get(0)());  // content for index 0 is 42 and is an Exported WebAssembly function; note the additional '()'
  console.log(tbl.get(1)());  // content for index 1 is 83 and is an Exported WebAssembly function; note the additional '()'
});

```
The `table2.wasm` module contains two functions:
1. Return 42 and store this value in index 0 of the `importObject` table
2. Return 83 and store value in index 1 of `importObject` table

```wasm
(module
    (import "js" "tbl" (table 2 anyfunc))
    (func $f42 (result i32) i32.const 42)
    (func $f83 (result i32) i32.const 83)
    (elem (i32.const 0) $f42 $f83)
)
```

After instantiating `table2.wasm`, `tbl` is updated with the following:
- table length is still 2
- content for index 0 is now a function which returns 42
- content for index 1 is now a function which returns 83

The content for indexes 0 and 1 are now callable [Exported WebAssembly Functions](/en-US/docs/WebAssembly/Exported_functions), which are called to change the index's content values. To call the WebAssembly functions directly from `tbl`, append a second function invocation operator at the end of the accessor:

```js
console.log(tbl.get(0));  // outputs wasm function which returns 42
console.log(tbl.get(0)());  // 42
console.log(tbl.get(1));  // outputs wasm function which returns 83
console.log(tbl.get(1)());  // 83
```

This example shows that while we are creating and accessing the `WebAssembily.Table` from JavaScript, the same `Table` is visible and callable inside the WebAssembily instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
