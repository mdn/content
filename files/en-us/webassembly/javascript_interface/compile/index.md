---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile
browser-compat: javascript.builtins.WebAssembly.compile
---

{{WebAssemblySidebar}}

The **`WebAssembly.compile()`** function compiles WebAssembly binary code into a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object.
This function is useful if it is necessary to compile a module before it can be instantiated (otherwise, the [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) function should be used).

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}}
    containing the binary code of the Wasm module you want to compile.

### Return value

A `Promise` that resolves to a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object
representing the compiled module.

### Exceptions

- If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or {{jsxref("ArrayBuffer")}},
  the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError).

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

> **Note:** You'll probably want to use
> [`WebAssembly.compileStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming) in most cases, as it is more efficient
> than `compile()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
