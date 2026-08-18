---
title: WebAssembly.Exception.prototype.is()
slug: WebAssembly/Reference/JavaScript_interface/Exception/is
page-type: webassembly-instance-method
browser-compat: webassembly.api.Exception.is
sidebar: webassemblysidebar
---

The **`is()`** method of the [`Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) object can be used to test if the `Exception` matches a given tag.

The method might be used to test that a tag is correct before passing it to [`Exception.prototype.getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) to get the passed values.
It can be used on tags created in JavaScript and those created in WebAssembly code and exported to JavaScript.

## Syntax

```js-nolint
is(tag)
```

### Parameters

- `tag`
  - : A [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) that can be checked to verify the type of the exception.

### Return value

A boolean value — `true` if the specified tag matches the exception, and `false` otherwise.

To return `true`, it is not enough for the tag to have an identical sequence of data types — it must have the same _identity_ (be the same tag) as was used to create the exception.

## Examples

The code below shows how to use `is()` to verify that a tag matches an [`Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception).

```js
// Create tag and use it to create an exception
const tag1 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
const exception1 = new WebAssembly.Exception(tag1, [42, 42.3]);

// Verify that "tag1" matches this exception
console.log(`Tag1: ${exception1.is(tag1)}`);
```

This will log `Tag1: true` to the console.

We can also demonstrate that this exception will not match another tag even if the tag is created with the same parameters.

```js
// Create a new tag (with same parameters) and verify it does not match the exception
const tag2 = new WebAssembly.Tag({ parameters: ["i32", "f64"] });
console.log(`Tag2: ${exception1.is(tag2)}`);
```

This will log `Tag2: false` to the console.

For a full working example, see the [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction reference page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
