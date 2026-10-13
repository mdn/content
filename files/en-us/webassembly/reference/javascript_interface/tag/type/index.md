---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Tag/type
page-type: webassembly-instance-method
browser-compat: webassembly.api.Tag.type
sidebar: webassemblysidebar
---

The **`type()`** method of the [`Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) object can be used to get the sequence of data types associated with the tag.

## Syntax

```js-nolint
type()
```

### Parameters

None

### Return value

An object with a property named `parameters` that references the array of data types associated with this [`Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag).

This is a copy of the `type` object that was originally passed into the [`Tag()` constructor](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag).

## Examples

This code snippet creates a tag defining two data types and then retrieves them using `type()`:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());
```

The object logged to the console will look like so:

```json
{
  "parameters": ["i32", "i64"]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
