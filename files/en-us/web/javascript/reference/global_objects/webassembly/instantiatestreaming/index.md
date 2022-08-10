---
title: WebAssembly.instantiateStreaming()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - instantiate
  - instantiateStreaming
  - streaming
browser-compat: javascript.builtins.WebAssembly.instantiateStreaming
---
{{JSRef}}

The **`WebAssembly.instantiateStreaming()`** function compiles
and instantiates a WebAssembly module directly from a streamed underlying source. This
is the most efficient, optimized way to load wasm code.

## Syntax

```js
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameters

- `source`
  - : A [`Response`](/en-US/docs/Web/API/Response)
    object or a promise that will fulfill with one, representing the underlying source of
    a .wasm module you want to stream, compile, and instantiate.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of the compiled module or
    else a
    [`WebAssembly.LinkError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError)
    is thrown.

### Return value

A `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A {{jsxref("WebAssembly.Module")}} object representing the
  compiled WebAssembly module. This `Module` can be instantiated again or
  shared via [postMessage()](/en-US/docs/Web/API/Worker/postMessage).
- `instance`: A {{jsxref("WebAssembly.Instance")}} object that contains all
  the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions).

### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, the promise rejects with a
  {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
  {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.

## Examples

### Instantiating streaming

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also)
directly streams a .wasm module from an underlying source then
compiles and instantiates it, the promise fulfilling with a `ResultObject`.
Because the `instantiateStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response)
object, you can directly pass it a [`fetch()`](/en-US/docs/Web/API/fetch)
call, and it will pass the response into the function when it fulfills.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
  .then((obj) => obj.instance.exports.exported_func());
```

The `ResultObject`'s instance member is then accessed, and the contained
exported function invoked.

> **Note:** For this to work, `.wasm` files should be returned
> with an `application/wasm` MIME type by the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
