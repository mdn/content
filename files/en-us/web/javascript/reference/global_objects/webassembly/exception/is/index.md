---
title: WebAssembly.Exception.prototype.is()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/is
tags:
  - API
  - JavaScript
  - Method
  - Reference
  - WebAssembly
  - is
  - Exception
browser-compat: javascript.builtins.WebAssembly.Exception.is
---
{{JSRef}}

The **`is()`** prototype method of the [`Exception`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception) object can be used to test if the `Exception` matches a given tag.

The method might be used to test that a tag is correct before passing it to [`Exception.prototype.getArg()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception/getArg) to get the passed values.
It can be used on tags created in JavaScript or created in WebAssembly code and exported to JavaScript.

> **Note:** It is not enough that the tag has an identical sequence of data types — it must have the same _identity_ (be the same tag) as was used to create the exception.

## Syntax

```js
is(tag)
```

### Parameters

- `tag`
  - : An {{jsxref("WebAssembly.Tag")}} that can be checked to verify the type of the exception.

### Return value

A boolean `true` if the specified tag matches the exception, and `false` otherwise.

## Examples

The code below shows how to use `is()` to verify that a tag matches an [`Exception`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Exception).

```js
// Create tag and use it to create an exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Verify that "tag1" matches this exception
console.log(`Tag1: ${exception1.is(tag1)}`);

// Log output:
// Tag1: true
```

We can also demonstrate that this exception will not match another tag even if the tag is created with the same parameters.

```js
// Create a new tag (with same parameters) and verify it does not match the exception
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);

// Log output:
// Tag2: false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
