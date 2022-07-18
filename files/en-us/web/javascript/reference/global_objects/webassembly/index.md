---
title: WebAssembly
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly
tags:
  - API
  - JavaScript
  - Namespace
  - Object
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly
---
{{JSRef}}

The **`WebAssembly`** JavaScript object acts as the namespace for all [WebAssembly](/en-US/docs/WebAssembly)-related functionality.

Unlike most other global objects, `WebAssembly` is not a constructor (it is not a function object). You can compare it to {{jsxref("Math")}}, which is also a namespace object for mathematical constants and functions, or to {{jsxref("Intl")}} which is the namespace object for internationalization constructors and other language-sensitive functions.

## Description

The primary uses for the `WebAssembly` object are:

- Loading WebAssembly code, using the {{jsxref("WebAssembly.instantiate()")}} function.
- Creating new memory and table instances via the {{jsxref("WebAssembly.Memory()")}}/{{jsxref("WebAssembly.Table()")}} constructors.
- Providing facilities to handle errors that occur in WebAssembly via the {{jsxref("WebAssembly.CompileError()")}}/{{jsxref("WebAssembly.LinkError()")}}/{{jsxref("WebAssembly.RuntimeError()")}} constructors.

## Constructor properties

- [`WebAssembly.CompileError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError)
  - : Indicates an error during WebAssembly decoding or validation.
- [`WebAssembly.Global()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global)
  - : Represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more {{jsxref("WebAssembly.Module")}} instances. This allows dynamic linking of multiple modules.
- [`WebAssembly.Instance()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance)
  - : Is a stateful, executable instance of a {{jsxref("WebAssembly.Module")}}
- [`WebAssembly.LinkError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError)
  - : Indicates an error during module instantiation (besides [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) from the start function).
- [`WebAssembly.Memory()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/Memory)
  - : An object whose {{jsxref("WebAssembly/Memory/buffer","buffer")}} property is a resizable {{jsxref("ArrayBuffer")}} that holds the raw bytes of memory accessed by a WebAssembly `Instance`.
- [`WebAssembly.Module()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module)
  - : Contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.
- [`WebAssembly.RuntimeError()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError)
  - : Error type that is thrown whenever WebAssembly specifies a [trap](https://webassembly.github.io/spec/core/exec/index.html).
- [`WebAssembly.Table()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table)
  - : An array-like structure representing a WebAssembly Table, which stores [references](https://webassembly.github.io/spec/core/syntax/types.html#syntax-reftype), such as function references.
- [`WebAssembly.Tag()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag)
  - : An object that represents a type of WebAssembly exception.
- [`WebAssembly.Exception()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/Exception)
  - : A WebAssembly exception object that can be thrown, caught, and rethrown both within and across WebAssembly/JavaScript boundaries.

## Static methods

- {{jsxref("WebAssembly.instantiate()")}}
  - : The primary API for compiling and instantiating WebAssembly code, returning both a `Module` and its first `Instance`.
- {{jsxref("WebAssembly.instantiateStreaming()")}}
  - : Compiles and instantiates a WebAssembly module directly from a streamed underlying source, returning both a `Module` and its first `Instance`.
- {{jsxref("WebAssembly.compile()")}}
  - : Compiles a {{jsxref("WebAssembly.Module")}} from WebAssembly binary code, leaving instantiation as a separate step.
- {{jsxref("WebAssembly.compileStreaming()")}}
  - : compiles a {{jsxref("WebAssembly.Module")}} directly from a streamed underlying source, leaving instantiation as a separate step.
- {{jsxref("WebAssembly.validate()")}}
  - : Validates a given typed array of WebAssembly binary code, returning whether the bytes are valid WebAssembly code (`true`) or not (`false`).

## Examples

### Stream a .wasm module then compile and instantiate it

The following example (see our [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html) demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html) also) directly streams a .wasm module from an underlying source then compiles and instantiates it, the promise fulfilling with a `ResultObject`. Because the `instantiateStreaming()` function accepts a promise for a [`Response`](/en-US/docs/Web/API/Response) object, you can directly pass it a [`fetch()`](/en-US/docs/Web/API/fetch) call, and it will pass the response into the function when it fulfills.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
  .then((obj) => obj.instance.exports.exported_func());
```

The `ResultObject`'s `.instance` property is then accessed, and the contained exported function invoked.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
