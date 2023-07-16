---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming
browser-compat: javascript.builtins.WebAssembly.compileStreaming
---

{{WebAssemblySidebar}}

The **`WebAssembly.compileStreaming()`** function compiles a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) directly from a streamed underlying source.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) function should be used).

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
```

### Parameters

- `source`
  - : A [`Response`](/en-US/docs/Web/API/Response) object or a promise that will fulfill with one, representing the underlying source of a Wasm module you want to stream and compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object representing the compiled module.

### Exceptions

- If `source` is not a [`Response`](/en-US/docs/Web/API/Response) or `Promise` resolving to a `Response`, the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError).
- If the `source` is a `Promise` that rejects, the promise rejects with the error.
- If the `source`'s `Result` has an error (e.g. bad MIME type), the promise rejects with an error.

## Examples

### Compile streaming

The following example (see our [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) also) directly streams a Wasm module from an underlying source then compiles it to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object. Because the `compileStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response) object, you can directly pass it a `Promise` from calling [`fetch()`](/en-US/docs/Web/API/fetch), without waiting for the promise to fulfill.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

The resulting module instance is then instantiated using
[`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate), and the exported function invoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
