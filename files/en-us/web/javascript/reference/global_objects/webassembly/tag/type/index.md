---
title: WebAssembly.Tag.prototype.type()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/type
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - WebAssembly
  - getArg
  - Exception
browser-compat: javascript.builtins.WebAssembly.Tag.type
---
{{JSRef}}

The **`type()`** prototype method of the [`Tag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag) object can be used to get the sequence of data types associated with the tag.

## Syntax

```js
type()
```

### Parameters

None

### Return value

An object with a property named `parameters` that references the array of data types associated with this [`Tag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag).

This is a copy of the `type` object that was originally passed into the [`Tag()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Tag/Tag).

## Examples

This code snippet creates a tag defining two data types and then exports them using `type()`.
The result is printed to the console:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());

// Console output:
// Object { parameters: (2) […] }
//   parameters: Array [ "i32", "i64" ]
//   <prototype>: Object { … }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
