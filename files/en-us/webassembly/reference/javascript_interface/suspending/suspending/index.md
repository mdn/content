---
title: WebAssembly.Suspending() constructor
short-title: WebAssembly.Suspending()
slug: WebAssembly/Reference/JavaScript_interface/Suspending/Suspending
page-type: webassembly-constructor
browser-compat: webassembly.api.Suspending.Suspending
sidebar: webassemblysidebar
---

The **`WebAssembly.Suspending()`** constructor creates a new [`Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending) object instance representing a suspending function.

## Syntax

```js-nolint
new WebAssembly.Suspending(function)
```

### Parameters

- `function`
  - : A reference to an asynchronous ({{jsxref("Promise")}}-based) JavaScript function.

### Return value

A new `Suspending` object instance.

### Exceptions

- [`WebAssembly.SuspendError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/SuspendError)
  - : The corresponding exported function was not wrapped in a [`WebAssembly.promising()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/promising_static) call.
- {{jsxref("TypeError")}}
  - : The referenced `function` is not callable.

## Examples

### Basic usage

```js
function someAsyncFunction() {
  fetch("https://example.com").then((result) => {
    // ...
  });
}

const importObj = {
  someAsyncFunction: new WebAssembly.Suspending(someAsyncFunction),
};
```

See [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending) for a full working example and explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebAssembly.Suspending`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
- [`WebAssembly.promising()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/promising_static)
- [WebAssembly](/en-US/docs/WebAssembly) overview
