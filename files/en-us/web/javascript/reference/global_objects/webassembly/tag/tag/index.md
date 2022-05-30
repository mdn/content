---
title: WebAssembly.Tag() constructor
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
  - Tag
browser-compat: javascript.builtins.WebAssembly.Tag.Tag
---
{{JSRef}}

The **`WebAssembly.Tag()`** constructor creates a new [`WebAssembly.Tag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) object.

## Syntax

```js
new WebAssembly.Tag(type)
```

### Parameters

- `type`

  - : An object that can contain the following members:

    - `parameters`
      - : An array of [data types](/en-US/docs/WebAssembly/Understanding_the_text_format#types) (`"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"externref"`, `"anyfunc"`).

### Exceptions

- `TypeError`
  - : The `type.parameters` argument is not supplied, does not contain at least one value, or contains an unsupported tag descriptor.

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
