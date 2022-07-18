---
title: WebAssembly.instantiate()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
tags:
  - API
  - JavaScript
  - Method
  - Object
  - Reference
  - WebAssembly
  - instantiate
browser-compat: javascript.builtins.WebAssembly.instantiate
---
{{JSRef}}

The **`WebAssembly.instantiate()`** function allows you to
compile and instantiate WebAssembly code. This function has two overloads:

- The primary overload takes the WebAssembly binary code, in the form of a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) or
  {{jsxref("ArrayBuffer")}}, and performs both compilation and instantiation in one
  step. The returned `Promise` resolves to both a compiled
  {{jsxref("WebAssembly.Module")}} and its first {{jsxref("WebAssembly.Instance")}}.
- The secondary overload takes an already-compiled {{jsxref("WebAssembly.Module")}}
  and returns a `Promise` that resolves to an `Instance` of that
  `Module`. This overload is useful if the `Module` has already
  been compiled.

> **Warning:** This method is not the most efficient way of fetching and
> instantiating wasm modules. If at all possible, you should use the newer
> {{jsxref("WebAssembly.instantiateStreaming()")}} method instead, which fetches,
> compiles, and instantiates a module all in one step, directly from the raw bytecode,
> so doesn't require conversion to an {{jsxref("ArrayBuffer")}}.

## Syntax

### Primary overload — taking wasm binary code

```js
WebAssembly.instantiate(bufferSource, importObject);
```

#### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) or
    {{jsxref("ArrayBuffer")}} containing the binary code of the .wasm module you want to
    compile, or a {{jsxref("WebAssembly.Module")}}.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of the compiled module or
    else a {{jsxref("WebAssembly.LinkError")}} is thrown.

#### Return value

A `Promise` that resolves to a `ResultObject` which contains two
fields:

- `module`: A {{jsxref("WebAssembly.Module")}} object representing the
  compiled WebAssembly module. This `Module` can be instantiated again,
  shared via {{domxref("Worker.postMessage", "postMessage()")}} or [cached in IndexedDB](/en-US/docs/WebAssembly/Caching_modules).
- `instance`: A {{jsxref("WebAssembly.Instance")}} object that contains all
  the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions).

#### Exceptions

- If either of the parameters are not of the correct type or structure,
  the promise rejects with a {{jsxref("TypeError")}}.
- If the operation fails, the promise rejects with a
  {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
  {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.

### Secondary overload — taking a module object instance

```js
WebAssembly.instantiate(module, importObject);
```

#### Parameters

- `module`
  - : The {{jsxref("WebAssembly.Module")}} object to be instantiated.
- `importObject` {{optional_inline}}
  - : An object containing the values to be imported into the newly-created
    `Instance`, such as functions or {{jsxref("WebAssembly.Memory")}} objects.
    There must be one matching property for each declared import of `module` or
    else a {{jsxref("WebAssembly.LinkError")}} is thrown.

#### Return value

A `Promise` that resolves to an {{jsxref("WebAssembly.Instance")}} object.

#### Exceptions

- If either of the parameters are not of the correct type or structure, a
  {{jsxref("TypeError")}} is thrown.
- If the operation fails, the promise rejects with a
  {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}}, or
  {{jsxref("WebAssembly.RuntimeError")}}, depending on the cause of the failure.

## Examples

> **Note:** You'll probably want to use {{jsxref("WebAssembly.instantiateStreaming()")}} in most cases, as it is more efficient than `instantiate()`.

### First overload example

After fetching some WebAssembly bytecode using fetch, we compile and instantiate the
module using the {{jsxref("WebAssembly.instantiate()")}} function, importing a
JavaScript function into the WebAssembly Module in the process. We then call an [Exported WebAssembly function](/en-US/docs/WebAssembly/Exported_functions)
that is exported by the `Instance`.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch('simple.wasm')
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> **Note:** You can also find this example at [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html)
> on GitHub ([view it live also](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Second overload example

The following example (see our [index-compile.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html)
demo on GitHub, and [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) also)
compiles the loaded simple.wasm byte code using the
{{jsxref("WebAssembly.compileStreaming()")}} method and then sends it to a [worker](/en-US/docs/Web/API/Web_Workers_API) using
{{domxref("Worker.postMessage", "postMessage()")}}.

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
  .then((mod) => worker.postMessage(mod));
```

In the worker (see
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js))
we define an import object for the module to use, then set up an event handler to
receive the module from the main thread. When the module is received, we create an
instance from it using the {{jsxref("WebAssembly.instantiate()")}} method and invoke an
exported function from inside it.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log('module received from main thread');
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
