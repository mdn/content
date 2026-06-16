---
title: WebAssembly.Suspending
slug: WebAssembly/Reference/JavaScript_interface/Suspending
page-type: webassembly-interface
browser-compat: webassembly.api.Suspending
sidebar: webassemblysidebar
---

The **`WebAssembly.Suspending`** object represents a suspending function — an asynchronous ({{jsxref("Promise")}}-based) JavaScript function that, when imported into a Wasm module and called from inside, will result in execution being suspended until the promise resolves.

## Constructor

- [`WebAssembly.Suspending()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Suspending/Suspending)
  - : Creates a new `Suspending` object instance.

## Description

The `Suspending` interface — along with its counterpart [`WebAssembly.promising()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/promising_static) method — enables WebAssembly modules to interact with asynchronous JavaScript host functions.

To use this functionality, you first need to wrap `Promise`-based functions inside a `WebAssembly.Suspending()` constructor call when importing them:

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

This creates a suspending function. No changes are necessary to use it inside the Wasm module: when it is called, execution is suspended until the `Promise` resolves, then resumed with the resolving value available on the stack. However, when exporting a Wasm function that relies on the suspending imported function back to the JavaScript host, you need to wrap the export in a `WebAssembly.promising()` call:

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

This effectively turns the export into a promise, which resolves once the imported JavaScript function resolves and allows the exported Wasm function's execution to complete.

## Examples

### Integrating a promise into a Wasm application

This example shows how to import a JavaScript `Promise`-based function into a Wasm module, call it inside an exported Wasm function, and then call the exported function from the JavaScript host to obtain a result.

#### HTML

In our markup we include a {{htmlelement("button")}} element to start the application, and a {{htmlelement("p")}} element to output the obtained result into.

```html live-sample___jspi
<button>Run application</button>
<hr />
<p></p>
```

#### Wasm

Our Wasm module first imports a `double()` function, which takes an [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) parameter and returns an `i32` result. It then defines an exported `add()` function, which also takes and returns an `i32`. The `add()` function pushes a constant onto the stack and feeds that into the imported `double()` function, then [adds](/en-US/docs/WebAssembly/Reference/Numeric/add) the result to its parameter.

```wat live-sample___jspi
(module
  (import "importObj" "double" (func $double (param i32) (result i32)))
  (func (export "add") (param i32) (result i32)
    (i32.const 20)
    call $double
    (local.get 0)

    i32.add ;; add the two values
  )
)
```

#### JavaScript

In our script, we first grab references to the `<p>` and `<button>` elements:

```js live-sample___jspi
const outputElem = document.querySelector("p");
const btn = document.querySelector("button");
```

Next, we define our `double()` function — this takes a single number as a parameter and returns a `Promise` that resolves with a value equal to the input number doubled after a three-second [timeout](/en-US/docs/Web/API/Window/setTimeout).

```js live-sample___jspi
function double(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num * 2;
      resolve(result);
    }, 3000);
  });
}
```

When defining the module import object, we wrap our `double()` function in a `new WebAssembly.Suspending()` constructor call, to indicate to the browser that when this function is called inside the Wasm module, execution should be suspended until the promise resolves.

```js live-sample___jspi
const importObj = {
  double: new WebAssembly.Suspending(double),
};
```

When the button is clicked, we compile and instantiate the module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method. When the result is returned, we wrap the exported `add()` function in a `WebAssembly.promising()` call, saving the returned promise in a `fromWasm` value.

We then call `fromWasm(10)` to call `add()` with a parameter of `10`. When the promise resolves, we output the result to the `<p>` element.

```js live-sample___jspi
btn.addEventListener("click", () => {
  WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { importObj }).then(
    (result) => {
      const fromWasm = WebAssembly.promising(result.instance.exports.add);
      fromWasm(10).then((result) => {
        outputElem.textContent = result;
      });
    },
  );
});
```

#### Result

{{embedlivesample("jspi", "100%", 100)}}

Press the button to start the application. After three seconds, the value `50` should be written to the paragraph. This is because the exported `add()` function pushes a constant value of `20` onto the stack, then calls the imported `double()` function, which doubles the input number after three seconds, pushing the value `40` onto the stack. That value is then added to the `add()` function's parameter, which is `10`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebAssembly.promising()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/promising_static)
- [WebAssembly](/en-US/docs/WebAssembly) overview
