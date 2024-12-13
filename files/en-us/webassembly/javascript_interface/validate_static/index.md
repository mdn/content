---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate_static
page-type: webassembly-function
browser-compat: webassembly.api.validate_static
---

{{WebAssemblySidebar}}

The **`WebAssembly.validate()`** static method validates a given [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) of WebAssembly binary
code, returning whether the bytes form a valid Wasm module (`true`) or not
(`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
WebAssembly.validate(bufferSource, compileOptions)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    containing WebAssembly binary code to be validated.
- `compileOptions` {{optional_inline}}
  - : An object containing compilation options. This parameter is included on the `validate()` method so that it can be used to implement feature detection of the compilation options. Properties can include:
    - `builtins`
      - : An array of strings that enables the usage of [WebAssembly JavaScript builtins](/en-US/docs/WebAssembly/JavaScript_builtins) in the compiled wasm module. The strings define the types of builtin you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying an identifier for imported global string constants. This property needs to be specified if you wish to use imported global string constants in the wasm module.

### Return value

A boolean that specifies whether `bufferSource` is valid Wasm code
(`true`) or not (`false`).

### Exceptions

If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer),
a {{jsxref("TypeError")}} is thrown.

## Examples

### Using validate

The following example (see the validate.html [source code](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html),
and [see it live too](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html))
fetches a Wasm module and converts it into a typed array.
The `validate()` method is then used to check whether the module is valid.

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const valid = WebAssembly.validate(bytes);
    console.log(
      `The given bytes are ${valid ? "" : "not "}a valid Wasm module`,
    );
  });
```

### Feature detecting WebAssembly JavaScript builtins

This example validates a wasm module with JavaScript string builtins and imported global string constants enabled, logging `"wasm module valid: true"` to the console if it is valid, and `"wasm module valid: false"` if it isn't. [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/validate/).

```js
const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "#", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`wasm module valid: ${result}`));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
