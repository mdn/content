---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
  - Polyfill
browser-compat: javascript.builtins.String.search
---
{{JSRef}}

The **`search()`** method executes a search for a match between
a regular expression and this {{jsxref("String")}} object.

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## Syntax

```js
search(regexp)
```

### Parameters

- `regexp`

  - : A [regular expression](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) object.

    If a non-RegExp object `regexp` is passed, it is implicitly
    converted to a {{jsxref("RegExp")}} with `new RegExp(regexp)`.

### Return value

The index of the first match between the regular expression and the given string, or
`-1` if no match was found.

## Description

When you want to know whether a pattern is found, and _also_ know its index
within a string, use `search()`. (If you only want to know if it exists, use
the similar {{jsxref("RegExp.prototype.test()", "test()")}} method on the
`RegExp` prototype, which returns a boolean.)

For more information (but slower execution) use {{jsxref("String.prototype.match()",
  "match()")}} (similar to the regular expression {{jsxref("RegExp.prototype.exec()",
  "exec()")}} method).

## Examples

### Using search()

The following example searches a string with two different regex objects to show a
successful search (positive value) vs. an unsuccessful search (`-1`)

```js
let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.search` in `core-js` with fixes and implementation of modern behavior like `Symbol.search` support](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Using regular expressions in JavaScript](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
