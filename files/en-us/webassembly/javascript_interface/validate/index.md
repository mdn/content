---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate
browser-compat: javascript.builtins.WebAssembly.validate
---

{{WebAssemblySidebar}}

The **`WebAssembly.validate()`** function validates a given [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) of WebAssembly binary
code, returning whether the bytes form a valid Wasm module (`true`) or not
(`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
```

### Parameters

- `bufferSource`
  - : A [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
    containing WebAssembly binary code to be validated.

### Return value

A boolean that specifies whether `bufferSource` is valid Wasm code
(`true`) or not (`false`).

### Exceptions

If `bufferSource` is not a [typed array](/en-US/docs/Web/JavaScript/Typed_arrays) or [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer),
a {{jsxref("TypeError")}} is thrown.

## Examples

### Using validate

The following example (see the validate.html [source code](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/validate.html),
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview page
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
