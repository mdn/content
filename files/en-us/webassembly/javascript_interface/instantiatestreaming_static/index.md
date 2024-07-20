---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
page-type: webassembly-function
browser-compat: webassembly.api.instantiateStreaming_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.instantiateStreaming()`** static method compiles
and instantiates a WebAssembly module directly from a streamed underlying source. This
is the most efficient, optimized way to load Wasm code.

> **Note:** Webpages that have strict [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) might block WebAssembly from compiling and executing modules.
> For more information on allowing WebAssembly compilation and execution, see the [script-src CSP](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Parameters

- `source`
  - : A [`Response`](/en-US/docs/Web/API/Response)
    object or a promise that will fulfill with one, representing the underlying source of
    a Wasm module you want to stream, compile, and instantiate.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/JavaScript_interface/Memory) objects.
    There must be one matching property for each declared import of the compiled module or
    else a
    [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError)
    is thrown.

### Return value

A `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object representing the
  compiled WebAssembly module. This `Module` can be instantiated again or
  shared via [postMessage()](/en-US/docs/Web/API/Worker/postMessage).
- `instance`: A [`WebAssembly.Instance`](/en-US/docs/WebAssembly/JavaScript_interface/Instance) object that contains all
  the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions).

### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, the promise rejects with a
  [`WebAssembly.CompileError`](/en-US/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/en-US/docs/WebAssembly/JavaScript_interface/LinkError), or
  [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/JavaScript_interface/RuntimeError), depending on the cause of the failure.

## Examples

### Instantiating streaming

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also)
directly streams a Wasm module from an underlying source then
compiles and instantiates it, the promise fulfilling with a `ResultObject`.
Because the `instantiateStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response)
object, you can directly pass it a [`fetch()`](/en-US/docs/Web/API/Window/fetch)
call, and it will pass the response into the function when it fulfills.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
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
