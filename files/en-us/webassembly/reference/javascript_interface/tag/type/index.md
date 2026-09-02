---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Tag/type
page-type: webassembly-instance-method
browser-compat: webassembly.api.Tag.type
sidebar: webassemblysidebar
---

The **`type()`** prototype method of the [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) object returns an object describing the type of the tag, including the sequence of data types associated with it.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

An object with the following properties:

- `parameters`
  - : An array of strings representing the data types associated with the tag. Each string is one of `"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"funcref"`, or `"externref"`.

The returned object and its `parameters` array are newly created. Function references are represented as `"funcref"`, even if `"anyfunc"` was passed to the [`Tag()` constructor](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if a parameter's type cannot be represented by this API, such as a reference to a Wasm struct or array type.

## Examples

This code snippet creates a tag defining two data types and then retrieves them using `type()`:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());
// { parameters: ["i32", "i64"] }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
