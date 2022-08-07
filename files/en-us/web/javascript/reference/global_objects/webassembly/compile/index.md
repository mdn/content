---
title: WebAssembly.compile()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - compile
browser-compat: javascript.builtins.WebAssembly.compile
---
{{JSRef}}

The **`WebAssembly.compile()`** function compiles WebAssembly
binary code into a {{jsxref("WebAssembly.Module")}} object. This function is useful if
it is necessary to a compile a module before it can be instantiated (otherwise, the
{{jsxref("WebAssembly.instantiate()")}} function should be used).

## Syntax

```js
WebAssembly.compile(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) or {{jsxref("ArrayBuffer")}}
    containing the binary code of the .wasm module you want to compile.

### Return value

A `Promise` that resolves to a {{jsxref("WebAssembly.Module")}} object
representing the compiled module.

### Exceptions

- If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) or {{jsxref("ArrayBuffer")}},
  the promise rejects with a {{jsxref("TypeError")}}.
- If compilation fails, the promise rejects with a
  {{jsxref("WebAssembly.CompileError")}}.

## Examples

### Using compile

The following example compiles the loaded simple.wasm byte code using the
`compile()` function and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using [postMessage()](/en-US/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

fetch('simple.wasm')
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> **Note:** You'll probably want to use
> {{jsxref("WebAssembly.compileStreaming()")}} in most cases, as it is more efficient
> than `compile()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
