---
title: WebAssembly.Global() constructor
slug: WebAssembly/JavaScript_interface/Global/Global
browser-compat: javascript.builtins.WebAssembly.Global.Global
---

{{WebAssemblySidebar}}

A **`WebAssembly.Global()`** constructor creates a new `Global` object representing a global variable instance, accessible from both JavaScript and importable/exportable across one or more [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) instances.
This allows dynamic linking of multiple modules.

## Syntax

```js-nolint
new WebAssembly.Global(descriptor, value)
```

### Parameters

- `descriptor`

  - : An object, which contains two properties:

    - `value`: A string representing the
      data type of the global. This can be any one of:
      - `i32`: A 32-bit integer.
      - `i64`: A 64-bit integer. (In JavaScript, this is represented as a {{jsxref("BigInt")}})
      - `f32`: A 32-bit floating point number.
      - `f64`: A 64-bit floating point number.
      - `v128`: A 128-bit vector.
      - `externref`: A host reference.
      - `anyfunc`: A function reference.
    - `mutable`: A boolean value that determines whether the global is
      mutable or not. By default, this is `false`.

- `value`
  - : The value the variable contains. This can be any value, as long as its type matches the variable's data type.
    If no value is specified, a typed 0 value is used where the value of `descriptor.value` is one of `i32`, `i64`, `f32`, or `f64`, and `null` is used if `descriptor.value` is `externref` or `anyfunc` (as specified by the [`DefaultValue` algorithm](https://webassembly.github.io/spec/js-api/#defaultvalue)).

## Examples

### Creating a new Global instance

The following example shows a new global instance being created using the `WebAssembly.Global()` constructor.
It is being defined as a mutable `i32` type, with a value of 0.

The value of the global is then changed, first to `42` using the `Global.value` property, and then to 43 using the `incGlobal()` function exported out of the `global.wasm` module (this adds 1 to whatever value is given to it and then returns the new value).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}<br>`
      : `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  output.innerHTML += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  },
);
```

> **Note:** You can see the example [running live on GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html);
> see also the [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
- [Import/Export mutable globals proposal](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
