---
title: WebAssembly.Table() constructor
slug: WebAssembly/JavaScript_interface/Table/Table
browser-compat: javascript.builtins.WebAssembly.Table.Table
---

{{WebAssemblySidebar}}

The **`WebAssembly.Table()`** constructor creates a new
`Table` object of the given size and element type.

## Syntax

```js-nolint
new WebAssembly.Table(tableDescriptor)
```

### Parameters

- `tableDescriptor`

  - : An object that can contain the following members:

    - `element`
      - : A string representing the type of value to be stored in the table. This can have a value of `"anyfunc"` (functions) or `"externref"` (host references).
    - `initial`
      - : The initial number of elements of the WebAssembly Table.
    - `maximum` {{optional_inline}}
      - : The maximum number of elements the WebAssembly Table is allowed to grow to.

### Exceptions

- If `tableDescriptor` is not of type object, a {{jsxref("TypeError")}} is
  thrown.
- If `maximum` is specified and is smaller than `initial`, a
  {{jsxref("RangeError")}} is thrown.
  - If `tableDescriptor.element` is not one of the [reference types](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), then a {{jsxref("TypeError")}} is thrown.

## Examples

### Creating a new WebAssembly Table instance

The following example creates a `WebAssembly.Table` instance with an initial size of 2
elements. The `WebAssembly.Table` contents are populated using a WebAssembly module and are accessible from JavaScript. When viewing the [live example](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html), open your developer console to display console log messages from the code snippets below.

This example uses the following reference files:

1. `table2.html`: An HTML file containing JavaScript that creates a `WebAssembly.Table` ([source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html))
2. `table2.wasm`: A WebAssembly module imported by the JavaScript code in `table2.html` ([source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat))

In `table2.html`, we create a `WebAssembly.Table`:

```js
const tbl = new WebAssembly.Table({
  initial: 2,
  element: "anyfunc",
});
```

We can retrieve the index contents using [`Table.prototype.get()`](/en-US/docs/WebAssembly/JavaScript_interface/Table/get):

```js
console.log(tbl.length); // a table with 2 elements
console.log(tbl.get(0)); // content for index 0 is null
console.log(tbl.get(1)); // content for index 1 is null
```

Next, we create an import object that contains the `WebAssembly.Table`:

```js
const importObject = {
  js: { tbl },
};
```

Next, we load and instantiate a WebAssembly module. The `table2.wasm` module defines a table containing two functions. The first function returns 42, and the second returns 83:

```wasm
(module
    (import "js" "tbl" (table 2 anyfunc))
    (func $f42 (result i32) i32.const 42)
    (func $f83 (result i32) i32.const 83)
    (elem (i32.const 0) $f42 $f83)
)
```

We instantiate `table2.wasm` using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) method:

```js
const instantiating = WebAssembly.instantiateStreaming(
  fetch("table2.wasm"),
  importObject,
);
```

After instantiating `table2.wasm`, `tbl` is updated with the following:

- table length is still 2
- content for index 0 is now a function which returns 42
- content for index 1 is now a function which returns 83

The items at indexes 0 and 1 of the table are now callable [Exported WebAssembly Functions](/en-US/docs/WebAssembly/Exported_functions). To call them, note that we must add the function invocation operator `()` after the `get()` call:

```js
instantiating.then((obj) => {
  console.log(tbl.length); // 2
  console.log(tbl.get(0)()); // 42
  console.log(tbl.get(1)()); // 83
});
```

While we are creating and accessing the `WebAssembly.Table` from JavaScript, the same `Table` is also visible and callable inside the WebAssembly instance.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
