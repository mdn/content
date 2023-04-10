---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.includes
---

{{JSRef}}

The **`includes()`** method performs a case-sensitive search to determine whether one string may be found within another string, returning `true` or `false` as appropriate.

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## Syntax

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Parameters

- `searchString`
  - : A string to be searched for within `str`. Cannot [be a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). All values that are not regexes are [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), so omitting it or passing `undefined` causes `includes()` to search for the string `"undefined"`, which is rarely what you want.
- `position` {{optional_inline}}
  - : The position within the string at which to begin searching for `searchString`. (Defaults to `0`.)

### Return value

**`true`** if the search string is found anywhere within the given string, including when `searchString` is an empty string; otherwise, **`false`**.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `searchString` [is a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Description

This method lets you determine whether or not a string includes another string.

### Case-sensitivity

The `includes()` method is case sensitive. For example, the following expression returns `false`:

```js
"Blue Whale".includes("blue"); // returns false
```

You can work around this constraint by transforming both the original string and the search string to all lowercase:

```js
"Blue Whale".toLowerCase().includes("blue"); // returns true
```

## Examples

### Using includes()

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
