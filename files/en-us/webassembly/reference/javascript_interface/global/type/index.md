---
title: WebAssembly.Global.prototype.type()
slug: WebAssembly/Reference/JavaScript_interface/Global/type
page-type: webassembly-instance-method
browser-compat: webassembly.api.Global.type
sidebar: webassemblysidebar
---

The **`type()`** prototype method of the [`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) object returns an object describing the type of the global, including its value type and mutability.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

An object with the following properties:

- `value`
  - : A string representing the data type of the global. One of `"i32"`, `"i64"`, `"f32"`, `"f64"`, `"v128"`, `"anyfunc"`, or `"externref"`.
- `mutable`
  - : A boolean. `true` if the global is mutable, `false` if it is not.

## Examples

The following code creates a mutable `i32` global and inspects its type:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 42);
console.log(global.type());
// { value: "i32", mutable: true }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
