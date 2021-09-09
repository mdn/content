---
title: WebAssembly.Table.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - WebAssembly
  - get
  - table
browser-compat: javascript.builtins.WebAssembly.Table.get
---
{{JSRef}}

The **`get()`** prototype method of
the {{jsxref("WebAssembly.Table()")}} object retrieves a function reference stored at a
given index.

## Syntax

```js
get(index)
```

### Parameters

- _index_
  - : The index of the function reference you want to retrieve.

### Return value

A function reference — this is an [exported WebAssembly function](/en-US/docs/WebAssembly/Exported_functions), a
JavaScript wrapper for an underlying wasm function.

### Exceptions

If _index_ is greater than or equal
to {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}, a
{{jsxref("RangeError")}} is thrown.

## Examples

### Using get

The following example (see [table.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html)
on GitHub, and [view it
live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html) also) compiles and instantiates the loaded table.wasm byte code using the
{{jsxref("WebAssembly.instantiateStreaming()")}} method. It then retrieves the
references stored in the exported table.

```js
WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(function(obj) {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
});
```

Note how you've got to include a second function invocation operator at the end of the
accessor to actually retrieve the value stored inside the reference (e.g.
`get(0)()` rather than `get(0)`) — it is a function rather than a
simple value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly
  JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
