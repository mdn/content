---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
page-type: webassembly-interface
browser-compat: webassembly.api.Instance
---

{{WebAssemblySidebar}}

A **`WebAssembly.Instance`** object is a stateful, executable instance of a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module). `Instance` objects contain all the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.

## Constructor

- [`WebAssembly.Instance()`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/Instance)
  - : Creates a new `Instance` object.

## Instance properties

- [`exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports)
  - : Returns an object containing as its members all the functions exported from the WebAssembly module instance, to allow them to be accessed and used by JavaScript. Read-only.

## Examples

### Synchronously instantiating a WebAssembly module

The `WebAssembly.Instance()` constructor function can be called to synchronously instantiate a given [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object, for example:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

The preferred way to get an `Instance` is asynchronously, for example using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) function like this:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

This also demonstrates how the `exports` property is used to access exported functions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
