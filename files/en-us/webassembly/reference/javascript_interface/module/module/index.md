---
title: WebAssembly.Module() constructor
slug: WebAssembly/Reference/JavaScript_interface/Module/Module
page-type: webassembly-constructor
browser-compat: webassembly.api.Module.Module
sidebar: webassemblysidebar
---

A **`WebAssembly.Module()`** constructor creates a new Module
object containing stateless WebAssembly code that has already been compiled by the
browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

The `WebAssembly.Module()` constructor function can be called to
synchronously compile given WebAssembly binary code. However, the primary way to get a
`Module` is through an asynchronous compilation function like
[`WebAssembly.compile()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compile_static).

> [!WARNING]
> Since compilation for large modules can be expensive,
> developers should only use the `Module()` constructor when synchronous
> compilation is absolutely required; the asynchronous
> [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) method should be used at all other times.

> [!NOTE]
> Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
new WebAssembly.Module(bufferSource)
new WebAssembly.Module(bufferSource, compileOptions)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    containing the binary code of the Wasm module you want to compile.
- `compileOptions` {{optional_inline}}
  - : An object containing compilation options. Properties can include:
    - `builtins` {{optional_inline}}
      - : An array of strings that enables the usage of [JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins) in the compiled Wasm module. The strings define the builtins you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying a namespace for [imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants). This property needs to be specified if you wish to use imported global string constants in the Wasm module.

### Exceptions

- If the parameter is not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If compilation fails, the constructor rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/CompileError).
- Some browsers may throw a {{jsxref("RangeError")}}, as they prohibit compilation and instantiation of Wasm with large buffers on the UI thread.

## Examples

### Synchronously compiling a WebAssembly module

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = createWasmModule(bytes);
    WebAssembly.instantiate(mod, importObject).then((result) =>
      result.exports.exported_func(),
    );
  });
```

### Enabling JavaScript builtins and global string imports

This example enables JavaScript string builtins and imported global string constants when compiling a Wasm module via the `Module()` constructor, which is then instantiated with [`instantiate()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static). It then calls the exported `main()` function, which logs `"hello world!"` to the console. [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/module-constructor/).

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
  .then((bytes) => {
    const module = new WebAssembly.Module(bytes, compileOptions);
    WebAssembly.instantiate(module, importObject).then((instance) =>
      instance.exports.main(),
    );
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
