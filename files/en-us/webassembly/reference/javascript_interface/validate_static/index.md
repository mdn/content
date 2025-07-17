---
title: WebAssembly.validate()
slug: WebAssembly/Reference/JavaScript_interface/validate_static
page-type: webassembly-function
browser-compat: webassembly.api.validate_static
sidebar: webassemblysidebar
---

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
  - : An object containing compilation options. This parameter is included on the `validate()` method so that it can be used to validate modules when the compilation options are present (for example, to implement feature detection). Properties can include:
    - `builtins` {{optional_inline}}
      - : An array of strings that enables the usage of [JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins) in the compiled Wasm module. The strings define the builtins you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying a namespace for [imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants). This property needs to be specified if you wish to use imported global string constants in the Wasm module.

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

### Validating a module with JavaScript builtins and global string imports enabled

This example validates a Wasm module with JavaScript string builtins and imported global string constants enabled, logging `"Wasm module valid: true"` to the console if it is valid, and `"Wasm module valid: false"` if it isn't. [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/validate/).

```js
const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Wasm module valid: ${result}`));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
