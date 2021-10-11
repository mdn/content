---
title: Exported WebAssembly functions
slug: WebAssembly/Exported_functions
tags:
  - Guide
  - JavaScript
  - WebAssembly
  - export
  - exported functions
  - exported wasm functions
  - wasm
---
{{WebAssemblySidebar}}

Exported WebAssembly functions are how WebAssembly functions are represented in JavaScript. This article describes what they are in a little more detail.

## Exported... what?

Exported WebAssembly functions are basically just JavaScript wrappers that represent WebAssembly functions in JavaScript. When you call them, you get some activity in the background to convert the arguments into types that wasm can work with (for example converting JavaScript numbers to Int32), the arguments are passed to the function inside your wasm module, the function is invoked, and the result is converted and passed back to JavaScript.

You can retrieve exported WebAssembly functions in two ways:

- By calling [`Table.prototype.get()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) on an existing table.
- By accessing a function exported from a wasm module instance via [`Instance.exports`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports).

Either way, you get the same kind of wrapper for the underlying function.  From a JavaScript point of view, it's as if every wasm function _is_ a JavaScript function too — but they are encapsulated by the exported wasm function object instance and there are only limited ways to access them.

## An example

Let's look at an example to clear things up (you can find this on GitHub as [table-set.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html); see it [running live also](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), and check out the wasm [text representation](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat)):

```js
var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(obj => {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
  otherTable.set(0,tbl.get(0));
  otherTable.set(1,tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

Here we create a table (`otherTable`) from JavaScript using the {{jsxref("WebAssembly.Table")}} constructor, then we load table.wasm into our page using the {{jsxref("WebAssembly.instantiateStreaming()")}} method.

We then get the function exported from the module, retrieve the functions it references via [`tbl.get()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) and log the result of invoking each one to the console. Next, we use `set()` to make the `otherTable` table contain references to the same functions as the `tbl` table.

To prove this, we then retrieve these references back from `otherTable` and print their results to console too, which gives the same results.

## They are real functions

In the previous example, the return value of each [`Table.prototype.get()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) call is an exported WebAssembly function — exactly what we have been talking about.

It is worth noting that these are real JavaScript functions, in addition to being wrappers for WebAssembly functions. If you load the above example in a [WebAssembly-supporting browser](/en-US/docs/WebAssembly#browser_compatibility), and run the following lines in your console:

```js
var testFunc = otherTable.get(0);
typeof testFunc;
```

you'll get the result `function` returned. You can then go on to do pretty much anything to this function that you can do to other [functions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript — [`call()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), etc. `testFunc.toString()` returns an interesting result:

```js
function 0() {
    [native code]
}
```

This gives you more of an idea of its wrapper-type nature.

Some other particulars to be aware of with exported WebAssembly functions:

- Their [length](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property is the number of declared arguments in the wasm function signature.
- Their [name](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property is the `toString()` result of the function's index in the wasm module.
- If you try to call a exported wasm function that takes or returns an i64 type value, it currently throws an error because JavaScript currently has no precise way to represent an i64. This may well change in the future though — a new int64 type is being considered for future standards, which could then be used by wasm.
