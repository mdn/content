---
title: WebAssembly.Exception constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/Exception
tags:
  - API
  - Constructor
  - Exception
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.Exception.Exception
---
{{JSRef}}

The **`WebAssembly.Exception()`** constructor is used to create a new [`WebAssembly.Exception`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception).

The constructor accepts a [`Tag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) argument and a `payload` array of data fields.
The data types of each of the payload elements must match the corresponding data type specified in the `Tag`.

The constructor may also take an `options` object.
The `options.traceStack` property can be set `true` (by default it is `false`) to indicate that a WASM stack trace may be attached to the exception's [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack) property.

## Syntax

```js
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameters

- `tag`
  - : An {{jsxref("WebAssembly.Tag")}} defining the data types expected for each of the values in the `payload`.
- `payload`
  - : An array of one or more data fields comprising the payload of the exception.
    The elements must match the data types of the corresponding elements in the `tag`.
    If the number of data fields in the payload and their types don't match, a {{jsxref("TypeError")}} exception is thrown.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : An object with the following optional fields:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true` if the `Exception` may have a stack trace attached to its [`stack`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack) property, otherwise `false`.
         This is `false` by default (if `options` or `options.traceStack` are not provided).

### Exceptions

- `TypeError`
  - : The `payload` and `tag` sequences do not have the same number of elements and/or the elements are not of matching types.

## Examples

This example shows the creation of an exception using a simple tag.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

The [`stack` example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/stack#examples) shows the creation of an exception that uses the `options` parameter.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
