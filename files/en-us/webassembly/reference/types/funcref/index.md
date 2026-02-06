---
title: "funcref: Wasm type"
short-title: funcref
slug: WebAssembly/Reference/Types/funcref
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/types.html#reference-types
sidebar: webassemblysidebar
---

The **`funcref`** value type references a function defined in Wasm, enabling higher-order functions to be used across the Wasm and JavaScript language boundaries.

{{InteractiveExample("Wat Demo: funcref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import forEach() function, which takes an externref and a funcref as params
  (import "js" "forEach" (func $forEach (param externref) (param funcref)))
  ;; Define double() function, which doubles a value, and returns the result
  (func $double (export "double") (param f64) (result f64)
    (f64.mul (local.get 0) (f64.const 2))
  )
  ;; Export doubleArray() function, which takes an externref param, then
  ;; calls the forEach() function, passing it the externref and the double()
  ;; function as params
  (func (export "doubleArray")
    (param $arr externref)
    (call $forEach
      (local.get $arr)
      (ref.func $double)
    )
  )
)
```

```js interactive-example
// Define an array of numbers
const arr = [1, 4, 9, 16, 64];

// Define a forEach function, which runs a callback function on each element of an array
const importObj = {
  js: {
    forEach(array, callback) {
      array.forEach((value) => {
        const result = callback(value);
        console.log(result);
      });
    },
  },
};

// Compile and instantiate the wasm module, importing the importObj namespace
// in the process
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    // Run the exported doubleArray() function, passing it our array
    instance.exports.doubleArray(arr);
  },
);
```

## Syntax

```wat
;; Define imported function callback parameter
(param funcref)
```

## Description

The `funcref` type is used to create a reference to a function created in Wasm, which can then be passed into a function imported from JavaScript. A typical use of this is to enable Wasm functions to be passed into JavaScript functions as callbacks.

## Examples

### Basic `funcref` usage

In this example, we import a custom JavaScript `map()` function into a Wasm module, which accepts an array and a callback function as parameters. The callback function parameter is given a funcref type, meaning it can then be defined inside Wasm and passed into the JavaScript function.

#### JavaScript

First of all, we grab references to a {{htmlelement("p")}} element, which we will output our results into, and an array, which we will later pass into an exported WebAssembly function call.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");
const arr = [1, 4, 9, 16, 64];
```

Next, we create an import object and define a function called `map()` inside it, which takes two parameters, an array and a callback function. Inside, we create a new array (`result`) by passing every value inside the array into the callback function via the built-in JavaScript [`Array.map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function. Finally, we set the result as the value of the output element's `textContent`.

```js live-sample___basic-usage
const importObj = {
  js: {
    map(array, callback) {
      const result = array.map((value) => callback(value));
      output.textContent = result;
    },
  },
};
```

The last step in our JavaScript is to compile and instantiate the Wasm module using [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), importing the `importObj` namespace in the process. When the result is returned, we invoke the Wasm `doubleArray()` function available on the WebAssembly [`Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object, passing it the `arr` array as a parameter.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), importObj).then(
  ({ instance }) => {
    instance.exports.doubleArray(arr);
  },
);
```

#### Wasm

In our Wasm module, we first import the `map()` function from the imported `js` namespace, giving it a reference name of `$map`. The first `param` is given an `externref` type (which represents the array parameter), and the second is given a `funcref` type (which represents the callback parameter).

Next, we define a function called `double()`, which both takes and returns a floating point number parameter. The function body multiplies the parameter by 2, using the [`mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul) instruction.

Finally, we define the exported `doubleArray()` function. Its has a single defined `param` — `$arr` — with an `externref` type, which makes sense, as we are calling it from JavaScript and providing the value there. Inside, we call the imported `map()` function, passing it the `$arr` `externref` and the `double()` function as its parameters.

```wat live-sample___basic-usage
(module
  (import "js" "map" (func $map (param externref) (param funcref)))
  (func $double (export "double") (param f64) (result f64)
    (f64.mul (local.get 0) (f64.const 2))
  )
  (func (export "doubleArray")
    (param $arr externref)
    (call $map
      (local.get $arr)
      (ref.func $double)
    )
  )
)
```

#### Result

The rendered output looks like this:

{{embedlivesample("basic-usage", "100%", 100)}}

The original array has all its values multiplied by `2`, and the resulting new array is output in our `<p>` element. This makes sense: We call the exported `doubleArray()` function from JavaScript. The Wasm module then handles calling our JavaScript `map()` function, passing it the array and the Wasm-defined `double()` callback function so it can apply the callback to each array value via `Array.map()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

xx
