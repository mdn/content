---
title: WebAssembly.Module() constructor
slug: WebAssembly/JavaScript_interface/Module/Module
browser-compat: javascript.builtins.WebAssembly.Module.Module
---

{{WebAssemblySidebar}}

A **`WebAssembly.Module()`** constructor creates a new Module
object containing stateless WebAssembly code that has already been compiled by the
browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.

The `WebAssembly.Module()` constructor function can be called to
synchronously compile given WebAssembly binary code. However, the primary way to get a
`Module` is through an asynchronous compilation function like
[`WebAssembly.compile()`](/en-US/docs/WebAssembly/JavaScript_interface/compile).

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

> **Warning:** Since compilation for large modules can be expensive,
> developers should only use the `Module()` constructor when synchronous
> compilation is absolutely required; the asynchronous
> [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming) method should be used at all other times.

```js-nolint
new WebAssembly.Module(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    containing the binary code of the Wasm module you want to compile.

#### Exceptions

- If the parameter is not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If compilation fails, the constructor rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError).
- Some browsers may throw a {{jsxref("RangeError")}}, as they prohibit compilation and instantiation of Wasm with large buffers on the UI thread.

## Examples

### Synchronously compiling a WebAssembly module

```js
const importObject = {
  imports: {
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
