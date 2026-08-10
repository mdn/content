---
title: WebAssembly.Exception constructor
slug: WebAssembly/Reference/JavaScript_interface/Exception/Exception
page-type: webassembly-constructor
browser-compat: webassembly.api.Exception.Exception
sidebar: webassemblysidebar
---

The **`WebAssembly.Exception()`** constructor is used to create a new [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) object instance.

## Syntax

```js-nolint
new Exception(tag, payload)
new Exception(tag, payload, options)
```

### Parameters

- `tag`
  - : A [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) instance defining the data types expected for each of the values in the `payload`.
- `payload`
  - : An array of one or more data fields comprising the payload of the exception.
    The elements must match the data types of the corresponding elements in the `tag`.
    If the number of data fields in the payload and their types don't match, a {{jsxref("TypeError")}} exception is thrown.
- `options` {{optional_inline}} {{non-standard_inline}}
  - : An object with the following optional fields:
    - `traceStack` {{optional_inline}} {{non-standard_inline}}
      - : `true` if the `Exception` may have a stack trace attached to its [`stack`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack) property, otherwise `false`.
        Defaults to `false`.

### Exceptions

- `TypeError`
  - : The `payload` and `tag` sequences do not have the same number of elements and/or the elements are not of matching types.

## Description

The `Exception()` constructor accepts a [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag), an array of values, and an `options` object as arguments.
The tag uniquely defines the _type_ of an exception, including the order of its arguments and their data types.
The same tag that was used to create the `Exception` is required to access the arguments of a thrown exception (using [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

## Examples

### Basic usage

You would not normally use this constructor to manually create a Wasm exception. Instead, a `WebAssembly.Exception` object is normally created when handling Wasm exceptions, for example:

```js
WebAssembly.instantiateStreaming(fetch("module.wasm"), { env }).then(
  (result) => {
    try {
      // Cause function to throw
      result.instance.exports.throw(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        const errorCode = e.getArg(myErrorTag, 0); // 0 = first payload value
        console.log("Error code:", errorCode); // 42
      } else {
        throw e; // throw other errors
      }
    }
  },
);
```

For a working example, see the [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction reference page.

### Manual usage

This example shows manual creation of an `WebAssembly.Exception` instance.

```js
// Create tag and use it to create an exception
const tag = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
const exception = new WebAssembly.Exception(tag, [42, 42.3]);
```

> [!NOTE]
> The [`stack` example](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/stack#examples) shows the creation of an exception that uses the `options` parameter.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
