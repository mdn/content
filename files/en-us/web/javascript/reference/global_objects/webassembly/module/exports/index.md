---
title: WebAssembly.Module.exports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
tags:
  - API
  - JavaScript
  - Method
  - Module
  - Object
  - Reference
  - WebAssembly
  - exports
browser-compat: javascript.builtins.WebAssembly.Module.exports
---
{{JSRef}}

The **`WebAssembly.Module.exports()`** function returns an
array containing descriptions of all the declared exports of the given
`Module`.

## Syntax

```js
WebAssembly.Module.exports(module)
```

### Parameters

- `module`
  - : A {{jsxref("WebAssembly.Module")}} object.

### Return value

An array containing objects representing the exported functions of the given module.

### Exceptions

If module is not a {{jsxref("WebAssembly.Module")}} object instance, a
{{jsxref("TypeError")}} is thrown.

## Examples

### Using exports

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also)
compiles the loaded simple.wasm byte code using the
{{jsxref("WebAssembly.compileStreaming()")}} method and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](/en-US/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
  .then((mod) => worker.postMessage(mod));
```

In the worker (see
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js))
we define an import object for the module to use, then set up an event handler to
receive the module from the main thread. when the module is received, we create an
instance from it using the {{jsxref("WebAssembly.Instantiate()")}} method, invoke an
exported function from inside it, then show how we can return information on the
available exports on a module using `WebAssembly.Module.exports`.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log('module received from main thread');
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });

  const exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

The `exports[0]` output looks like this:

```js
{ name: "exported_func", kind: "function" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
