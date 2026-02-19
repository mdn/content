---
title: "externref: Wasm type"
short-title: externref
slug: WebAssembly/Reference/Types/externref
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/types.html#reference-types
sidebar: webassemblysidebar
---

The **`externref`** value type references a JavaScript value, enabling it to be given to a Wasm module without the need for copying or serializing.

{{InteractiveExample("Wat Demo: externref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import custom double() and built-in console.log() functions
  ;; double param defined as external value via externref
  (import "obj" "double" (func $double (param externref) (result i32)))
  (import "console" "log" (func $log (param i32)))

  ;; Define logDouble() function
  (func (export "logDouble")
    ;; Expected param is externref
    (param $num externref)

    ;; Call double(), passing it $num externref as param
    (call $double (local.get $num))
    ;; Call console.log, with double() return value as param
    (call $log)
  )
)
```

```js interactive-example
// Define double() function inside obj
const obj = {
  double: function (num) {
    return num * 2;
  },
};

// Compile and instantiate Wasm module, importing console and obj namespaces
// Call exported logDouble() function, passing it the number 8
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  console,
  obj,
}).then((result) => result.instance.exports.logDouble(8));
```

## Syntax

```wat
;; Define imported external function parameter
(param externref)

;; Define named function parameter
(param $num externref)
```

## Description

The `externref` type is used to reference values defined in JavaScript from inside Wasm modules. Any value type can be referenced, which is very useful when importing functions into WebAssembly that manipulate DOM nodes, write to canvas contexts, or manipulate image data. There is no longer the need to represent data in appropriate formats (for example, serialize objects) before it is sent over to Wasm.

WebAssembly code cannot directly access the JavaScript value and must either store it in a `global`/[`table`](/en-US/docs/WebAssembly/Reference/Definitions/table), or pass it to an imported JavaScript function.

### Garbage collection

When a Wasm module holds a reference to an object defined in JavaScript, that object cannot be garbage collected until Wasm drops the reference. Holding references for too long can create memory leaks — for example if you store an `externref` in a [Table](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table). It is good practice to drop the references when they are no longer needed.

## Examples

### Basic `externref` usage

In this example, we import two custom JavaScript functions into a Wasm module and use them inside a Wasm function that is then exported. The function parameters are all defined in JavaScript and are directly referenced using `externref`.

#### JavaScript

First of all, we define our two functions — `double()` and `output()` — inside a JavaScript object called `obj`. The first one takes a number as an argument and returns a number that is double the input value. The second one takes an element reference and a value, and assigns the value to the element's `textContent`. We also grab a reference to an HTML {{htmlelement("p")}} element, which will have a value output into it.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const obj = {
  double: function (num) {
    return num * 2;
  },
  output: function (elem, val) {
    elem.textContent = val;
  },
};

const output = document.querySelector("p");
```

Next, we compile and instantiate the Wasm module using [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), importing the `obj` namespace in the process. When the result is returned, we invoke the Wasm `outputDouble()` function available on the WebAssembly [`Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object.

```js live-sample___basic-usage
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { obj }).then(
  (result) => {
    result.instance.exports.outputDouble(8, output);
  },
);
```

#### Wasm

Over in our Wasm module, we first import the `double()` and `output()` functions from the imported `obj` namespace, giving them reference names of `$double` and `$output`. Note how the first `param` in each case is given an `externref` type. This is because these params are provided by JavaScript when the exported `outputDouble()` function is called. The `output()` function's second `param` is not an `externref`; it is an `i32`, provided as the result of the `double()` function when called from inside the Wasm module.

Next, we define the exported `outputDouble()` function. Its two `params` — `$num` and `$elem` — are `externref` types, which makes sense, as we are calling it from JavaScript and providing the values there. Inside, we define a local variable called `$doublenum`, call the imported `double()` function, passing it the `$num` `externref` as its parameter, and assign its return value to `$doublenum`. Finally, we complete the `outputDouble()` function by calling the imported `output()` function, passing it the `$elem` `externref` as its first parameter, and the `$doublenum` value as its second parameter.

```wat live-sample___basic-usage
(module
  (import "obj" "double" (func $double (param externref) (result i32)))
  (import "obj" "output" (func $output (param externref) (param i32)))
  (func (export "outputDouble")
    (param $num externref)
    (param $elem externref)

    (local $doublenum i32)

    (call $double (local.get $num))
    (local.set $doublenum)

    (call $output (local.get $elem) (local.get $doublenum))
  )
)
```

#### Result

The rendered output looks like this:

{{embedlivesample("basic-usage", "100%", 100)}}

The value `16` is displayed inside the output `<p>` element. This makes sense, as we call the exported `outputDouble()` Wasm function from JavaScript, passing it the number `8` and a reference to the `<p>` as its arguments. Inside the Wasm module, the `outputDouble()` function uses the imported `double()` and `output()` functions to double the number's value, and set it as the `textContent` of the specified element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)
- [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) definition
