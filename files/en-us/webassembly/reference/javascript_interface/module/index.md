---
title: WebAssembly.Module
slug: WebAssembly/Reference/JavaScript_interface/Module
page-type: webassembly-interface
browser-compat: webassembly.api.Module
sidebar: webassemblysidebar
---

A **`WebAssembly.Module`** object contains stateless WebAssembly code that has already been compiled by the browser — this can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

> [!NOTE]
> The `WebAssembly.Module` object is unrelated to the [`Module`](https://emscripten.org/docs/api_reference/module.html) object used in Emscripten.

## Constructor

- [`WebAssembly.Module()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)
  - : Creates a new `Module` object.

## Static methods

- [`WebAssembly.Module.customSections()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
  - : Given a `Module` and string, returns a copy of the contents of all custom sections in the module with the given string name.
- [`WebAssembly.Module.exports()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
  - : Given a `Module`, returns an array containing descriptions of all the declared exports.
- [`WebAssembly.Module.imports()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static)
  - : Given a `Module`, returns an array containing descriptions of all the declared imports.

## Examples

### Sending a compiled module to a worker

The following example compiles the loaded `simple.wasm` byte code using the [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) method and sends the resulting `Module` instance to a [worker](/en-US/docs/Web/API/Web_Workers_API) using {{domxref("Worker/postMessage", "postMessage()")}}.

See the `index-compile.html` [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) or [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

The worker function [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) defines an import object for the module to use. The function then sets up an event handler to receive the module from the main thread. When the module is received, we create an instance from it using the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) method and invoke an exported function from inside it.

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
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
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
