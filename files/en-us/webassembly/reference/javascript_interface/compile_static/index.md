---
title: WebAssembly.compile()
slug: WebAssembly/Reference/JavaScript_interface/compile_static
page-type: webassembly-function
browser-compat: webassembly.api.compile_static
sidebar: webassemblysidebar
---

The **`WebAssembly.compile()`** static method compiles WebAssembly binary code into a [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) object.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) function should be used).

> [!NOTE]
> Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
WebAssembly.compile(bufferSource, compileOptions)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}}
    containing the binary code of the Wasm module you want to compile.
- `compileOptions` {{optional_inline}}
  - : An object containing compilation options. Properties can include:
    - `builtins` {{optional_inline}}
      - : An array of one or more strings that enables the usage of [JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins) in the compiled Wasm module. The strings define the builtins you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying a namespace for [imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants). This property needs to be specified if you wish to use imported global string constants in the Wasm module.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) object
representing the compiled module.

### Exceptions

- If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}},
  the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/CompileError).

## Examples

### Using compile

The following example compiles the loaded simple.wasm byte code using the
`compile()` function and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](/en-US/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> You'll probably want to use
> [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) in most cases, as it is more efficient
> than `compile()`.

### Enabling JavaScript builtins and global string imports

This example enables JavaScript string builtins and imported global string constants when compiling the Wasm module with `compile()`, before instantiating it with [`instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) then running the exported `main()` function (which logs `"hello world!"` to the console). [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile/).

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

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes, compileOptions))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.main());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
