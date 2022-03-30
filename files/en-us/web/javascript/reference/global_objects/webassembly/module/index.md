---
title: WebAssembly.Module
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
tags:
  - Class
  - JavaScript
  - Module
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Module
---
{{JSRef}}

A **`WebAssembly.Module`** object contains stateless WebAssembly code that has already been compiled by the browser — this can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

## Constructor

- {{jsxref("Global_Objects/WebAssembly/Module/Module", "WebAssembly.Module()")}}
  - : Creates a new `Module` object.

## Static properties

- {{jsxref("Global_Objects/WebAssembly/Module/customSections", "WebAssembly.Module.customSections()")}}
  - : Given a `Module` and string, returns a copy of the contents of all custom sections in the module with the given string name.
- {{jsxref("Global_Objects/WebAssembly/Module/exports", "WebAssembly.Module.exports()")}}
  - : Given a `Module`, returns an array containing descriptions of all the declared exports.
- {{jsxref("Global_Objects/WebAssembly/Module/imports", "WebAssembly.Module.imports()")}}
  - : Given a `Module`, returns an array containing descriptions of all the declared imports.

## Examples

### Sending a compiled module to a worker

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also) compiles the loaded `simple.wasm` byte code using the {{jsxref("WebAssembly.compileStreaming()")}} method and then sends the resulting `Module` instance to a [worker](/en-US/docs/Web/API/Web_Workers_API) using {{domxref("Worker/postMessage", "postMessage()")}}.

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =>
  worker.postMessage(mod)
);
```

In the worker (see [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js)) we define an import object for the module to use, then set up an event handler to receive the module from the main thread. When the module is received, we create an instance from it using the {{jsxref("WebAssembly.instantiate()")}} method and invoke an exported function from inside it.

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module received from main thread');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
