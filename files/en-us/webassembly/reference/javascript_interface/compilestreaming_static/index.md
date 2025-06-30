---
title: WebAssembly.compileStreaming()
slug: WebAssembly/Reference/JavaScript_interface/compileStreaming_static
page-type: webassembly-function
browser-compat: webassembly.api.compileStreaming_static
sidebar: webassemblysidebar
---

The **`WebAssembly.compileStreaming()`** static method compiles a [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) directly from a streamed underlying source.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) function should be used).

> [!NOTE]
> Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### Parameters

- `source`
  - : A [`Response`](/en-US/docs/Web/API/Response) object or a promise that will fulfill with one, representing the underlying source of a Wasm module you want to stream and compile.
- `compileOptions` {{optional_inline}}
  - : An object containing compilation options. Properties can include:
    - `builtins` {{optional_inline}}
      - : An array of strings that enables the usage of [JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins) in the compiled Wasm module. The strings define the builtins you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying a namespace for [imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants). This property needs to be specified if you wish to use imported global string constants in the Wasm module.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) object representing the compiled module.

### Exceptions

- If `source` is not a [`Response`](/en-US/docs/Web/API/Response) or `Promise` resolving to a `Response`, the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/CompileError).
- If the `source` is a `Promise` that rejects, the promise rejects with the error.
- If the `source`'s `Result` has an error (e.g., bad MIME type), the promise rejects with an error.

## Examples

### Compile streaming

The following example (see our [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) also) directly streams a Wasm module from an underlying source then compiles it to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) object. Because the `compileStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response) object, you can directly pass it a `Promise` from calling [`fetch()`](/en-US/docs/Web/API/Window/fetch), without waiting for the promise to fulfill.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

The resulting module instance is then instantiated using
[`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static), and the exported function invoked.

### Enabling JavaScript builtins and global string imports

This example enables JavaScript string builtins and imported global string constants when compiling the Wasm module with `compileStreaming()`, before instantiating it with [`instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) then running the exported `main()` function (which logs `"hello world!"` to the console). [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

WebAssembly.compileStreaming(fetch("log-concat.wasm"), compileOptions)
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.main());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
