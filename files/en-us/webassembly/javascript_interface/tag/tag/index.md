---
title: WebAssembly.Tag() constructor
slug: WebAssembly/JavaScript_interface/Tag/Tag
browser-compat: javascript.builtins.WebAssembly.Tag.Tag
---

{{WebAssemblySidebar}}

The **`WebAssembly.Tag()`** constructor creates a new [`WebAssembly.Tag`](/en-US/docs/WebAssembly/JavaScript_interface/Tag) object.

## Syntax

```js-nolint
new WebAssembly.Tag(type)
```

### Parameters

- `type`

  - : An object that can contain the following members:

    - `parameters`
      - : An array of [data types](/en-US/docs/WebAssembly/Understanding_the_text_format#types) (`"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"externref"`, `"anyfunc"`).

### Exceptions

- {{jsxref("TypeError")}}

  - : Thrown if at least one of these conditions are met:
    - The `type` parameter is not an object.
    - The `type.parameters` property is not supplied.
    - The `type.parameters` contains an unsupported data type.

## Examples

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
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
