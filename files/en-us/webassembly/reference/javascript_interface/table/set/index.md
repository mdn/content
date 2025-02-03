---
title: WebAssembly.Table.prototype.set()
slug: WebAssembly/Reference/JavaScript_interface/Table/set
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.set
sidebar: webassemblysidebar
---

The **`set()`** prototype method of the [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) object mutates a reference stored at a given index to a different value.

## Syntax

```js-nolint
set(index, value)
```

### Parameters

- `index`
  - : The index of the function reference you want to mutate.
- `value`
  - : The value you want to mutate the reference to. This must be a value of the table's element type. Depending on the type, it may be an [exported WebAssembly function](/en-US/docs/WebAssembly/Guides/Exported_functions), a JavaScript wrapper for an underlying Wasm function, or a host reference.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `index` is greater than or equal to [`Table.prototype.length`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/length), a {{jsxref("RangeError")}} is thrown.
- If `value` is not of the element type of the table, a {{jsxref("TypeError")}} is thrown.

## Examples

### Using Table.set

The following example (see table2.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) and [live version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) creates a new WebAssembly Table instance with an initial size of two references. We then print out the table length and contents of the two indexes (retrieved via [`Table.prototype.get()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/get)) to show that the length is two, and the indexes currently contain no function references (they currently return [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)).

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

We then create an import object that contains a reference to the table:

```js
const importObj = {
  js: { tbl },
};
```

Finally, we load and instantiate a Wasm module (table2.wasm) using [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), print the table length, and invoke the two referenced functions that are now stored in the table. The `table2.wasm` module adds two function references to the table, both of which print out a simple value (see [text representation](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat):

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually invoke the referenced function and log the value stored inside it (e.g. `get(0)()` rather than `get(0)`).

This example shows that we're creating and accessing the table from JavaScript, but the same table is visible and callable inside the Wasm instance, too.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
