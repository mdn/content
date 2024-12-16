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
  - : An object containing compilation options. This parameter is included on the `validate()` method so that it can be used to validate modules when the compilation options are present (for example, to implement feature detection). Properties can include:
    - `builtins` {{optional_inline}}
      - : An array of strings that enables the usage of [WebAssembly JavaScript builtins](/en-US/docs/WebAssembly/JavaScript_builtins) in the compiled Wasm module. The strings define the builtins you want to enable. Currently the only available value is `"js-string"`, which enables JavaScript string builtins.
    - `importedStringConstants` {{optional_inline}}
      - : A string specifying a namespace for imported global string constants. This property needs to be specified if you wish to use imported global string constants in the Wasm module.

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

### Validating a module with WebAssembly JavaScript builtins enabled

This example validates a Wasm module with JavaScript string builtins and imported global string constants enabled, logging `"wasm module valid: true"` to the console if it is valid, and `"wasm module valid: false"` if it isn't. [See it running live](https://mdn.github.io/webassembly-examples/js-builtin-examples/validate/).

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

### Feature detecting WebAssembly JavaScript builtins

To write feature detection code for builtins, a different strategy is needed. When this feature is present, type checks will be stricter than when they are not present — certain rules are imposed on the builtin imports.

Therefore, to detect this feature you can define a module that's _invalid_ with the feature present, and _valid_ without it. You then return `true` when validation fails, to indicate support. A basic module that will achieve this is as follows:

```wasm
(module
  (function (import "wasm:js-string" "cast")))
```

Without builtins, the module is valid, because you can import any function with any signature you want (in this case: no parameters and no return values). With Builtins, the module is invalid, because the now-special-cased `"wasm:js-string" "cast"` function must have a specific signature (an `externref` parameter and a non-nullable `(ref extern)` return value).

You can then try validating this module as before, but note how the result is negated with the `!` operator — remember that builtins are supported if the module is _invalid_:

```js
const compileOptions = {
  builtins: ["js-string"],
};

fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Builtins available: ${!result}`));
```

The above module code is so short that you could just validate the literal bytes. A feature detection function could look like so:

```js
function JsStringBuiltinsSupported() {
  let bytes = new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 2, 23, 1, 14, 119, 97, 115,
    109, 58, 106, 115, 45, 115, 116, 114, 105, 110, 103, 4, 99, 97, 115, 116, 0,
    0,
  ]);
  return !WebAssembly.validate(bytes, { builtins: ["js-string"] });
}
```

> [!NOTE]
> In many cases it is not necessary to feature detect builtins. Another option could be to provide regular imports alongside the builtins, and supporting browsers will just ignore the fallbacks.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
