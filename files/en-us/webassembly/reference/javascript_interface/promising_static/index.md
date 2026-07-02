---
title: WebAssembly.promising()
slug: WebAssembly/Reference/JavaScript_interface/promising_static
page-type: webassembly-function
browser-compat: webassembly.api.promsing_static
sidebar: webassemblysidebar
---

The **`WebAssembly.promising()`** static method is used to wrap an exported Wasm function that relies on an asychronous operation (that is, an imported suspending function created via the [`WebAssembly.Suspending()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending) constructor), turning it into a {{jsxref("Promise")}}.

See [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending) for an explanation of how this functionality works.

## Syntax

```js-nolint
WebAssembly.promising(function)
```

### Parameters

- `function`
  - : A reference to an exported Wasm function, typically available on the [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object available in the fulfilled value of a method such as [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

### Return value

A function that wraps the original function passed into the `promising()` call, and can itself be called. The wrapper function takes the same arguments as the wrapped function, and returns a promise that fulfills with the wrapped function's results.

### Exceptions

- {{jsxref("TypeError")}}
  - : The referenced `function` is not callable.

## Examples

### Basic usage

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { importObj }).then(
  (result) => {
    const fromWasm = WebAssembly.promising(
      result.instance.exports.exportedFunc,
    );
    fromWasm().then((result) => {
      // ...
    });
  },
);
```

See [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending) for a full working example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
- [`WebAssembly.Suspending()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending) constructor
- [WebAssembly](/en-US/docs/WebAssembly) overview
