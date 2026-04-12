---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/Reference/JavaScript_interface/Table/get
page-type: webassembly-instance-method
browser-compat: webassembly.api.Table.get
sidebar: webassemblysidebar
---

The **`get()`** prototype method of the [`WebAssembly.Table()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) object retrieves the element stored at a given index.

## Syntax

```js-nolint
get(index)
```

### Parameters

- `index`
  - : The index of the element you want to retrieve.

### Return value

Depending the element type of the Table, can be a function reference — this is an [exported WebAssembly function](/en-US/docs/WebAssembly/Guides/Exported_functions), a JavaScript wrapper for an underlying Wasm function, or it can be a host reference.

### Exceptions

If _index_ is greater than or equal to [`Table.prototype.length`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/length), a {{jsxref("RangeError")}} is thrown.

## Examples

### Using get

The following example (see [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html) also) compiles and instantiates the loaded table.wasm byte code using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method. It then retrieves the references stored in the exported table.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Note how you've got to include a second function invocation operator at the end of the accessor to actually retrieve the value stored inside the reference (e.g., `get(0)()` rather than `get(0)`) — it is a function rather than a simple value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
