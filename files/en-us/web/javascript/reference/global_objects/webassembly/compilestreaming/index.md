---
title: WebAssembly.compileStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - compile
  - compileStreaming
  - streaming
browser-compat: javascript.builtins.WebAssembly.compileStreaming
---
{{JSRef}}

The **`WebAssembly.compileStreaming()`** function compiles a
{{jsxref("WebAssembly.Module")}} directly from a streamed underlying source.  This
function is useful if it is necessary to a compile a module before it can be
instantiated (otherwise, the {{jsxref("WebAssembly.instantiateStreaming()")}} function
should be used).

## Syntax

```js
WebAssembly.compileStreaming(source)
```

### Parameters

- _source_
  - : A [`Response`](/en-US/docs/Web/API/Response "The Response interface of the Fetch API represents the response to a request.")
    object or a promise that will fulfill with one, representing the underlying source of
    a .wasm module you want to stream and compile.

### Return value

A `Promise` that resolves to a {{jsxref("WebAssembly.Module")}} object
representing the compiled module.

### Exceptions

- If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays), a
  {{jsxref("TypeError")}} is thrown.
- If compilation fails, the promise rejects with a
  {{jsxref("WebAssembly.CompileError")}}.

## Examples

### Compile streaming

The following example (see our [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html)
demo on GitHub, and [view
it live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) also) directly streams a .wasm module from an underlying source then
compiles it to a {{jsxref("WebAssembly.Module")}} object. Because the
`compileStreaming()`  function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response "The Response interface of the Fetch API represents the response to a request.")
object, you can directly pass it a [`WindowOrWorkerGlobalScope.fetch()`](/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch "The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.")
call, and it will pass the response into the function when it fulfills.

```js
var importObject = { imports: { imported_func: arg => console.log(arg) } };

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(module => WebAssembly.instantiate(module, importObject))
.then(instance => instance.exports.exported_func());
```

The resulting module instance is then instantiated using
{{jsxref("WebAssembly.instantiate()")}}, and the exported function invoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly
  JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
