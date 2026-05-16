---
title: WebAssembly.Tag() constructor
slug: WebAssembly/Reference/JavaScript_interface/Tag/Tag
page-type: webassembly-constructor
browser-compat: webassembly.api.Tag.Tag
sidebar: webassemblysidebar
---

The **`WebAssembly.Tag()`** constructor creates a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) object instance.

## Syntax

```js-nolint
new WebAssembly.Tag(type)
```

### Parameters

- `type`
  - : An object that can contain the following members:
    - `parameters`
      - : An array of [value types](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format#types) representing the exception type's parameters and their types. The possible types are:
        - `i32`
        - `i64`
        - `f32`
        - `f64`
        - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128)
        - [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)
        - [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref)
        - [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref)

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if at least one of these conditions is true:
    - The `type` parameter is not an object.
    - The `type.parameters` property is not supplied.
    - The `type.parameters` property contains an unsupported data type.

## Examples

### Basic usage

This creates a tag with two values.

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
- [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) type
